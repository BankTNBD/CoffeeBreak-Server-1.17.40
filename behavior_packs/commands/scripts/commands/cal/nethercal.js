import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'nethercal',
    description: 'Calculation overworld coordinate to Nether',
    usage: '!nethercal <number>',
    category: 'cal',
    args: [],
    execute(chat, args) {
        if (!args[0]) { Commands.run(`/tellraw ${chat.sender.name} {"rawtext":[{"text":"§4NULL §rEx: !nethercal 800 >> Ruturn 100"}]}`, World.getDimension('overworld')) }
        else if (isNaN(parseInt(args[0]))) {
            Commands.run(`/tellraw ${chat.sender.name} {"rawtext":[{"text":"§4NaN §rEx: !nethercal 800 >> Ruturn 100"}]}`, World.getDimension('overworld'))
        }
        else if (!isNaN(parseInt(args[0]))) {
            Commands.run(`/tellraw ${chat.sender.name} {"rawtext":[{"text":"§r§aOverworld: ${args[0]} §aNether: ${Math.round(args[0] / 8)}"}]}`, World.getDimension('overworld'))
        }
        else {
            Commands.run(`/tellraw ${chat.sender.name} {"rawtext":[{"text":"§4ERROR "}]}`, World.getDimension('overworld'))
        }
    }
}

export default command
