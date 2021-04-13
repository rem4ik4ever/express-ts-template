"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opsMiddleware = exports.opsBasePath = void 0;
const lodash_1 = require("lodash");
exports.opsBasePath = '/ops';
const healthCheck = () => 'pong';
const printEnv = () => JSON.stringify(process.env, undefined, 2);
const printHeaders = (req) => JSON.stringify(req.headers, undefined, 2);
const routes = {
    '/ping': healthCheck,
    '/env': printEnv,
    '/headers': printHeaders
};
const opsMiddleware = (req, res, next) => {
    const { url } = req;
    const fn = lodash_1.get(routes, url, undefined);
    if (fn instanceof Function) {
        res.status(200);
        res.header('Content-Type', 'text/plain');
        res.send(fn(req));
    }
    else {
        // not ops middleware route
        next();
    }
};
exports.opsMiddleware = opsMiddleware;
//# sourceMappingURL=index.js.map