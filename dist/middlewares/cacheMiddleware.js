"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheMiddleware = void 0;
const __1 = require("..");
const cacheMiddleware = async (request, response, next) => {
    const cacheContent = await __1.cacheProvider.get(request.url);
    if (cacheContent === undefined) {
        next();
    }
    else {
        return response.send(cacheContent);
    }
};
exports.cacheMiddleware = cacheMiddleware;
