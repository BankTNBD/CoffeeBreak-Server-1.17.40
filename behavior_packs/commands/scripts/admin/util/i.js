import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'i',
    description: '/give an item',
    usage: '.i <item> [amount]',
    category: 'util',
    args: [
        "item"
    ],
    execute(chat, args) {
        if (!args[1]) args[1] = 64
        Commands.run(`/execute "${chat.sender.name}" ~ ~ ~ give @s ${args[0]} ${args[1]}`, World.getDimension('overworld'))
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aGave ${args[0]} ${args[1]}x!"}]}`, World.getDimension('overworld'))
    }
}

export default command