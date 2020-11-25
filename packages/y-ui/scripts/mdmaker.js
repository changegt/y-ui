const path = require('path');
const fs = require('fs');
const reactDocgen = require('react-docgen');
const ReactDocGenMarkdownRenderer = require('react-docgen-markdown-renderer');

const componentPath = path.resolve('./src/YLine/index.tsx');
const renderer = new ReactDocGenMarkdownRenderer();

fs.readFile(componentPath, (error, content) => {
  const documentationPath = path.resolve('./src/YLine/index2.md');

  const doc = reactDocgen.parse(content);

  console.log(doc);

  fs.writeFile(documentationPath, renderer.render(
    /* The path to the component, used for linking to the file. */
    componentPath,
    /* The actual react-docgen AST */
    doc,
    /* Array of component ASTs that this component composes*/
    []));
});