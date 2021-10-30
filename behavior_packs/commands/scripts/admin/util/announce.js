import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'announce',
    description: 'announce a message to the server',
    usage: '.announce <message>',
    category: 'util',
    args: [
        "message"
    ],
    execute(chat, args) {
        Commands.run(`/tellraw @a {"rawtext":[{"text":"[§4§lSERVER§r] ${args.join(' ')}"}]}`, World.getDimension('overworld'))
    }
}

export default command