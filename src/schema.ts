import { z } from "zod/v4";
import { createDocument } from "zod-openapi";

export const helloWorldQuerySchema = z.object({
  name: z.string().meta({
    description: "Name to greet",
    example: "World",
  }),
});

export const helloWorldResponseSchema = z.object({
  message: z.string().meta({
    description: "Greeting message",
    example: "Hello, World!",
  }),
});

const errorResponseSchema = z.object({
  error: z.string(),
});

export const document = createDocument({
  openapi: "3.1.1",
  info: {
    title: "Demo Serverless OpenAPI types",
    version: "0.1.1",
  },
  paths: {
    "/api/hello-world": {
      get: {
        description: "Returns a greeting for the given name.",
        requestParams: {
          query: helloWorldQuerySchema,
        },
        responses: {
          "200": {
            description: "Greeting message",
            content: {
              "application/json": { schema: helloWorldResponseSchema },
            },
          },
          "400": {
            description: "Invalid or missing name",
            content: {
              "application/json": { schema: errorResponseSchema },
            },
          },
        },
      },
    },
  },
});
