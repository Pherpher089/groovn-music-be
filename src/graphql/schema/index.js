import { makeExecutableSchema, gql } from 'apollo-server-express';
import { merge } from 'lodash';

import { typeDefs as userTypeDefs, resolvers as userResolvers } from './user';

import {
  typeDefs as playlistTypeDefs,
  resolvers as playlistResolvers,
} from './playlist';

const defaultTypes = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export default makeExecutableSchema({
  typeDefs: [defaultTypes, userTypeDefs, playlistTypeDefs],
  resolvers: merge(userResolvers, playlistResolvers),
});
