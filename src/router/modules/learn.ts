import { $t } from "@/plugins/i18n";
import { learn } from "../enums";

// 最简代码，也就是这些字段必须有
export default {
  path: "/learn",
  redirect: "/learn/index",
  meta: {
    icon: "fluent-mdl2:learning-tools",
    title: $t("menus.learn"),
    rank: learn
  },
  children: [
    {
      path: "/learn/index",
      name: "Learn",
      component: () => import("@/views/learn/index.vue"),
      meta: {
        title: $t("menus.learn")
      }
    },
    {
      path: "/learn/learnA",
      name: "LearnA",
      component: () => import("@/views/learn/learnA.vue"),
      meta: {
        title: $t("menus.learnA")
      }
    },
    {
      path: "/learn/learnB",
      name: "LearnB",
      component: () => import("@/views/learn/learnB.vue"),
      meta: {
        title: $t("menus.learnB")
      }
    }
  ]
} satisfies RouteConfigsTable;
