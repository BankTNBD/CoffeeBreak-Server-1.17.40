import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'smite',
    description: 'Smite a player',
    usage: '.smite <@player>',
    category: 'fun',
    args: [
        'player'
    ],
    execute(chat, args) {
        var target = args[0].split('@')[1]
        var playerCheck = World.getPlayers().find(p => p.name == target); if (!playerCheck) return Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§cCould not find the player: ${target}"}]}`, World.getDimension('overworld'))

        Commands.run(`/execute "${target}" ~ ~ ~ summon lightning_bolt`, World.getDimension('overworld'))
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aPlayer has been smited!"}]}`, World.getDimension('overworld'))
    }
}

export default command