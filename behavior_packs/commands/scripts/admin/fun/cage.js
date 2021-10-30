import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'cage',
    description: 'Trap a player',
    usage: '.cage <@player>',
    category: 'fun',
    args: [
        'player'
    ],
    execute(chat, args) {
        var target = args[0].split('@')[1]
        var playerCheck = World.getPlayers().find(p => p.name == target); if (!playerCheck) return Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§cCould not find the player: ${target}"}]}`, World.getDimension('overworld'))

        Commands.run(`/execute "${target}" ~ ~ ~ tp ~~~`, World.getDimension('overworld'))
        Commands.run(`/execute "${target}" ~ ~ ~ setblock ~~-1~ obsidian`, World.getDimension('overworld'))
        Commands.run(`/execute "${target}" ~ ~ ~ setblock ~~2~ obsidian`, World.getDimension('overworld'))
        Commands.run(`/execute "${target}" ~ ~ ~ setblock ~~~1 obsidian`, World.getDimension('overworld'))
        Commands.run(`/execute "${target}" ~ ~ ~ setblock ~~~-1 obsidian`, World.getDimension('overworld'))
        Commands.run(`/execute "${target}" ~ ~ ~ setblock ~1~~ obsidian`, World.getDimension('overworld'))
        Commands.run(`/execute "${target}" ~ ~ ~ setblock ~-1~~ obsidian`, World.getDimension('overworld'))
        Commands.run(`/execute "${target}" ~ ~ ~ setblock ~~1~1 glass`, World.getDimension('overworld'))
        Commands.run(`/execute "${target}" ~ ~ ~ setblock ~~1~-1 glass`, World.getDimension('overworld'))
        Commands.run(`/execute "${target}" ~ ~ ~ setblock ~1~1~ glass`, World.getDimension('overworld'))
        Commands.run(`/execute "${target}" ~ ~ ~ setblock ~-1~1~ glass`, World.getDimension('overworld'))
        Commands.run(`/execute "${target}" ~ ~ ~ setblock ~~1~ water`, World.getDimension('overworld'))
        Commands.run(`/execute "${target}" ~ ~ ~ setblock ~~~ water`, World.getDimension('overworld'))
        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aPlayer has been trapped!"}]}`, World.getDimension('overworld'))
    }
}

export default command