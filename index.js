"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const ConfigFile = require("./config");
const client = new Discord.Client();
let commands = [];
loadCommands(`${__dirname}/commands`);
client.on("ready", () => {
    console.log("Online and Ready to Go!");
    client.user.setActivity("with Shifty's Girlfriend");
});
client.on('message', function (message) {
    if (message.content == "who's better?") {
        message.reply("YOU'RE RETARDED! IT'S SO OBVIOUS! SHIFTY IS WAY BETTER!");
    }
    if (message.content == "Who's better?") {
        message.reply("YOU'RE RETARDED! IT'S SO OBVIOUS! SHIFTY IS WAY BETTER!");
    }
    if (message.content == "Whos better?") {
        message.reply("YOU'RE RETARDED! IT'S SO OBVIOUS! SHIFTY IS WAY BETTER!");
    }
    if (message.content == "Whos Better?") {
        message.reply("YOU'RE RETARDED! IT'S SO OBVIOUS! SHIFTY IS WAY BETTER!");
    }
    if (message.content == "Whos Better") {
        message.reply("YOU'RE RETARDED! IT'S SO OBVIOUS! SHIFTY IS WAY BETTER!");
    }
    if (message.content == "Who's Better") {
        message.reply("YOU'RE RETARDED! IT'S SO OBVIOUS! SHIFTY IS WAY BETTER!");
    }
    if (message.content == "whos better?") {
        message.reply("YOU'RE RETARDED! IT'S SO OBVIOUS! SHIFTY IS WAY BETTER!");
    }
    if (message.content == "whos better") {
        message.reply("YOU'RE RETARDED! IT'S SO OBVIOUS! SHIFTY IS WAY BETTER!");
    }
    if (message.content == "wuppy is better") {
        message.reply("YOU'RE RETARDED! SHIFTY IS WAY FUNNIER AND BLACKER! UNSUBSCRIBE FROM WUPPY RIGHT NOW!");
    }
    if (message.content == "Wuppy is better") {
        message.reply("YOU'RE RETARDED! SHIFTY IS WAY FUNNIER AND BLACKER! UNSUBSCRIBE FROM WUPPY RIGHT NOW!");
    }
    if (message.content == "Wuppy is Better") {
        message.reply("YOU'RE RETARDED! SHIFTY IS WAY FUNNIER AND BLACKER! UNSUBSCRIBE FROM WUPPY RIGHT NOW!");
    }
    if (message.content == "Wuppy Is Better") {
        message.reply("YOU'RE RETARDED! SHIFTY IS WAY FUNNIER AND BLACKER! UNSUBSCRIBE FROM WUPPY RIGHT NOW!");
    }
    if (message.content == "wuppy") {
        message.reply("HUSHHHH! That word is banned here!");
    }
    if (message.content == "Wuppy") {
        message.reply("HUSHHHH! That word is banned here!");
    }
    if (message.content == "Shifty is trash") {
        message.reply("please! This is a WARNING! Don't discrase the gods like that!");
    }
    if (message.content == "shifty is trash") {
        message.reply("please! This is a WARNING! Don't discrase the gods like that!");
    }
    if (message.content == "Shifty is Trash") {
        message.reply("please! This is a WARNING! Don't discrase the gods like that!");
    }
    if (message.content == "Shifty Is Trash") {
        message.reply("please! This is a WARNING! Don't discrase the gods like that!");
    }
    if (message.content == "Shifty Is Trash!") {
        message.reply("please! This is a WARNING! Don't discrase the gods like that!");
    }
    if (message.content == "Shifty is Trash!") {
        message.reply("please! This is a WARNING! Don't discrase the gods like that!");
    }
    if (message.content == "Shifty is trash!") {
        message.reply("please! This is a WARNING! Don't discrase the gods like that!");
    }
    if (message.content == "shifty is trash!") {
        message.reply("please! This is a WARNING! Don't discrase the gods like that!");
    }
    if (message.content == "Shifty") {
        message.reply("correct. Shifty is our lord and savior!");
    }
    if (message.content == "shifty") {
        message.reply("correct. Shifty is our lord and savior!");
    }
    if (message.content == "i love wuppy") {
        message.reply("you have angered the gods. You may now be warned and silenced. Prey to Shifty for forgivness!");
    }
    if (message.content == "I love wuppy") {
        message.reply("you have angered the gods. You may now be warned and silenced. Prey to Shifty for forgivness!");
    }
    if (message.content == "I Love wuppy") {
        message.reply("you have angered the gods. You may now be warned and silenced. Prey to Shifty for forgivness!");
    }
    if (message.content == "I Love Wuppy") {
        message.reply("you have angered the gods. You may now be warned and silenced. Prey to Shifty for forgivness!");
    }
    if (message.content == "I Love Wuppy!") {
        message.reply("you have angered the gods. You may now be warned and silenced. Prey to Shifty for forgivness!");
    }
    if (message.content == "I Love wuppy!") {
        message.reply("you have angered the gods. You may now be warned and silenced. Prey to Shifty for forgivness!");
    }
    if (message.content == "I love wuppy!") {
        message.reply("you have angered the gods. You may now be warned and silenced. Prey to Shifty for forgivness!");
    }
    if (message.content == "I love Wuppy!") {
        message.reply("you have angered the gods. You may now be warned and silenced. Prey to Shifty for forgivness!");
    }
});
client.on("message", msg => {
    if (msg.author.bot) {
        return;
    }
    if (!msg.content.startsWith(ConfigFile.config.prefix)) {
        return;
    }
    handleCommand(msg);
});
function handleCommand(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
        let args = msg.content.split(" ").slice(1);
        for (const commandClass of commands) {
            try {
                if (!commandClass.isThisCommand(command)) {
                    continue;
                }
                yield commandClass.runCommand(args, msg, client);
            }
            catch (exception) {
                console.log(exception);
            }
        }
    });
}
function loadCommands(commandsPath) {
    if (!ConfigFile.config || ConfigFile.config.commands.length === 0) {
        return;
    }
    for (const commandName of ConfigFile.config.commands) {
        const commandsClass = require(`${commandsPath}/${commandName}`).default;
        const command = new commandsClass();
        commands.push(command);
    }
}
client.login(ConfigFile.config.token);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUN0Qyx1Q0FBc0M7QUFHdEMsTUFBTSxNQUFNLEdBQW1CLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXBELElBQUksUUFBUSxHQUFrQixFQUFFLENBQUM7QUFFakMsWUFBWSxDQUFDLEdBQUcsU0FBUyxXQUFXLENBQUMsQ0FBQTtBQUVyQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFHcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBRXZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLDBCQUEwQixDQUFDLENBQUE7QUFDdkQsQ0FBQyxDQUFDLENBQUE7QUFFRixNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFTLE9BQU87SUFDakMsSUFBRyxPQUFPLENBQUMsT0FBTyxJQUFJLGVBQWUsRUFBQztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7S0FDNUU7SUFFRCxJQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksZUFBZSxFQUFDO1FBQ2xDLE9BQU8sQ0FBQyxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQztLQUM1RTtJQUVELElBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxjQUFjLEVBQUM7UUFDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0tBQzVFO0lBRUQsSUFBRyxPQUFPLENBQUMsT0FBTyxJQUFJLGNBQWMsRUFBQztRQUNqQyxPQUFPLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7S0FDNUU7SUFFRCxJQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksYUFBYSxFQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMseURBQXlELENB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