"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperagentGetPostsProvider = void 0;
const superagent_1 = __importDefault(require("superagent"));
class SuperagentGetPostsProvider {
    async execute(url, tag) {
        const response = await superagent_1.default
            .get(url)
            .query({ tag: tag });
        return response.body.posts;
    }
}
exports.SuperagentGetPostsProvider = SuperagentGetPostsProvider;
