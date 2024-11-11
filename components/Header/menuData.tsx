import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Our Services",
    newTab: false,
    path: "/#features",
    submenu: [
      {
        id: 2.1,
        title: "ServicesMenu",
        newTab: false,
        path: "/blog",
      }
    ]
  },
  {
    id: 3,
    title: "Our Products",
    newTab: false,
    submenu: [
      {
        id: 3.1,
        title: "ProductsMenu",
        newTab: false,
        path: "/blog",
      }
    ],
  },

  {
    id: 4,
    title: "Company",
    newTab: false,
    path: "/support",
    submenu: [
      {
        id: 4.1,
        title: "About Us",
        newTab: false,
        path: "/aboutus",
      },
      {
        id: 4.2,
        title: "Contact Us",
        newTab: false,
        path: "/contactus",
      },
      {
        id: 4.3,
        title: "Career",
        newTab: false,
        path: "/careers",
      },
    ]
  },
];

export default menuData;
