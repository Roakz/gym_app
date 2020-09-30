"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app_1 = __importDefault(require("./routes/app"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
mongoose_1.default.connect('mongodb://localhost/myDbNameHere,', { useNewUrlParser: true, useUnifiedTopology: true });
const app = express_1.default();
const port = 8000;
const db = mongoose_1.default.connection;
// tslint:disable-next-line: no-console
db.on('error', console.error.bind('connection error'));
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/', app_1.default);
app.listen(port, () => {
    process.stdout.write(`Listening on port ${port}...`);
});
