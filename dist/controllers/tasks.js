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
exports.deleteTask = exports.updateTask = exports.getTask = exports.createTask = exports.getAllTasks = void 0;
const tasks_1 = __importDefault(require("../models/tasks"));
const asyncWrapper_1 = require("../middleware/asyncWrapper");
// get all tasks route
exports.getAllTasks = (0, asyncWrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield tasks_1.default.find({});
    if (!task) {
        res.status(404).json({ msg: "database is empty" });
    }
    res.status(200).json(task);
}));
// create task route 
exports.createTask = (0, asyncWrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield tasks_1.default.create(req.body);
    res.status(201).json({ task });
}));
// get single task
exports.getTask = (0, asyncWrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: taskID } = req.params;
    const task = yield tasks_1.default.findOne({ _id: taskID });
    if (!task) {
        return res.status(404).json({ msg: `NO TASK WITH ID ${taskID}` });
    }
    res.status(200).json({ task });
}));
// update task
exports.updateTask = (0, asyncWrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: taskID } = req.params;
    const task = yield tasks_1.default.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true });
    if (!task) {
        res.status(404).json({ msg: `NO TASK WITH ID ${taskID} found` });
    }
    res.status(200).json({ task });
}));
// delete task
exports.deleteTask = (0, asyncWrapper_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: taskID } = req.params;
    const task = yield tasks_1.default.findByIdAndDelete({ _id: taskID });
    if (!task) {
        return res.status(404).json({ msg: `no task with id ${taskID}` });
    }
    res.status(200).json({ task });
}));
// export = {
//     getAllTasks
// }
