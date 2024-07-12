export const navigation = [
  {
      id: 1, // Add unique id
      label: "NOW PLAYING",
      href: "now-playing",
  },
  {
      id: 2, // Add unique id
      label: "TOP RATED",
      href: "top-rated",
  },
  {
      id: 3, // Add unique id
      label: "POPULAR",
      href: "popular",
  },
  {
      id: 4, // Add unique id
      label: "UPCOMING",
      href: "upcoming",
  }
];

export const mobileNavigation = [
  ...navigation
];

export default navigation;
