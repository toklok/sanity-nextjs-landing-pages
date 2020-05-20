export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec47ede65b5430a071aa4e3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cusvp1ro',
                  apiId: '22229870-4a15-452b-b4b8-6b6b6f8884fc'
                },
                {
                  buildHookId: '5ec47ede51bc06d2aa61412c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nyqt3dyd',
                  apiId: '732afe27-8afc-4e02-9e5c-c2b341be109a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/toklok/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nyqt3dyd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
