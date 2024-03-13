import { z } from "zod";

const zPositiveInt = z.number().positive().int();

enum ZodType {
    TEXT = "text",
    HEADER = "header",
    WARNING = "warning",
    CATEGORIES = "category",
    CODE = "code",
}

const apiBodyTextSchema = z.object({
    type: z.literal(ZodType.TEXT),
    content: z.string(),
});

const apiBodyHeaderSchema = z.object({
    type: z.literal(ZodType.HEADER),
    level: zPositiveInt.gte(1).lte(6),
    content: z.string(),
});

const apiBodyWarningSchema = z.object({
    type: z.literal(ZodType.WARNING),
    title: z.string(),
    content: z.string(),
});

const apiBodyCodeSchema = z.object({
    type: z.literal(ZodType.CODE),
    content: z.string(),
});

const categorySchema = z.object({
    title: z.string(),
    content: z.array(z.union([
        apiBodyTextSchema,
        apiBodyHeaderSchema,
        apiBodyWarningSchema,
        apiBodyCodeSchema,
    ])),
});

const apiBodyCategoriesSchema = z.object({
    type: z.literal(ZodType.CATEGORIES),
    categories: z.array(categorySchema),
});

const apiBodySchema = z.union([
    apiBodyTextSchema,
    apiBodyHeaderSchema,
    apiBodyWarningSchema,
    apiBodyCategoriesSchema,
    apiBodyCodeSchema,
]);

const apiContentSchema = z.object({
    title: z.string(),
    description: z.string(),
    body: z.array(apiBodySchema),
});

export type ApiContent = z.infer<typeof apiContentSchema>;

export default apiContentSchema;

