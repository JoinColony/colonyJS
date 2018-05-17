#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const parser = require('flow-parser');
const types = require('ast-types');

const TYPES = {
  BooleanTypeAnnotation: 'boolean',
  StringTypeAnnotation: 'string',
  NumberTypeAnnotation: 'number',
  Date: 'Date',
  Address: 'Address',
};

const ast = parser.parse(
  fs.readFileSync(path.resolve(process.cwd(), process.argv[2])).toString(),
);

const callers = [];
const senders = [];
const multisig = [];

types.visit(ast, {
  visitQualifiedTypeIdentifier(p) {
    if (p.value.id.name === 'Caller') {
      const { params } = p.parent.value.typeParameters;

      callers.push({
        name: getName(p),
        description: getDescription(p),
        args: mapObjectProps(params[0]),
        returns: mapObjectProps(params[1]),
      });
    }
    if (p.value.id.name === 'Sender') {
      const { params } = p.parent.value.typeParameters;

      senders.push({
        name: getName(p),
        description: getDescription(p),
        args: mapObjectProps(params[0]),
        events: mapObjectProps(params[1]),
      });
    }
    if (p.value.id.name === 'MultisigSender') {
      const { params } = p.parent.value.typeParameters;

      multisig.push({
        name: getName(p),
        description: getDescription(p),
        args: mapObjectProps(params[0]),
        events: mapObjectProps(params[1]),
      });
    }
    return false;
  },
});

const md = `
${printCallers()}
${printSenders()}
${printMultiSig()}
`.trim();

console.log(md);

function printCallers() {
  if (!callers.length) return '';
  return '## Callers\n' + callers
    .map(
      caller => `
### \`${caller.name}.call(${printArgs(caller.args)})\`

${caller.description}
${printProps('Param', caller.args)}
${printProps('Return value', caller.returns)}
`,
    )
    .join('');
}

function printSenders() {
  if (!senders.length) return '';
  return '## Senders\n' + senders
    .map(
      sender => `
### \`${sender.name}.send(${printArgs(sender.args)})\`

${sender.description}
${printProps('Param', sender.args)}
${printProps('Event data', sender.events)}
`,
    )
    .join('');
}

function printMultiSig() {
  if (!multisig.length) return '';
  return '## Task MultiSig\n' + multisig
    .map(
      ms => `
### \`${ms.name}.send(${printArgs(ms.args)})\`

${ms.description}
${printProps('Param', ms.args)}
${printProps('Event data', ms.events)}
`,
    )
    .join('');
}

function printProps(title, props) {
  if (props && props.length) {
    return `\n|${title}|Type|Description|
|---|---|---|
${props
      .map(param => `|${param.name}|${param.type}|${param.description}|`)
      .join('\n')}`;
  }
  return ``;
}

function printArgs(args) {
  if (args && args.length) {
    return `{ ${args.map(arg => arg.name).join(', ')} }, options`;
  }
  return 'options';
}

function mapObjectProps(param) {
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

function getDescription(p) {
  const commentLine = p.parent.parent.parent.value.loc.start.line - 1;
  const comment = ast.comments.find(c => c.loc.end.line === commentLine);
  return formatDescription(comment && comment.value);
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

function mapType(type) {
  if (type.type === 'GenericTypeAnnotation') {
    return TYPES[type.id.name];
  }
  return TYPES[type.type];
}
