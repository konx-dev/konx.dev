import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
	projectId: "5o7ilcjl",
	dataset: "production",
	title: "konx.dev/api",
	apiVersion: "2023-10-14",
	basePath: "/studio",
	plugins: [deskTool()],
	schema: { types: schemas },
});

export default config;
