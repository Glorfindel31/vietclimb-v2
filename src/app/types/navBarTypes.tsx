export type NavigationBarProps = {
  mainTitle: string;
  href?: string;
  subMenu?: Array<{
    title: string;
    href: string;
    description?: string;
  }>;
};

export const data: NavigationBarProps[] = [
  {
    mainTitle: 'About',
    href: '/about',
  },
  {
    mainTitle: 'Blog',
    href: '/blog',
  },
  {
    mainTitle: 'First Time?',
    subMenu: [
      {
        title: 'What is Climbing?',
        href: '/first-time',
        description: 'Read about our sport, how to practice it, and how to get started.',
      },
      {
        title: 'Where to find us?',
        href: '/first-time@where-to-find-us',
        description: 'Find out where to find us, and how to get there.',
      },
    ],
  },
  {
    mainTitle: 'Gym',
    subMenu: [
      {
        title: 'Rates',
        href: '/gym',
        description: 'Our price list, including rentals and classes.',
      },
      {
        title: 'Classes',
        href: '/gym@classes',
        description: 'Discover our group classes package, and join our community.',
      },
      {
        title: 'Coaching',
        href: '/gym@coaching',
        description:
          'You find yourself in a plato, and you need help to overcome it. Our coach is here to help you.',
      },
      {
        title: 'Facilities',
        href: '/gym@facilities',
        description:
          'We offer a wide variety of facilities for you to enjoy your climbing experience.',
      },
    ],
  },
  {
    mainTitle: 'Outdoor',
    subMenu: [
      {
        title: 'Rates',
        href: '/outdoor',
        description: 'Our price list, including rentals and classes.',
      },
      {
        title: 'Trips',
        href: '/outdoor@trips',
        description: 'All information to join our trips',
      },
      {
        title: 'Private trips',
        href: '/outdoor@private-trips',
        description: 'All information to join our private trips',
      },
      {
        title: 'Rentals',
        href: '/outdoor@rentals',
        description: 'You need gear? It&apos$s right here',
      },
      {
        title: 'Huu Lung info',
        href: '/outdoor@huu-lung-info',
        description: 'Short history of the location, maps, and more',
      },
    ],
  },
  {
    mainTitle: 'A project?',
    subMenu: [
      {
        title: 'Constructions',
        href: '/a-project',
        description: 'Climbing walls construction.',
      },
      {
        title: 'Parties / School Events',
        href: '/a-project@parties',
        description: 'Team building / Birthday parties / School events.',
      },
    ],
  },
];
