import { auth, config, connector, g } from '@grafbase/sdk'

const clerk = auth.OpenIDConnect({
  issuer: g.env('ISSUER_URL'),
})

const shopify = connector.GraphQL('Shopify', {
  url: g.env('SHOPIFY_STORE_API_URL'),
  headers: headers => {
    headers.set(
      'X-Shopify-Storefront-Access-Token',
      g.env('SHOPIFY_STOREFRONT_ACCESS_TOKEN'),
    )
  },
})

g.datasource(shopify)

const input = g.input('AuthInput', { email: g.email(), password: g.string() })

g.mutation('login', {
  args: { input: g.inputRef(input) },
  returns: g.string(),
  resolver: 'login',
})

export default config({
  schema: g,
  cache: {
    rules: [
      {
        maxAge: 60,
        types: 'Query',
      },
    ],
  },
  auth: {
    providers: [clerk],
    rules: rules => {
      rules.private()
    },
  },
})
