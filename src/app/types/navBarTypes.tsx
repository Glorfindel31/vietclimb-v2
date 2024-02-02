export type NavigationBarProps = {
  mainTitle: string;
  href?: string;
  subMenu?: Array<{
    title: string;
    href: string;
    description?: string;
  }>;
};
