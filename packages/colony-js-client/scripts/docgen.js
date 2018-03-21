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
  Address: 'address',
};

const ast = parser.parse(
  fs.readFileSync(path.resolve(process.cwd(), process.argv[2])).toString(),
);

const callers = [];
const senders = [];

types.visit(ast, {
  visitQualifiedTypeIdentifier(path) {
    if (path.value.id.name === 'Caller') {
      const { params } = path.parent.value.typeParameters;

      callers.push({
        name: getName(path),
        description: getDescription(path),
        args: mapObjectProps(params[0]),
        returns: mapObjectProps(params[1]),
      });
    }
    if (path.value.id.name === 'Sender') {
      const { params } = path.parent.value.typeParameters;

      senders.push({
        name: getName(path),
        description: getDescription(path),
        args: mapObjectProps(params[0]),
        events: mapObjectProps(params[1]),
      });
    }
    return false;
  },
});

const md = `
## Callers
${printCallers()}
## Senders
${printSenders()}`.trim();

console.log(md);

function printCallers() {
  return callers
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
  return senders
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

function getName(path) {
  return path.parent.parent.parent.value.key.name;
}

function getDescription(path) {
  const commentLine = path.parent.parent.parent.value.loc.start.line - 1;
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
