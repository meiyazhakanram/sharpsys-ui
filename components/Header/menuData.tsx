import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
    image:"",
  },
  {
    id: 2,
    title: "Our Services",
    newTab: false,
    path: "/ourservices",
    image:"",
    submenu: [
      {
        id: 2.1,
        title: "ServicesMenu",
        newTab: false,
        path: "/ourservices",
        image:"",
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
        path: "/ourproducts",
        image:"",
      }
    ],
    path: "/ourproducts",
    image:"",
  },

  {
    id: 4,
    title: "Company",
    newTab: false,
    path: "/aboutus",
    image:"",
    submenu: [
      {
        id: 4.1,
        title: "About Us",
        newTab: false,
        path: "/aboutus",
        image:"",
      },
      {
        id: 4.2,
        title: "Contact Us",
        newTab: false,
        path: "/contactus",
        image:"",
      },
      {
        id: 4.3,
        title: "Career",
        newTab: false,
        path: "/careers",
        image:"",
      },
    ]
  },
];

export default menuData;
