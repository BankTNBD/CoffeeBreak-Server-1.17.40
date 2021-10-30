import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'hole',
    description: 'Put a hole under a player',
    usage: '.hole <@player>',
    category: 'fun',
    args: [
        'player'
    ],
    execute(chat, args) {
        var target = args[0].split('@')[1]
        var playerCheck = World.getPlayers().find(p => p.name == target); if (!playerCheck) return Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§cCould not find the player: ${target}"}]}`, World.getDimension('overworld'))

        Commands.run(`/execute "${target}" ~ ~ ~ fill ~-3 ~ ~-3 ~3 ~-25 ~3 air`, World.getDimension('overworld'))
        Commands.run(`/execute "${target}" ~ ~ ~ fill ~-3 ~-25 ~-3 ~3 ~-25 ~3 lava`, World.getDimension('overworld'))
        Commands.run(`/execute "${target}" ~ ~ ~ fill ~-3 ~-24 ~-3 ~3 ~-20 ~3 web`, World.getDimension('overworld'))
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aThe hole has been dug!"}]}`, World.getDimension('overworld'))
    }
}

export default command