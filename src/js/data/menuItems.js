import instagram from '../../assets/images/social/instagram.png';
import facebook from '../../assets/images/social/facebook.png';
import linkedin from '../../assets/images/social/linkedin.png';
import twitter from '../../assets/images/social/twitter.png';

export const headerMenu = [
  {
    state: '/view-bike',
    name: 'Buy Bike',
    type: 'main',
    icon: '',
  },
  {
    state: '/sell-bike',
    name: 'Sell Bike',
    type: 'main',
    icon: '',
  },
  {
    state: '',
    name: 'More',
    type: 'sub',
    icon: '',
    children: [
      {
        state: '/bike-value-calculator',
        name: 'Bike Value Calculator',
        type: 'link',
        icon: '',
      },
      {
        state: '/about-us',
        name: 'About Us',
        type: 'main',
        icon: '',
      },
    ],
  },
];

export const headerMenuMobileMain = [
  {
    state: '/view-bike',
    name: 'Buy Bike',
    type: 'main',
    icon: '',
  },
  {
    state: '/sell-bike',
    name: 'Sell Bike',
    type: 'main',
    icon: '',
  },
];

export const headerMenuMobilePrimary = [
  // {
  //   state: '/career',
  //   name: 'Career',
  //   type: 'main',
  //   icon: '',
  // },
  {
    state: '/about-us',
    name: 'About Us',
    type: 'main',
    icon: '',
  },
];

export const headerMenuMobileSecondary = [
  {
    state: '/faqs',
    name: 'FAQs',
    type: 'main',
    icon: '',
  },
  {
    state: '/privacy-policy',
    name: 'Privacy Policy',
    type: 'main',
    icon: '',
  },
  {
    state: '/refund-policy',
    name: 'Refund Policy',
    type: 'main',
    icon: '',
  },
  {
    state: '/terms-and-conditions',
    name: 'Terms & Conditions',
    type: 'main',
    icon: '',
  },
];

export const socialMedia = [
  {
    state: 'https://instagram.com/2wheelrofficial?igshid=YmMyMTA2M2Y=',
    name: 'Instagram',
    type: 'social_link',
    icon: instagram,
  },
  {
    state: 'https://www.facebook.com/2wheelrofficial',
    name: 'Facebook',
    type: 'social_link',
    icon: facebook,
  },
  {
    state: 'https://www.linkedin.com/company/2wheelr/',
    name: 'LinkedIn',
    type: 'social_link',
    icon: linkedin,
  },
  {
    state: 'https://twitter.com/2wheelrofficial?t=YQSnWOK-MRieyt17HPF0vA&s=09',
    name: 'Twitter',
    type: 'social_link',
    icon: twitter,
  },
];
