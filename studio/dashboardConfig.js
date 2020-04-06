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
                  buildHookId: '5e8b19b5a579bbf809c42447',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6ufkifm9',
                  apiId: '111a1850-7599-4dd8-a5c6-91cc6296c68d'
                },
                {
                  buildHookId: '5e8b19b56ee65728ab9fe1d4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-icm9c9ye',
                  apiId: '44e4ef72-915f-477b-b2da-c47fb16e278a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joelNguyenn1010/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-icm9c9ye.netlify.com', category: 'apps'}
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
