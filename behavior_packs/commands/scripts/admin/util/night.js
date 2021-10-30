import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'night',
    description: 'changes the time to night',
    usage: '.night',
    category: 'util',
    args: [],
    execute(chat, args) {
        Commands.run(`/execute "${chat.sender.name}" ~ ~ ~ time set night`, World.getDimension('overworld'))
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aTime Changed!"}]}`, World.getDimension('overworld'))
    }
}

export default command