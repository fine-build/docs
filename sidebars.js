/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  platform: [
    {
      //getting started section start
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'overview',
        'user',
        {
          type: 'category',
          collapsed: true,
          label: 'Self Hosting',
          link: { type: 'doc', id: 'deploy/deploy-docker' },
          items: [{type: 'autogenerated', dirName: 'deploy'}],
        },
        'user/download-apps',
      ]
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Setup Your Organization',
      link: {type: 'doc', id: 'admin'},
      items: [{type: 'autogenerated', dirName: 'admin'}],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Extend with Clicks',
      link: {type: 'doc', id: 'no-code'},
      items: [{type: 'autogenerated', dirName: 'no-code'}],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Automate Your Processes',
      link: {type: 'doc', id: 'automation'},
      items: [{type: 'autogenerated', dirName: 'automation'}],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Integrations',
      link: {type: 'doc', id: 'integration'},
      items: [{type: 'autogenerated', dirName: 'integration'}],
    },
  ],

  apps: [
    {type: 'autogenerated', dirName: 'apps'}
  ],
  developer: [
    {
      type: 'category',
      collapsed: false,
      label: 'Developer Guide',
      link: {type: 'doc', id: 'developer'},
      items: [{type: 'autogenerated', dirName: 'developer'}],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'API Reference',
      items: [{type: 'autogenerated', dirName: 'api'}],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Product',
      items: [
        {
          type: 'link',
          label: 'Release Notes', // The link label
          href: 'https://github.com/orgs/steedos/projects/9', // The external URL
        },     
        {
          type: 'link',
          label: 'Contribute', // The link label
          href: 'https://github.com/steedos/steedos-platform/blob/master/CONTRIBUTING.md', // The external URL
        },   
      ]
    }
  ]
};

module.exports = sidebars;
