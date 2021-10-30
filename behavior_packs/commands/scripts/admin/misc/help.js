import { Commands, World } from 'mojang-minecraft'
import commands from '../import.js';

const command = {
    name: 'help',
    description: 'Displays the help message',
    usage: '.help',
    category: 'misc',
    args: [],
    execute(chat, args) {
        if (!args[0]) args[0] = 1

        var commandsArray = Object.values(commands)
        commandsArray = commandsArray.sortBy('name')

        if (Math.ceil(commandsArray.length / 10) < args[0]) return Commands.run(`/tellraw ${chat.sender.name} {"rawtext":[{"text":"§cMax Page is ${Math.ceil(commandsArray.length / 10)}"}]}`, World.getDimension('overworld'))
        Commands.run(`/tellraw ${chat.sender.name} {"rawtext":[{"text":"§9--- Showing Help page ${args[0]} of ${Math.ceil(commandsArray.length / 10)} (.help <page>) ---"}]}`, World.getDimension('overworld'))
        var displayedCommandEnd = args[0] * 10
        var displayedCommandStart = displayedCommandEnd - 10
        for (let i = displayedCommandStart; i < displayedCommandEnd; i++) {
            Commands.run(`/tellraw ${chat.sender.name} {"rawtext":[{"text":"${commandsArray[i].usage} - ${commandsArray[i].description}"}]}`, World.getDimension('overworld'))
        }
    }
}

export default command

Array.prototype.sortBy = function (p) {
    return this.slice(0).sort(function (a, b) {
        return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
    });
}