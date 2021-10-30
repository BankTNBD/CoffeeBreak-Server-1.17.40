import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'discord',
    description: 'Displays Discord lnk',
    usage: '!discord',
    category: 'general',
    args: [],
    execute(chat, args) {
        Commands.run(`/tellraw ${chat.sender.name} {"rawtext":[{"text":"§aDiscord discord.gg/9Nx5fd7DU9 "}]}`, World.getDimension('overworld'))
    }
}

export default command