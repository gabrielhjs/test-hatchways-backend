"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisCacheProvider = void 0;
const redis_1 = __importDefault(require("redis"));
const util_1 = require("util");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class RedisCacheProvider {
    constructor() {
        this.client = redis_1.default.createClient({
            port: parseInt(process.env.REDIS_PORT)
        });
    }
    async set(key, obj, timeout) {
        return this.client.set(key, JSON.stringify(obj), "EX", timeout);
    }
    async get(key) {
        const data = await util_1.promisify(this.client.get).bind(this.client)(key);
        if (data)
            return JSON.parse(data);
        else
            return undefined;
    }
}
exports.RedisCacheProvider = RedisCacheProvider;
