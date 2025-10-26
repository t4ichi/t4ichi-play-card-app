// 命名を変更するための関数
const transformOperationName = (
  operation: { operationId?: string },
  route: string,
  verb: string,
) => {
  const baseName =
    operation.operationId || `${verb}${route.replace(/[^a-zA-Z0-9]/g, "")}`;
  const capitalizedBaseName =
    baseName.charAt(0).toUpperCase() + baseName.slice(1);
  return `orval${capitalizedBaseName}`;
};

module.exports = {
  fetcher: {
    input: {
      target: "./docs/openapi/openapi.yml",
    },
    output: {
      mode: "tags-split",
      client: "fetch",
      target: "./src/lib/orval/fetchers",
      schemas: "./src/lib/orval/schemas",
      fileExtension: ".fetcher.ts",
      override: {
        mutator: {
          path: "./src/lib/orval/customFetch.ts",
          name: "customFetch",
        },
        fetch: {
          includeHttpResponseReturnType: false,
        },
        operationName: transformOperationName,
      },
    },
  },
  zod: {
    input: {
      target: "./docs/openapi/openapi.yml",
    },
    output: {
      mode: "tags-split",
      client: "zod",
      target: "./src/lib/orval/schemas",
      fileExtension: ".zod.ts",
      override: {
        operationName: transformOperationName,
      },
    },
  },
};
