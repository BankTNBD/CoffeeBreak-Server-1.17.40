import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'credit',
    description: 'Displays the credits',
    usage: '!credit',
    category: 'general',
    args: [],
    execute(chat, args) {
        Commands.run(`/tellraw ${chat.sender.name} {"rawtext":[{"text":"§aCustom commands for CoffeeBreak Server. Create By IamBanky  §7(Original from RomanMender on MCPEDL.com.)"}]}`, World.getDimension('overworld'))
    }
}

export default command