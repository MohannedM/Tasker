"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.resolvers = void 0;
const graphql_1 = require("graphql");
const task_1 = require("./task");
const user_1 = require("./user");
exports.resolvers = {
    ...user_1.userResolvers,
    ...task_1.taskResolvers,
};
exports.schema = graphql_1.buildSchema(`
    type Query{
      _empty: String
    }
    type Mutation {
      _empty: String
    }
    ${user_1.userSchema}
    ${task_1.taskSchema}

    schema {
        query: Query
        mutation: Mutation
    }
`);
