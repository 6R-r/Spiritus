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
const CommandClass_1 = __importDefault(require("../CommandClass"));
class Ping extends CommandClass_1.default {
    constructor(spiritus) {
        super(spiritus, {
            name: 'ping',
            aliases: [],
            args: [],
            description: 'Get ping of the bot',
            category: 'Other',
            cooldown: 5,
            userPermissions: [],
            botPermissions: [],
            subCommands: [
                {
                    name: 'sub',
                    description: 'Delete messages in a channel',
                    args: [
                        {
                            name: 'field',
                            description: 'The field to ping',
                            type: 'STRING',
                            required: true
                        }
                    ],
                },
            ],
        });
    }
    execute(interaction, args) {
        return __awaiter(this, void 0, void 0, function* () {
            interaction.reply('Pong !');
            console.log(interaction.subCommands);
            console.log(args);
        });
    }
}
exports.default = Ping;
