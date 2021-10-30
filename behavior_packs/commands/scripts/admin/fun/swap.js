import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'swap',
    description: 'Swaps two players\' locations, Freaky Friday style.',
    usage: '.swap <@player> <@player>',
    category: 'fun',
    args: [
        'player',
        'player2'
    ],
    execute(chat, args) {
        var target1 = args[0].split('@')[1]
        var target2 = args[1].split('@')[1]
        var coords1 = null
        var coords2 = null

        var players = World.getPlayers()
        players.forEach(player => {
            if (player.name == target1) {
                coords1 = player.location
            }
            if (player.name == target2) {
                coords2 = player.location
            }
        })

        if (coords1 == null) return Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§cCould not find the player: ${target1}"}]}`, World.getDimension('overworld'))
        if (coords2 == null) return Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§cCould not find the player: ${target2}"}]}`, World.getDimension('overworld'))

        Commands.run(`/execute "${target1}" ~ ~ ~ tp ${coords2.x} ${coords2.y} ${coords2.z}`, World.getDimension('overworld'))
        Commands.run(`/execute "${target2}" ~ ~ ~ tp ${coords1.x} ${coords1.y} ${coords1.z}`, World.getDimension('overworld'))
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aPlayers have been swaped!"}]}`, World.getDimension('overworld'))
    }
}

export default command