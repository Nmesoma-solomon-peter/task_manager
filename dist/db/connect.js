"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectdb = void 0;
const mongoose_1 = require("mongoose");
const connectdb = (url) => {
    if (typeof url !== undefined) {
        return (0, mongoose_1.connect)(url);
    }
};
exports.connectdb = connectdb;
