import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'heal',
    description: 'Heals you to full health',
    usage: '.heal',
    category: 'util',
    args: [],
    execute(chat, args) {
        Commands.run(`/execute "${chat.sender.name}" ~ ~ ~ effect @s instant_health 1 255 true`, World.getDimension('overworld'))
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aHealed!"}]}`, World.getDimension('overworld'))
    }
}

export default command