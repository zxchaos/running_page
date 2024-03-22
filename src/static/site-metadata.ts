interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'zxchaos的跑步记录',
  siteUrl: 'https://run.zxchaos.xyz',
  logo: 'https://avatar-5k2.pages.dev/running_main_3.png',
  description: 'zxchaos的跑步记录',
  navLinks: [
    // {
    //   name: 'Blog',
    //   url: 'https://github.com/yihong0618/gitblog',
    // },
    // {
    //   name: 'About',
    //   url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    // },
  ],
};

export default data;
