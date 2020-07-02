const { gql } = require("apollo-server");


const typeDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type RootQuery {
    uploads: [File]
  }

  type RootMutation {
    singleUpload(file: Upload!): File!
  }
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

module.exports = typeDefs;