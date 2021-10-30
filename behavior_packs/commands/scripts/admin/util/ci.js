import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'ci',
    description: 'clears inventory',
    usage: '.ci',
    category: 'util',
    args: [],
    execute(chat, args) {
        Commands.run(`/execute "${chat.sender.name}" ~ ~ ~ clear @s`, World.getDimension('overworld'))
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aInventory Cleared!"}]}`, World.getDimension('overworld'))
    }
}

export default command