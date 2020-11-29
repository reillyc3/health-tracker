export const schema = gql`
  type Post {
    id: Int!
    feeling: Int!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post
  }

  input CreatePostInput {
    feeling: Int!
    body: String!
  }

  input UpdatePostInput {
    feeling: Int
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
