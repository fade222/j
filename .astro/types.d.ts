declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"news": {
"2022-04-10.md": {
  id: "2022-04-10.md",
  slug: "2022-04-10",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2022-05-07.md": {
  id: "2022-05-07.md",
  slug: "2022-05-07",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2022-08-22.md": {
  id: "2022-08-22.md",
  slug: "2022-08-22",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2022-12-21.md": {
  id: "2022-12-21.md",
  slug: "2022-12-21",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2023-03-12.md": {
  id: "2023-03-12.md",
  slug: "2023-03-12",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2023-05-22.md": {
  id: "2023-05-22.md",
  slug: "2023-05-22",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2023-07-17.md": {
  id: "2023-07-17.md",
  slug: "2023-07-17",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2023-12-19.md": {
  id: "2023-12-19.md",
  slug: "2023-12-19",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2024-03-23.md": {
  id: "2024-03-23.md",
  slug: "2024-03-23",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
"2024-08-26.md": {
  id: "2024-08-26.md",
  slug: "2024-08-26",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
