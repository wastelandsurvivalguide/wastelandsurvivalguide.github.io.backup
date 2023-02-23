import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f1c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '18b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '483'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b36'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '000'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e8d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '6a0'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '01a'),
    exact: true
  },
  {
    path: '/blog/2022/03/30/changelog',
    component: ComponentCreator('/blog/2022/03/30/changelog', '454'),
    exact: true
  },
  {
    path: '/blog/2022/04/30/changelog',
    component: ComponentCreator('/blog/2022/04/30/changelog', '5aa'),
    exact: true
  },
  {
    path: '/blog/2022/05/30/changelog',
    component: ComponentCreator('/blog/2022/05/30/changelog', 'c1d'),
    exact: true
  },
  {
    path: '/blog/2022/06/30/changelog',
    component: ComponentCreator('/blog/2022/06/30/changelog', '7f1'),
    exact: true
  },
  {
    path: '/blog/2022/07/30/changelog',
    component: ComponentCreator('/blog/2022/07/30/changelog', '223'),
    exact: true
  },
  {
    path: '/blog/2022/08/30/changelog',
    component: ComponentCreator('/blog/2022/08/30/changelog', 'bb9'),
    exact: true
  },
  {
    path: '/blog/2022/09/30/changelog',
    component: ComponentCreator('/blog/2022/09/30/changelog', '84e'),
    exact: true
  },
  {
    path: '/blog/2022/10/30/changelog',
    component: ComponentCreator('/blog/2022/10/30/changelog', '6c5'),
    exact: true
  },
  {
    path: '/blog/2022/11/30/changelog',
    component: ComponentCreator('/blog/2022/11/30/changelog', '4f3'),
    exact: true
  },
  {
    path: '/blog/2023/01/30/changelog',
    component: ComponentCreator('/blog/2023/01/30/changelog', '9ba'),
    exact: true
  },
  {
    path: '/blog/2023/02/23/redesign',
    component: ComponentCreator('/blog/2023/02/23/redesign', '7b1'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'bb4'),
    exact: true
  },
  {
    path: '/blog/page/2',
    component: ComponentCreator('/blog/page/2', 'ad4'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '06e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fcd'),
    routes: [
      {
        path: '/docs/animations',
        component: ComponentCreator('/docs/animations', '745'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/appendix',
        component: ComponentCreator('/docs/appendix', 'd4b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/content',
        component: ComponentCreator('/docs/content', '0e2'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/contributors',
        component: ComponentCreator('/docs/contributors', '3ab'),
        exact: true,
        sidebar: "GuideSidebar"
      },
      {
        path: '/docs/dogma',
        component: ComponentCreator('/docs/dogma', 'a7a'),
        exact: true,
        sidebar: "GuideSidebar"
      },
      {
        path: '/docs/faq',
        component: ComponentCreator('/docs/faq', '670'),
        exact: true,
        sidebar: "GuideSidebar"
      },
      {
        path: '/docs/finish',
        component: ComponentCreator('/docs/finish', '93f'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/gameplay',
        component: ComponentCreator('/docs/gameplay', '029'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/homes',
        component: ComponentCreator('/docs/homes', '9da'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'a91'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/lod',
        component: ComponentCreator('/docs/lod', '0a7'),
        exact: true,
        sidebar: "GuideSidebar"
      },
      {
        path: '/docs/mo2',
        component: ComponentCreator('/docs/mo2', 'e90'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/overhauls',
        component: ComponentCreator('/docs/overhauls', '606'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/resources',
        component: ComponentCreator('/docs/resources', 'a0a'),
        exact: true,
        sidebar: "GuideSidebar"
      },
      {
        path: '/docs/setup',
        component: ComponentCreator('/docs/setup', '049'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/themethod',
        component: ComponentCreator('/docs/themethod', '83e'),
        exact: true,
        sidebar: "GuideSidebar"
      },
      {
        path: '/docs/ttw',
        component: ComponentCreator('/docs/ttw', '53a'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/ui',
        component: ComponentCreator('/docs/ui', '16b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/utilities',
        component: ComponentCreator('/docs/utilities', 'e9e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/visuals',
        component: ComponentCreator('/docs/visuals', '7bf'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/xedit',
        component: ComponentCreator('/docs/xedit', 'aab'),
        exact: true,
        sidebar: "GuideSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'dc8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
