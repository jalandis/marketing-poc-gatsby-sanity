export default {
  widgets: [
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
                  buildHookId: '60328db102ba89e7d62f2281',
                  title: 'Sanity Studio',
                  name: 'marketing-poc-gatsby-sanity-studio',
                  apiId: '27332ffd-17cf-49b6-a97b-3a1ade548c72'
                },
                {
                  buildHookId: '60328db196063bdb92b7d640',
                  title: 'Blog Website',
                  name: 'marketing-poc-gatsby-sanity',
                  apiId: '3612f421-4acf-4fbf-8791-ff50cd75d712'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jalandis/marketing-poc-gatsby-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://marketing-poc-gatsby-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
