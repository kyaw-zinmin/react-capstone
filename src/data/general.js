import HomePage from "../page/HomePage";
import AboutPage from "../page/AboutPage";
import MenuPage from "../page/MenuPage";
import ReservationsPage from "../page/ReservationsPage";
import OrderOnlinePage from "../page/OrderOnlinePage";
import LoginPage from "../page/LoginPage";
import Noop from "../ui/atomic/Noop";

export const pageLinks = [
  {
    displayName: "Home",
    path: "./",
    component: HomePage
  },
  {
    displayName: "About",
    path: "/page/AboutPage",
    component: AboutPage
  },
  {
    displayName: "Menu",
    path: "/page/MenuPage",
    component: MenuPage
  },
  {
    displayName: "Reservations",
    path: "/page/ReservationsPage",
    component: ReservationsPage  
  },
  {
    displayName: "Order Online",
    path: "/page/OrderOnlinePage",
    component: OrderOnlinePage
  },
  {
    displayName: "Login",
    path: "/page/LoginPage",
    component: LoginPage
  }
]

export const placeholderArr = [
  {
    displayName: "Address",
    path: "./",
    component: Noop
  },
  {
    displayName: "Phone Number",
    path: "./",
    component: Noop
  },
  {
    displayName: "E-mail",
    path: "./",
    component: Noop
  }
]