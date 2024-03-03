const routes = [
  {
    path:"/",
    name:"Home",
    component: () => import("../views/user/User.vue")
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/user/User.vue"),
  },
];

export default routes;
