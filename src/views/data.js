var marked = require('marked');

var publications = [
  {
    title: 'Raz Schwarz, Mor Naaman, Rannie Teodoro. Editorial Algorithms: Using Social Media to Discover and Report Local News. In Proceedings, ACM International Conference on Web Logs and Social Media. (ICWSM 2015), May 2015, Cambridge, England',
    image: '/assets/img/publication/publication-01.png',
    link: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Schwartz_ICWSM2015_CityBeat.pdf'
  },
  {
    title: 'Minsu Park, Ingmar Weber, Mor Naaman, Sarah Vieweg. Understanding Musical Diversity via Online Social Media. In Proceedings, ACM International Conference on Web Logs and Social Media. (ICWSM 2015), May 2015, Cambridge, England',
    image: '/assets/img/publication/publication-02.png',
    link: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Park_ICWSM2015_MusicalDiversity.pdf'
  },
  {
    title: 'David Flatow, Mor Naaman, Ke Eddie Xie, Yana Volkovich, Yaron Kanza. On the Accuracy of Hyper-local Geotagging of Social Media Content. In Proceedings, the ACM International Conference on Web Search and Data Mining (WSDM 2015). March 2015, Shanghai, China.',
    image: '/assets/img/publication/publication-03.png',
    link: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/flatow_wsdm2015_geocoding.pdf'
  },
  {
    title: 'Funda Kivran-Swaine, Jeremy Ting, Jed Richards Brubaker, Rannie Teodoro, Mor Naaman.Understanding Loneliness in Social Awareness Streams: Expressions and Responses. Eighth International AAAI Conference on Weblogs and Social Media. (ICWSM 2014)',
    image: '/assets/img/publication/publication-04.png',
    link: 'http://www.aaai.org/ocs/index.php/ICWSM/ICWSM14/paper/view/8038/8126'
  },
  {
    title: 'Rannie Teodoro, Pinar Ozturk, Mor Naaman, Winter Mason, and Janne Lindqvist. The Motivations and Experiences of the On-demand Mobile Workforce. In Proceedings, ACM Conference on Computer Supported Cooperative Work. (CSCW 2014), February 2014',
    image: '/assets/img/publication/publication-05.png',
    link: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Teodoro_CSCW2014_mobile_workforce.pdf'
  },
  {
    title: 'Jessa Lingel, Mor Naaman and danah boyd. City, Self, Network: Transnational Migrants and Online Identity Work. In Proceedings, ACM Conference on Computer Supported Cooperative Work. (CSCW 2014), February 2014',
    image: '/assets/img/publication/publication-06.jpg',
    link: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Lingel_CSCW2014_migrants.pdf'
  },
  {
    title: 'Grinberg, Nir, Mor Naaman, Blake Shaw, and Gilad Lotan. "Extracting Diurnal Patterns of Real World Activity from Social Media." In ICWSM. 2013.',
    image: '/assets/img/publication/publication-07.png',
    link: 'http://www.nirg.net/papers/grinberg-icwsm2013-extracting.pdf'
  },
];

var projects = [
  {
    title: 'Locally-Connected Experiences',
    image: '/assets/img/project/project-1.jpg',
    desc: 'As part of the AOL [Connected Experiences Laboratory](http://connectedexperiences.org/), we look at how data from mobile devices, sensors, as well as new cryptographic techniques and protocols can enable a socio-technical infrastructure to provide awareness, trust and meaningful connections between physically co-located individuals, including buildings, offices, and public spaces. Such infrastructure will empower people to make better connections and communication in their local communities, with long term impact on participation and democracy.',
    link: '#'
  },
  {
    title: 'Attention to Online Media',
    image: '/assets/img/project/project-2.jpg',
    desc: 'The goal of this project is to advance our understanding of the psychological mechanisms behind people\'s attention, as reflected through their interactions with digital content. In particular, we focus on the context of actions that people take online without any experimental intervention and examine how context affects behavior. We draw on theories from a wide range of fields to address questions that pertain to individual\'s attention to content, expectations for attention from others and the value in getting that attention. To that end, we harness machine learning methods as well as language and statistical modeling to analyze signals of human attention as they occurs naturally outside of lab settings.',
    link: '#'
  },
].map(function(p) {
  p.desc = marked(p.desc);
  return p;
});

var people = [
  {
    name: 'Mor Naaman',
    title: 'Associate Professor',
    link: 'https://people.jacobs.cornell.edu/mor/',
    image: '/assets/img/people/profile_pic_mor.jpg',
    email: 'mor@jacobs.cornell.edu',
    twitter: 'infomor'
  },
  {
    name: 'Ross McLachlan',
    title: 'Post-doc',
    link: 'http://www.rossmclachlan.co.uk/',
    image: '/assets/img/people/profile_pic_ross.jpg',
    email: 'rdm257@cornell.edu',
    twitter: 'rossdmcLachlan'
  },
  {
    name: 'Nir Grinberg',
    title: 'PhD Student',
    link: 'http://www.nirg.net/',
    image: '/assets/img/people/profile_pic_nir.jpg',
    email: 'nir@cs.cornell.edu',
    twitter: 'grinbergnir'
  },  
  {
    name: 'Xiao Ma',
    title: 'PhD Student',
    link: 'http://maxiao.info/',
    image: '/assets/img/people/profile_pic_xiao.jpg',
    email: 'xiao@jacobs.cornell.edu',
    twitter: 'infoxiao'
  },
  {
    name: 'Minsu Park',
    title: 'PhD Student',
    link: 'https://sites.google.com/site/mansumansu/',
    image: '/assets/img/people/profile_pic_minsu.png',
    email: 'minsu@jacobs.cornell.edu',
    twitter: 'mansumansu'
  },
  {
    name: 'Emily Sun',
    title: 'PhD Student',
    link: 'http://emilywsun.com',
    image: '/assets/img/people/profile_pic_emily.jpg',
    email: 'emily@jacobs.cornell.edu',
    twitter: 'emilywsun'
  },
  {
    name: 'Lousie Barkhus',
    title: 'Visiting Professor',
    link: 'http://www.barkhu.us/',
    image: '/assets/img/people/profile_pic_louise.jpg',
    email: 'barkhuus@cornell.edu',
    twitter: 'barkhuus'
  },
  {
    name: 'Matthew Salganik',
    title: 'Visiting Professor',
    link: 'http://www.princeton.edu/~mjs3/',
    image: '/assets/img/people/profile_pic_matthew.jpg',
    email: 'mjs99@cornell.edu',
    twitter: 'msalganik'
  }
];

var news = [
  {
    title: 'We had 4 papers accepted to CHI 2016 in San Jose! Congratulations to Xiao, Nir, Louise, and Mor!',
    date: '12/2015'
  },
  {
    title: 'Our lab is hiring PhD students! Check out the [Cornell Information Science site](http://infosci.cornell.edu/academics/phd/how-apply) on how to apply to work with us next year.',
    date: '12/2015'
  },
  {
    title: 'Mor recently gave two different workshop keynotes at [IEEE International Conference on Data Mining](http://icdm2015.stonybrook.edu/) (ICDM 2015) in Atlantic City on November 14-17.',
    date: '11/2015'
  },
].map(function(n) {
  n.title = marked(n.title);
  return n;
});

module.exports = {
  publications: publications,
  projects: projects,
  people: people,
  news: news,
};
