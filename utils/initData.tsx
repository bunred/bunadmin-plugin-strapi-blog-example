import { name } from "../package.json"
import { Collection as Schema } from "@/core/schema/collections"
import { Collection as Menu } from "@/core/menu/collections"

const BunadminSchema = Schema.name
const BunadminMenu = Menu.name

const created_at = Date.now()

export default {
  plugin: name,
  list: [
    {
      name: BunadminSchema,
      data: [
        {
          team: "bunadmin", // plugins/{team}-{group}
          group: "blog",
          name: "post",
          label: "Blogs",
          created_at,
          columns: '[{"title":"Id","field":"id"}]',
          customized: true,
          id: "bunadmin_blog_post"
        },
        {
          team: "bunadmin",
          group: "blog",
          name: "category",
          label: "Categories",
          created_at,
          columns: '[{"title":"Id","field":"id"}]',
          customized: true,
          id: "bunadmin_blog_category"
        }
      ]
    },
    {
      name: BunadminMenu,
      data: [
        {
          rank: "0",
          label: "Blog",
          slug: "",
          parent: "",
          name: "blog",
          icon_type: "eva",
          icon: "file-text-outline",
          id: "bunadmin_blog"
        },
        {
          rank: "10",
          label: "Post",
          slug: "/blog/post",
          parent: "blog",
          name: "post",
          icon_type: "eva",
          icon: "file-text-outline",
          id: "bunadmin_blog_post"
        },
        {
          rank: "20",
          label: "Category",
          slug: "/blog/category",
          parent: "blog",
          name: "category",
          icon_type: "eva",
          icon: "clipboard-outline",
          id: "bunadmin_blog_category"
        }
      ]
    }
  ]
}
