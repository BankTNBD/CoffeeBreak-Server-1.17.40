import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'summon',
    description: 'summons mobs',
    usage: '.summon <mob> <amount>',
    category: 'util',
    args: [
        'mob',
        'amount'
    ],
    execute(chat, args) {
        for (let i = 0; i < args[1]; i++) {
            Commands.run(`/execute "${chat.sender.name}" ~ ~ ~ summon ${args[0]}`, World.getDimension('overworld'))
        }
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aSummoned ${args[1]}x ${args[0]}!"}]}`, World.getDimension('overworld'))
    }
}

export default command