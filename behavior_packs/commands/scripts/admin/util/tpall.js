import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'tpall',
    description: 'teleports everyone to you',
    usage: '.tpall',
    category: 'util',
    args: [],
    execute(chat, args) {
        Commands.run(`/execute "${chat.sender.name}" ~ ~ ~ tp @a @s`, World.getDimension('overworld'))
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aTeleported Everyone!"}]}`, World.getDimension('overworld'))
    }
}

export default command