module.exports = function (plop) {
  plop.setGenerator('create_components', {
    description: 'This will create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of this component?',
      },
    ],
    actions: [
      // {
      //   type: 'add',
      //   path: 'src/components/{{name}}/{{ pascalCase name }}.tsx',
      //   templateFile: 'templates/Component.tsx.hbs',
      // },
      {
        type: 'add',
        path: 'src/components/{{name}}/docz/{{ pascalCase name }}.docz.tsx',
        templateFile: 'templates/Document.docz.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/docz/{{ pascalCase name }}.mdx',
        templateFile: 'templates/Document.mdx.hbs',
      },
      // {
      //   type: 'add',
      //   path:
      //     'src/components/{{name}}/__tests__/{{ pascalCase name }}.spec.tsx',
      //   templateFile: 'templates/Component.spec.tsx.hbs',
      // },
    ],
  });
};
