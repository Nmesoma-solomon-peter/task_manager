"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_1 = __importDefault(require("./routes/tasks"));
const connect_1 = require("./db/connect");
require('dotenv').config();
const not_found_1 = require("./middleware/not_found");
const error_Handler_1 = require("./middleware/error_Handler");
const app = (0, express_1.default)();
const PORT = process.env.port || 5000;
// middleware
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
// routes
app.use('/api/v1/tasks', tasks_1.default);
app.use(not_found_1.notFound);
app.use(error_Handler_1.errorHandler);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.connectdb)(process.env.MONGODB_LOCAL);
        app.listen(PORT, () => console.log(`app runing on port ${PORT}`));
    }
    catch (error) {
        console.log(error);
    }
});
start();
