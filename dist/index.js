"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheProvider = void 0;
const nodeCacheProvider_1 = require("./providers/cacheProvider/implements/nodeCacheProvider");
const cacheProvider = new nodeCacheProvider_1.NodeCacheProvider();
exports.cacheProvider = cacheProvider;
