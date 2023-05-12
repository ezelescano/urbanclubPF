// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../../../img/Jenny.jpg";
import img2 from "../../../img/Jenny.jpg";
import img3 from "../../../img/Jenny.jpg";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "General",
  },
  {
    icon: UilClipboardAlt,
    heading: "Lista de Entradas",
  },
  {
    icon: UilUsersAlt,
    heading: "Lista de Usuarios",
  },
  {
    icon: UilPackage,
    heading: "Lista de Productos",
  },
  {
    icon: UilChart,
    heading: "Metricas",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Ventas Totales",
    color: {
      backGround: "linear-gradient(180deg, #0d5a73 0%, #082338 100%)",
      boxShadow: "0px 10px 20px 0px #0d5a73",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Ventas Totales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Remuneración Total",
    color: {
      backGround: "linear-gradient(180deg, #0d5a73 0%, #082338 100%)",
      boxShadow: "0px 10px 20px 0px #0d5a73",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Costos Adicionales",
    color: {
      backGround: "linear-gradient(180deg, #0d5a73 0%, #082338 100%)",
      boxShadow: "0px 10px 20px 0px #0d5a73",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Alex Jaramillo",
    noti: "Ordenó 3 entradas pará Lolapalooza Argentina",
    time: "Hace 25 segundos",
  },
  {
    img: img2,
    name: "Estiven Arboleda",
    noti: "Recibio un premio por comprar 10 entradas",
    time: "hace 30 minutos",
  },
  {
    img: img3,
    name: "Eudes Mieres",
    noti: "Creo el evento 'Lolapalooza 2 - El regreso de la joda'",
    time: "hace 2 horas",
  },
];
