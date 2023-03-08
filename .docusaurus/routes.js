import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/wastelandsurvivalguide/blog',
    component: ComponentCreator('/wastelandsurvivalguide/blog', 'bd9'),
    exact: true
  },
  {
    path: '/wastelandsurvivalguide/blog/2022/03/30/changelog',
    component: ComponentCreator('/wastelandsurvivalguide/blog/2022/03/30/changelog', '4e4'),
    exact: true
  },
  {
    path: '/wastelandsurvivalguide/blog/2022/04/30/changelog',
    component: ComponentCreator('/wastelandsurvivalguide/blog/2022/04/30/changelog', '093'),
    exact: true
  },
  {
    path: '/wastelandsurvivalguide/blog/2022/05/30/changelog',
    component: ComponentCreator('/wastelandsurvivalguide/blog/2022/05/30/changelog', '395'),
    exact: true
  },
  {
    path: '/wastelandsurvivalguide/blog/2022/06/30/changelog',
    component: ComponentCreator('/wastelandsurvivalguide/blog/2022/06/30/changelog', '6bd'),
    exact: true
  },
  {
    path: '/wastelandsurvivalguide/blog/2022/07/30/changelog',
    component: ComponentCreator('/wastelandsurvivalguide/blog/2022/07/30/changelog', 'd0c'),
    exact: true
  },
  {
    path: '/wastelandsurvivalguide/blog/2022/08/30/changelog',
    component: ComponentCreator('/wastelandsurvivalguide/blog/2022/08/30/changelog', '020'),
    exact: true
  },
  {
    path: '/wastelandsurvivalguide/blog/2022/09/30/changelog',
    component: ComponentCreator('/wastelandsurvivalguide/blog/2022/09/30/changelog', 'f0f'),
    exact: true
  },
  {
    path: '/wastelandsurvivalguide/blog/2022/10/30/changelog',
    component: ComponentCreator('/wastelandsurvivalguide/blog/2022/10/30/changelog', 'df5'),
    exact: true
  },
  {
    path: '/wastelandsurvivalguide/blog/2022/11/30/changelog',
    component: ComponentCreator('/wastelandsurvivalguide/blog/2022/11/30/changelog', 'e22'),
    exact: true
  },
  {
    path: '/wastelandsurvivalguide/blog/2023/01/30/changelog',
    component: ComponentCreator('/wastelandsurvivalguide/blog/2023/01/30/changelog', 'd60'),
    exact: true
  },
  {
    path: '/wastelandsurvivalguide/blog/2023/02/23/redesign',
    component: ComponentCreator('/wastelandsurvivalguide/blog/2023/02/23/redesign', '40a'),
    exact: true
  },
  {
    path: '/wastelandsurvivalguide/blog/archive',
    component: ComponentCreator('/wastelandsurvivalguide/blog/archive', '025'),
    exact: true
  },
  {
    path: '/wastelandsurvivalguide/blog/page/2',
    component: ComponentCreator('/wastelandsurvivalguide/blog/page/2', '8b0'),
    exact: true
  },
  {
    path: '/wastelandsurvivalguide/markdown-page',
    component: ComponentCreator('/wastelandsurvivalguide/markdown-page', 'df7'),
    exact: true
  },
  {
    path: '/wastelandsurvivalguide/guide',
    component: ComponentCreator('/wastelandsurvivalguide/guide', 'cdb'),
    routes: [
      {
        path: '/wastelandsurvivalguide/guide/animations',
        component: ComponentCreator('/wastelandsurvivalguide/guide/animations', '6ba'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/appendix',
        component: ComponentCreator('/wastelandsurvivalguide/guide/appendix', 'b3f'),
        exact: true,
        sidebar: "appendixSidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/content',
        component: ComponentCreator('/wastelandsurvivalguide/guide/content', 'e2d'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/contributors',
        component: ComponentCreator('/wastelandsurvivalguide/guide/contributors', '1ea'),
        exact: true
      },
      {
        path: '/wastelandsurvivalguide/guide/dogma',
        component: ComponentCreator('/wastelandsurvivalguide/guide/dogma', 'be4'),
        exact: true,
        sidebar: "appendixSidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/faq',
        component: ComponentCreator('/wastelandsurvivalguide/guide/faq', 'a39'),
        exact: true,
        sidebar: "appendixSidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/finish',
        component: ComponentCreator('/wastelandsurvivalguide/guide/finish', '032'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/gameplay',
        component: ComponentCreator('/wastelandsurvivalguide/guide/gameplay', '9bd'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/intro',
        component: ComponentCreator('/wastelandsurvivalguide/guide/intro', '834'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/lod',
        component: ComponentCreator('/wastelandsurvivalguide/guide/lod', 'c4c'),
        exact: true,
        sidebar: "appendixSidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/mo2',
        component: ComponentCreator('/wastelandsurvivalguide/guide/mo2', 'c86'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/mods-avoid',
        component: ComponentCreator('/wastelandsurvivalguide/guide/mods-avoid', 'df7'),
        exact: true
      },
      {
        path: '/wastelandsurvivalguide/guide/overhauls',
        component: ComponentCreator('/wastelandsurvivalguide/guide/overhauls', 'd31'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/setup',
        component: ComponentCreator('/wastelandsurvivalguide/guide/setup', '41b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/themethod',
        component: ComponentCreator('/wastelandsurvivalguide/guide/themethod', '556'),
        exact: true,
        sidebar: "appendixSidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/tools-avoid',
        component: ComponentCreator('/wastelandsurvivalguide/guide/tools-avoid', 'f98'),
        exact: true
      },
      {
        path: '/wastelandsurvivalguide/guide/ttw',
        component: ComponentCreator('/wastelandsurvivalguide/guide/ttw', '2a8'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/ui',
        component: ComponentCreator('/wastelandsurvivalguide/guide/ui', '2cb'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/utilities',
        component: ComponentCreator('/wastelandsurvivalguide/guide/utilities', '1f9'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/visuals',
        component: ComponentCreator('/wastelandsurvivalguide/guide/visuals', 'd10'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/wastelandsurvivalguide/guide/xedit',
        component: ComponentCreator('/wastelandsurvivalguide/guide/xedit', 'f1b'),
        exact: true,
        sidebar: "appendixSidebar"
      }
    ]
  },
  {
    path: '/wastelandsurvivalguide/',
    component: ComponentCreator('/wastelandsurvivalguide/', 'eef'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
