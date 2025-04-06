import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://backend.ddev.site/api',
  documents: ['./app/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    './types/gql/': {
      preset: 'client',
      config: {
        useTypeImports: true,
        strictScalars: true,
        scalars: {
          DateTime: 'string',
          QueryArgument: 'unknown',
          Number: 'number',
        },
      },
    }
  },
  hooks: { afterAllFileWrite: ['eslint . --fix'] },
}
export default config