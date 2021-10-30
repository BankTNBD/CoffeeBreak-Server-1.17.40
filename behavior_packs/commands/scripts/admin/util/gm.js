import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'gm',
    description: 'Quickly switch gamemode',
    usage: '.gm <gamemode>',
    category: 'util',
    args: [
        "gamemode"
    ],
    execute(chat, args) {
        Commands.run(`/execute "${chat.sender.name}" ~ ~ ~ gamemode ${args[0]}`, World.getDimension('overworld'))
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aGamemode Changed!"}]}`, World.getDimension('overworld'))
    }
}

export default command