"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const machineSchema_1 = __importDefault(require("../schemas/machineSchema"));
const machineModel = mongoose_1.default.model("machine", machineSchema_1.default);
exports.default = machineModel;
