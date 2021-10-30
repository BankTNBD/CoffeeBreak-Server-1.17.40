import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'banish',
    description: 'Teleports the player to a random location.',
    usage: '.banish <@player>',
    category: 'fun',
    args: [
        'player'
    ],
    execute(chat, args) {
        var target = args[0].split('@')[1]
        var playerCheck = World.getPlayers().find(p => p.name == target); if (!playerCheck) return Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§cCould not find the player: ${target}"}]}`, World.getDimension('overworld'))

        Commands.run(`/execute "${target}" ~ ~ ~ spreadplayers ~ ~ 10 2000 @s`, World.getDimension('overworld'))
        Commands.run(`/execute "${target}" ~ ~ ~ effect @s resistance 10 255 true`, World.getDimension('overworld'))
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aPlayer has been banished!"}]}`, World.getDimension('overworld'))
    }
}

export default command