import express from 'express';
import path from 'node:path';
import db from '../config/connection.js';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './index.js';
import { authenticateToken } from '../utils/auth.js';
import bodyParser from 'body-parser';
const server = new ApolloServer({
    typeDefs,
    resolvers
});
const startApolloServer = async () => {
    await server.start();
    await db();
    const PORT = process.env.PORT || 3001;
    const app = express();
    app.use(bodyParser.json());
    app.use(express.json());
    app.use('/graphql', expressMiddleware(server, {
        context: async ({ req }) => ({ token: authenticateToken(req) })
    }));
    app.use(express.static(path.join(process.cwd(), '../client/dist')));
    app.get('*', (_req, res) => {
        res.sendFile(path.join(process.cwd(), '../client/dist/index.html'));
    });
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
};
startApolloServer();
