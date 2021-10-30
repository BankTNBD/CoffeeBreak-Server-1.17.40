import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'day',
    description: 'changes the time to day',
    usage: '.day',
    category: 'util',
    args: [],
    execute(chat, args) {
        Commands.run(`/execute "${chat.sender.name}" ~ ~ ~ time set day`, World.getDimension('overworld'))
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aTime Changed!"}]}`, World.getDimension('overworld'))
    }
}

export default command