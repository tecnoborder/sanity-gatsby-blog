export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fd547e32e317665e56129bd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-22tq2xo1',
                  apiId: '7712c706-3211-479f-9c14-123ea4261a0e'
                },
                {
                  buildHookId: '5fd547e30cd5067cfb26c269',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dsasp66o',
                  apiId: '4b34aeb4-c5ed-4500-9f14-074daba6d7f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tecnoborder/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dsasp66o.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
