export const schema = gql`
  type Flag {
    id: Int!
    page: Page!
    pageId: Int!
  }

  type Query {
    flags: [Flag!]! @requireAuth
    flag(id: Int!): Flag @requireAuth
  }

  input CreateFlagInput {
    pageId: Int!
  }

  input UpdateFlagInput {
    pageId: Int
  }

  type Mutation {
    createFlag(input: CreateFlagInput!): Flag! @requireAuth
    updateFlag(id: Int!, input: UpdateFlagInput!): Flag! @requireAuth
    deleteFlag(id: Int!): Flag! @requireAuth
  }
`
