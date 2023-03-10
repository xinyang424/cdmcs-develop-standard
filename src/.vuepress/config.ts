/** @format */

import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
export default defineUserConfig({
	base: "/",
	locales: {
		"/": {
			lang: "zh-CN",
			title: "成都麦柯开发规范",
			description: "成都麦柯前后端开发规范",
		},
	},
	theme,
	plugins: [
		searchProPlugin({
			indexContent: true,
			customFields: [
				{
					getter: ({ frontmatter }) => frontmatter.category as string[],
					formatter: `分类: $content`,
				},
			],
		}),
	],
});
