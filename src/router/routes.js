const routes = [
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/user/Register.vue"),
  },
];

export default routes;
