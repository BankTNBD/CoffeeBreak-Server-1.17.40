import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'credit',
    description: 'Displays the credits',
    usage: '.credit',
    category: 'misc',
    args: [],
    execute(chat, args) {
        Commands.run(`/tellraw ${chat.sender.name} {"rawtext":[{"text":"§aCustom commands for CoffeeBreak Server. Create By IamBanky  §7(Original from RomanMender on MCPEDL.com.) §aDiscord discord.gg/9Nx5fd7DU9 "}]}`, World.getDimension('overworld'))
    }
}

export default command