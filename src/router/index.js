import { createRouter, createWebHistory } from "vue-router";
import AppMain from "@/views/AppMain.vue";
import LoginView from "@/views/auth/LoginView.vue";
import Content from "@/components/layout/Mider/components/ContentPart.vue";

import Users from "@/views/Users.vue";

import Example from "@/views/Example.vue";
// import Example2 from "@/views/Example2.vue";

const routes = [
  {
    path: "/",
    name: "AppMain",
    component: AppMain,
    children: [
      {
        path: "/Example2",
        name: "Example2",
        component: () => import("@/views/Example2.vue"),
      },
      {
        path: "/fepgemt20230920001",
        name: "fepgemt20230920001",
        component: () => import("@/views/pages/FE_PG_EMT20230920_001.vue"),
      },
      {
        path: "/tmlmcal",
        name: "tmlmcal",
        component: () => import("@/views/pages/Example3.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/content",
    name: "content",
    component: Content,
  },
  // test case
  // 觀察到越後面才把 router view 渲染的，會在原先的下面，有點像是在 html 後面繼續往下寫的概念
  // {
  //   path: "/users/:userId",
  //   name: "users",
  //   component: User,
  // },
  {
    path: "/example",
    name: "Example",
    component: Example,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    children: [
      {
        path: "/users/:userId",
        name: "users",
        component: Users,
      },
    ],
  },
];

// router.beforeEach((to, from, next) => {
//   // 如果 router 轉跳的頁面需要驗證 requiresAuth: true
//   console.log('to=', to.fullPath, '| from=', from.fullPath);
//   if (to.matched.some(record => {
//     console.log(record.name, record.meta.requiresAuth);
//     return record.meta.requiresAuth;
//   })) {
//     // 如果沒有 token
//     console.log('token?', store.state.token);
//     if (store.state.token === '') {
//       // 轉跳到 login page
//       next({ path: '/login' });
//     } else {
//       next(); // 往下繼續執行
//     }
//   } else {
//     next(); // 往下繼續執行
//   }
// });

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
});

// 先不做 login，之後再回來做
// authAPI，應該回傳 token + expired time + 權限等級
let isAuthenticated = true;

router.beforeEach((to) => {
  // if name !== 'Login' and (isAthenticated or have token and not expired.)
  // if have token && token is not expired then next()
  // if have token but expired then fetch authAPI to update token
  // if (to.name !== 'Login' && !isAuthenticated) {
  if (to.name !== "Login" && !isAuthenticated) {
    console.log(to);
    return { name: "Login" };
  }
});

export default router;
