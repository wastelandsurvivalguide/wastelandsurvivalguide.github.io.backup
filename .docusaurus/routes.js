import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '91b'),
    exact: true
  },
  {
    path: '/blog/2022/03/30/changelog',
    component: ComponentCreator('/blog/2022/03/30/changelog', '289'),
    exact: true
  },
  {
    path: '/blog/2022/04/30/changelog',
    component: ComponentCreator('/blog/2022/04/30/changelog', 'c44'),
    exact: true
  },
  {
    path: '/blog/2022/05/30/changelog',
    component: ComponentCreator('/blog/2022/05/30/changelog', '6b1'),
    exact: true
  },
  {
    path: '/blog/2022/06/30/changelog',
    component: ComponentCreator('/blog/2022/06/30/changelog', 'cc3'),
    exact: true
  },
  {
    path: '/blog/2022/07/30/changelog',
    component: ComponentCreator('/blog/2022/07/30/changelog', '1c1'),
    exact: true
  },
  {
    path: '/blog/2022/08/30/changelog',
    component: ComponentCreator('/blog/2022/08/30/changelog', '07a'),
    exact: true
  },
  {
    path: '/blog/2022/09/30/changelog',
    component: ComponentCreator('/blog/2022/09/30/changelog', '3d2'),
    exact: true
  },
  {
    path: '/blog/2022/10/30/changelog',
    component: ComponentCreator('/blog/2022/10/30/changelog', '52e'),
    exact: true
  },
  {
    path: '/blog/2022/11/30/changelog',
    component: ComponentCreator('/blog/2022/11/30/changelog', 'e39'),
    exact: true
  },
  {
    path: '/blog/2023/01/30/changelog',
    component: ComponentCreator('/blog/2023/01/30/changelog', 'b3d'),
    exact: true
  },
  {
    path: '/blog/2023/02/23/redesign',
    component: ComponentCreator('/blog/2023/02/23/redesign', '24e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '352'),
    exact: true
  },
  {
    path: '/blog/page/2',
    component: ComponentCreator('/blog/page/2', '3fe'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '82f'),
    exact: true
  },
  {
    path: '/guide',
    component: ComponentCreator('/guide', '182'),
    routes: [
      {
        path: '/guide/animations',
        component: ComponentCreator('/guide/animations', 'ba4'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/guide/appendix',
        component: ComponentCreator('/guide/appendix', '78e'),
        exact: true,
        sidebar: "appendixSidebar"
      },
      {
        path: '/guide/content',
        component: ComponentCreator('/guide/content', '492'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/guide/contributors',
        component: ComponentCreator('/guide/contributors', 'e3b'),
        exact: true
      },
      {
        path: '/guide/dogma',
        component: ComponentCreator('/guide/dogma', 'b38'),
        exact: true,
        sidebar: "appendixSidebar"
      },
      {
        path: '/guide/faq',
        component: ComponentCreator('/guide/faq', '6bf'),
        exact: true,
        sidebar: "appendixSidebar"
      },
      {
        path: '/guide/finish',
        component: ComponentCreator('/guide/finish', 'e84'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/guide/gameplay',
        component: ComponentCreator('/guide/gameplay', 'd9c'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/guide/intro',
        component: ComponentCreator('/guide/intro', '903'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/guide/lod',
        component: ComponentCreator('/guide/lod', '38d'),
        exact: true,
        sidebar: "appendixSidebar"
      },
      {
        path: '/guide/mo2',
        component: ComponentCreator('/guide/mo2', '61b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/guide/mods-avoid',
        component: ComponentCreator('/guide/mods-avoid', 'bb0'),
        exact: true
      },
      {
        path: '/guide/overhauls',
        component: ComponentCreator('/guide/overhauls', '2ea'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/guide/setup',
        component: ComponentCreator('/guide/setup', '49e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/guide/themethod',
        component: ComponentCreator('/guide/themethod', '4eb'),
        exact: true,
        sidebar: "appendixSidebar"
      },
      {
        path: '/guide/tools-avoid',
        component: ComponentCreator('/guide/tools-avoid', 'efb'),
        exact: true
      },
      {
        path: '/guide/ttw',
        component: ComponentCreator('/guide/ttw', '36e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/guide/ui',
        component: ComponentCreator('/guide/ui', 'c2f'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/guide/utilities',
        component: ComponentCreator('/guide/utilities', 'a5f'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/guide/visuals',
        component: ComponentCreator('/guide/visuals', '301'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/guide/xedit',
        component: ComponentCreator('/guide/xedit', '1ef'),
        exact: true,
        sidebar: "appendixSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '4b7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
