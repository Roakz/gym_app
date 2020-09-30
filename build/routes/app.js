"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hello_world_1 = __importDefault(require("../controllers/hello_world"));
const router = express_1.default.Router();
router.get("/", hello_world_1.default);
exports.default = router;
