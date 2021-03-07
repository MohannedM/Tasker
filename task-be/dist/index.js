"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //eslint-disable-line
const body_parser_1 = require("body-parser");
const mongoose_1 = __importDefault(require("mongoose"));
const express_graphql_1 = require("express-graphql");
const modules_1 = require("./modules");
const app = express_1.default();
app.use(body_parser_1.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});
app.use('/graphql', express_graphql_1.graphqlHTTP({
    schema: modules_1.schema,
    rootValue: modules_1.resolvers,
    graphiql: true,
    customFormatErrorFn(err) {
        if (!err.originalError) {
            return err;
        }
        const { data } = err.originalError;
        const message = err.originalError.message || 'An Error Occurred';
        const code = err.originalError.statusCode || 500;
        return { message, status: code, data };
    },
}));
mongoose_1.default.connect('mongodb+srv://mohannedm:zip123@cluster0.usvsi.mongodb.net/tasks?retryWrites=true&w=majority')
    .then(() => {
    app.listen(4000);
});
