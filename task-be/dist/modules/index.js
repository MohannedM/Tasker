"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.resolvers = void 0;
const graphql_1 = require("graphql");
const user_1 = require("./user");
exports.resolvers = {
    ...user_1.userResolvers,
};
exports.schema = graphql_1.buildSchema(`
    ${user_1.userSchema}

    schema {
        query: Query
        mutation: Mutation
    }
`);
