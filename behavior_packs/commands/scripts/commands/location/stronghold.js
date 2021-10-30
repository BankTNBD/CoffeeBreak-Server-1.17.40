import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'stronghold',
    description: 'Show stronghold coordinate',
    usage: '!stronghold',
    category: 'util',
    args: [],
    execute(chat, args) {
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aStronghold at 1392 (y) 1783!"}]}`, World.getDimension('overworld'))
    }
}

export default command