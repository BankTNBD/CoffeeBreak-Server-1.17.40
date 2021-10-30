import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'tphere',
    description: 'teleports a player to you',
    usage: '.tphere <@player>',
    category: 'util',
    args: [
        'player'
    ],
    execute(chat, args) {
        var target = args[0].split('@')[1]
        var playerCheck = World.getPlayers().find(p => p.name == target); if (!playerCheck) return Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§cCould not find the player: ${target}"}]}`, World.getDimension('overworld'))

        Commands.run(`/execute "${chat.sender.name}" ~ ~ ~ tp "${target}" @s`, World.getDimension('overworld'))
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aTeleported ${target} to you!"}]}`, World.getDimension('overworld'))
    }
}

export default command