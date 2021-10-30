import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'feed',
    description: 'Feeds you to full hunger',
    usage: '.feed',
    category: 'util',
    args: [],
    execute(chat, args) {
        Commands.run(`/execute "${chat.sender.name}" ~ ~ ~ effect @s saturation 1 255 true`, World.getDimension('overworld'))
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aFed!"}]}`, World.getDimension('overworld'))
    }
}

export default command