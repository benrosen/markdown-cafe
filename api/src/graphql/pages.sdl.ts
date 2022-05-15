export const schema = gql`
  type Page {
    createdAt: DateTime!
    id: String!
    markdown: String
    secret: String!
    updatedAt: DateTime!
    flags: [Flag]!
  }

  type Query {
    pages: [Page!]! @requireAuth
    page(id: String!): Page @requireAuth
  }

  input CreatePageInput {
    id: String!
  }

  input UpdatePageInput {
    markdown: String
    secret: String
  }

  type Mutation {
    createPage(input: CreatePageInput!): Page! @requireAuth
    updatePage(id: String!, input: UpdatePageInput!): Page! @requireAuth
    deletePage(id: String!): Page! @requireAuth
  }
`
