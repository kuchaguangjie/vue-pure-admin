import { $t } from "@/plugins/i18n";
import { hello } from "../enums";

// 最简代码，也就是这些字段必须有
export default {
  path: "/hello",
  redirect: "/hello/index",
  meta: {
    icon: "arcticons:hello-bank",
    title: $t("menus.hello"),
    rank: hello
  },
  children: [
    {
      path: "/hello/index",
      name: "Hello",
      component: () => import("@/views/hello/index.vue"),
      meta: {
        title: $t("menus.hello")
      }
    }
  ]
} satisfies RouteConfigsTable;
