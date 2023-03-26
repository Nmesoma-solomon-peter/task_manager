"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TaskSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'You must include name'],
        trim: true,
        maxlength: [50, 'you must not input more than 50 words']
    },
    completed: {
        type: Boolean,
        default: false,
    },
});
const Task = mongoose_1.default.model('Task', TaskSchema);
exports.default = Task;
