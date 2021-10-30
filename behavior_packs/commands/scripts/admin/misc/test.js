import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'test',
    description: 'Test, Test!',
    usage: '.test',
    category: 'misc',
    args: [],
    execute(chat, args) {
        Commands.run(`/tellraw ${chat.sender.name} {"rawtext":[{"text":"§aTest!"}]}`, World.getDimension('overworld'))
    }
}

export default command