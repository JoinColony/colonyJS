#!/usr/bin/env node
/* eslint-disable */

const fs = require('fs');
const path = require('path');
const parser = require('flow-parser');
const types = require('ast-types');

const CONTRACT_CLIENTS = [
  {
    file: path.resolve(__dirname, '..', 'src', 'ColonyClient', 'index.js'),
    templateFile: path.resolve(__dirname, '..', 'docs', '_API_ColonyClient.template.md'),
    output: path.resolve(__dirname, '..', '..', '..', 'docs', '_API_ColonyClient.md'),
  },
  {
    file: path.resolve(__dirname, '..', 'src', 'ColonyNetworkClient', 'index.js'),
    templateFile: path.resolve(__dirname, '..', 'docs', '_API_ColonyNetworkClient.template.md'),
    output: path.resolve(__dirname, '..', '..', '..', 'docs', '_API_ColonyNetworkClient.md'),
  },
  {
    file: path.resolve(__dirname, '..', 'src', 'TokenClient', 'index.js'),
    templateFile: path.resolve(__dirname, '..', 'docs', '_API_TokenClient.template.md'),
    output: path.resolve(__dirname, '..', '..', '..', 'docs', '_API_TokenClient.md'),
  },
  {
    file: path.resolve(__dirname, '..', 'src', 'TokenLockingClient', 'index.js'),
    templateFile: path.resolve(__dirname, '..', 'docs', '_API_TokenLockingClient.template.md'),
    output: path.resolve(__dirname, '..', '..', '..', 'docs', '_API_TokenLockingClient.md'),
  },
];

const TYPES = {
  Address: 'address',
  AnyAddress: 'address (0x0 included)',
  Array: 'array',
  AuthorityRole: 'authority role',
  BigNumber: 'big number',
  BooleanTypeAnnotation: 'boolean',
  Date: 'date',
  HexString: 'hex string',
  IPFSHash: 'IPFS hash',
  NumberTypeAnnotation: 'number',
  StringTypeAnnotation: 'string',
  TaskRole: 'task role',
  TaskStatus: 'task status',
};

const generateMarkdown = ({ file, templateFile, output }) => {
  const ast = parser.parse(fs.readFileSync(file).toString());

  const callers = [];
  const senders = [];
  const multisig = [];
  const events = [];

  types.visit(ast, {
    visitQualifiedTypeIdentifier(p) {
      if (p.value.id.name === 'Caller') {
        const { params } = p.parent.value.typeParameters;

        callers.push({
          name: getName(p),
          description: getDescription(ast, p),
          args: mapObjectProps(ast, params[0]),
          returns: mapObjectProps(ast, params[1]),
          contractData: getContractData(params[3]),
        });
      }
      else if (p.value.id.name === 'Sender') {
        const { params } = p.parent.value.typeParameters;

        senders.push({
          name: getName(p),
          description: getDescription(ast, p),
          args: mapObjectProps(ast, params[0]),
          events: mapObjectProps(ast, params[1]),
          contractData: getContractData(params[3]),
        });
      }
      else if (p.value.id.name === 'MultisigSender') {
        const { params } = p.parent.value.typeParameters;

        multisig.push({
          name: getName(p),
          description: getDescription(ast, p),
          args: mapObjectProps(ast, params[0]),
          events: mapObjectProps(ast, params[1]),
          contractData: getContractData(params[3]),
        });
      }
      else if (p.value.id.name === 'Event') {
        const { params } = p.parent.value.typeParameters;

        events.push({
          name: getEventName(p),
          description: getDescription(ast, p),
          args: mapObjectProps(ast, params[0]),
        });
      }
      return false;
    },
  });

  const template = fs.readFileSync(templateFile).toString();

  const md = `
  ${template}
  ${printCallers(callers)}
  ${printSenders(senders, events)}
  ${printMultiSig(multisig, events)}
  ${printEvents(events)}
  `.trim();

  fs.writeFileSync(output, md);
};

CONTRACT_CLIENTS.forEach(generateMarkdown);

function printCallers(callers) {
  if (!callers.length) return '';
  // TODO: use templates to properly place this text into the file
  return `
## Callers

**All callers return promises which resolve to an object containing the given return values.**
` +
    callers
      .map(
        caller => `
### \`${caller.name}.call(${printArgs(caller.args, false)})\`

${caller.description}
${caller.args && caller.args.length ? '\n**Input**\n\n' : ''}${printProps(caller.args)}

**Response**

A promise which resolves to an object containing the following properties:

${printProps(caller.returns)}

**Contract Information**

${printContractData(caller.contractData)}
`,
    )
    .join('');
}

function printSenders(senders, events) {
  if (!senders.length) return '';
  // TODO: use templates to properly place this text into the file
  return `
## Senders

**All senders return an instance of a \`ContractResponse\`.** Every \`send()\` method takes an \`options\` object as the second argument.` +
    senders
      .map(
        sender => `
### \`${sender.name}.send(${printArgs(sender.args, true)})\`

${sender.description}
${sender.args && sender.args.length ? '\n**Input**\n\n' : ''}${printProps(sender.args)}

**Options**

See [Sender](/colonyjs/api-contractclient/#sender) for more information about options.

**Response**

An instance of a \`ContractResponse\`${
  // XXX If this gets even more complicated, find another way!
  sender.name === 'createToken' || sender.name === 'createTokenAuthority'
    ? ' which will receive a receipt with a \`contractAddress\` property.'
    : (
        sender.events && sender.events.length
          ? ' which will eventually receive the following event data:'
          : '.'
      )
}

${printProps(getEventProps(events, sender.events))}

See [Sender](/colonyjs/api-contractclient/#sendinput-options) for more information about \`ContractResponse\`.

**Contract Information**

${printContractData(sender.contractData)}
`,
    )
    .join('');
}


function printEvents(events) {
  if (!events.length) return '';
  return `
## Events

` + events.map(event => `
### \`events.${event.name}\`

**Methods**

\`.addListener((${printArgs(event.args)}) => { /* ... */ })\`

\`.removeListener((${printArgs(event.args)}) => { /* ... */ })\`

${event.description}

${event.args && event.args.length ? '\n**Event Data**\n\n' : ''}${printProps(event.args)}

`).join('');
}

function printMultiSig(multisig, events) {
  if (!multisig.length) return '';
  // TODO: use templates to properly place this text into the file
  return `
## MultiSigSenders

**All MultiSig functions return an instance of a \`MultiSigOperation\`.**` +
    multisig
      .map(
        ms => `
### \`${ms.name}.startOperation(${printArgs(ms.args, false)})\`

${ms.description}
${ms.args && ms.args.length ? '\n**Input**\n\n' : ''}${printProps(ms.args)}

**Response**

An instance of a \`MultiSigOperation\`${ms.events && ms.events.length ? ' whose sender will eventually receive the following event data:' : '.'}

${printProps(getEventProps(events, ms.events))}

See [MutisigOperation](/colonyjs/api-multisigoperation/) for more information.

**Contract Information**

${printContractData(ms.contractData)}
`,
    )
    .join('');
}

function printContractData(data) {
  const colonyPath = `https://github.com/JoinColony/colonyNetwork/tree/${data.version}/contracts`
  const contractPath = data.contractPath ? data.contractPath : colonyPath;
  return `
  ${data.function ? `Function: \`${data.function}\`` : ''}
  ${data.contract ? `\nContract: [${data.contract}](${contractPath}/${data.contract})` : ''}
  ${data.interface ? `\nInterface: [${data.interface}](${colonyPath}/${data.interface})` : ''}
  `
}

function printProps(props) {
  if (props && props.length) {
    return `|Name|Type|Description|
|---|---|---|
${props
      .map(param => `|${param.name}|${param.type}|${param.description}|`)
      .join('\n')}`;
  }
  return ``;
}

function getEventProps(contractEvents, methodEvents) {
  // List `eventData` properties with flat properties (e.g. `taskId`) followed
  // by nested properties (e.g. `TaskAdded`).
  const eventData = [].concat(...methodEvents.reduce((acc, methodEvent) => {
    const event = contractEvents.find(({ name }) => name === methodEvent.name);
    event.args.forEach(arg => acc[0].push(arg));
    acc[1].push({
      name: event.name,
      type: 'object',
      description: getNestedEventDescription(event),
    });
    return acc;
  }, [[], []]));
  return eventData.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj.name).indexOf(obj.name) === pos;
  });
}

function printArgs(args, withOpts) {
  if (args && args.length) {
    return `{ ${args.map(arg => arg.name).join(', ')} }${withOpts ? ', options' : ''}`;
  }
  return withOpts ? 'options' : '';
}

function mapObjectProps(ast, param) {
  if (param.type === 'ObjectTypeAnnotation') {
    return param.properties.map(prop => {
      const comment = ast.comments.find(
        c => c.loc.start.line === prop.key.loc.start.line,
      );
      return {
        name: prop.key.name,
        type: mapType(prop.value),
        description: formatDescription(comment && comment.value),
      };
    });
  }
}

function getName(p) {
  return p.parent.parent.parent.value.key.name;
}

function getContractData(param) {
  return param.properties.reduce((obj, item) => {
    return (obj[item.key.name] = item.value.value, obj);
  }, {});
}

function getDescription(ast, p) {
  const commentLine = p.parent.parent.parent.value.loc.start.line - 1;
  const comment = ast.comments.find(c => c.loc.end.line === commentLine);
  return formatDescription(comment && comment.value);
}

function getEventName(p) {
  return p.parentPath.parentPath.value.id
    ? p.parentPath.parentPath.value.id.name
    : p.parentPath.parentPath.value.key.name;
}

function getNestedEventDescription(event) {
  const args = printArgs(event.args).toLowerCase().replace(/\s/g, '').replace(/\W/g, '-');
  return `Contains the data defined in [${event.name}](#events${event.name.toLowerCase()})`;
}

function formatDescription(str) {
  if (str) {
    const description = str
      .trim()
      .replace(
        /\[(.+)\]\((.+?)#(.+)\)/g,
        (_, $1, $2, $3) => `[${$1}](${$2}.html#${$3})`,
      );
    return description;
  }
  return '';
}

function mapType(type, optional = false) {
  if (type.type === 'NullableTypeAnnotation')
    return mapType(type.typeAnnotation, true);

  const name =
    type.type === 'GenericTypeAnnotation'
      ? TYPES[type.id.name]
      : TYPES[type.type];

  return optional ? `${name} (optional)` : name;
}
