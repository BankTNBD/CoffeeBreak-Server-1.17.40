import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'run',
    description: 'run a command multiple times',
    usage: '.run <amount> <command>',
    category: 'util',
    args: [
        'amount',
        'command'
    ],
    execute(chat, args) {
        var amount = args.shift()
        for (let i = 0; i < amount; i++) {
            Commands.run(`/execute "${chat.sender.name}" ~ ~ ~ ${args.join(' ')}`, World.getDimension('overworld'))
        }
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aCommands Ran!"}]}`, World.getDimension('overworld'))
    }
}

export default command