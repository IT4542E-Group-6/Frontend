import React from "react";
import { Roles } from "./configs";

const ListProducts = React.lazy(() => import("./views/product/ListProduct"));
const ProductDetail = React.lazy(() => import("./views/product/ProductDetail"));
const AddProduct = React.lazy(() => import("./views/product/AddProduct"));
const ListOrders = React.lazy(() => import("./views/order/ListOrders"));
const OrderDetail = React.lazy(() => import("./views/order/OrderDetail"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Profile = React.lazy(() => import("./views/user/Profile"));

const routes = [
  { path: "/", exact: true, component: Dashboard, name: "Home" },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    permission: [Roles.ADMIN, Roles.ADMIN, Roles.OPERATOR, Roles.ANALYST],
  },
  {
    path: "/products",
    name: "Products",
    component: ListProducts,
    permission: [Roles.ADMIN],
    exact: true,
  },
  {
    path: "/products/create",
    name: "Add Product",
    component: AddProduct,
    permission: [Roles.ADMIN],
    exact: true,
  },
  {
    path: "/products/:id",
    name: "Product Detail",
    component: ProductDetail,
    permission: [Roles.ADMIN],
    exact: true,
  },

  {
    path: "/orders",
    name: "Orders",
    component: ListOrders,
    permission: [Roles.ADMIN],
    exact: true,
  },
  {
    path: "/orders/:id",
    name: "Order Detail",
    component: OrderDetail,
    permission: [Roles.ADMIN],
    exact: true,
  },
  // User's route
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    permission: [Roles.ADMIN, Roles.ADMIN, Roles.OPERATOR, Roles.ANALYST],
    exact: true,
  },
];

export default routes;
