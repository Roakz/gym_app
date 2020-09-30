"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test = (req, res) => {
    res.status(200).json({ message: "Hello world" });
};
exports.default = test;
