import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'lobby',
    description: 'Show lobby coordinate',
    usage: '.lobby',
    category: 'util',
    args: [],
    execute(chat, args) {
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aLobby at 110 61 -140!"}]}`, World.getDimension('overworld'))
    }
}

export default command