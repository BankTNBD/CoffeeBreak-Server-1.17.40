import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'sethome',
    description: 'Sets your home location',
    usage: '.sethome',
    category: 'util',
    args: [],
    execute(chat, args) {

        Commands.run(`/execute "${chat.sender.name}" ~ ~ ~ spawnpoint`, World.getDimension('overworld'))
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aSpawn Point set!"}]}`, World.getDimension('overworld'))
    }
}

export default command