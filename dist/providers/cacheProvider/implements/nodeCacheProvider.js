"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeCacheProvider = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
class NodeCacheProvider {
    constructor() {
        this.cache = new node_cache_1.default({ stdTTL: 100, checkperiod: 120 });
    }
    async set(key, obj, timeout) {
        return this.cache.set(key, obj, timeout);
    }
    async get(key) {
        return this.cache.get(key);
    }
}
exports.NodeCacheProvider = NodeCacheProvider;
