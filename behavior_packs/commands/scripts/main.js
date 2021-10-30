import { World, Commands } from 'mojang-minecraft'
import admins from './admin/import.js';
import commands from './commands/import.js'

World.events.beforeChat.subscribe((chat) => {
    if (chat.message.startsWith('!')) {
        const args = chat.message.slice('!'.length).trim().split(/ +/g)
        const cmd = args.shift().toLowerCase()
        const command = commands[cmd]
        try { var tags = Commands.run(`/tag "${chat.sender.name}" list`, World.getDimension('overworld')).statusMessage } catch (e) { }        
        if (tags.search(/(admin)/g) == -1) {
            chat.cancel = true
            if (command) {
                if (command.args.length > args.length) {
                    Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§cImproper Usage: ${command.usage}"}]}`, World.getDimension('overworld'))
                } else {
                    command.execute(chat, args)
                }
            } else {
                Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§cThe command ${cmd} does not exist"}]}`, World.getDimension('overworld'))
            }
        }

        const admin = admins[cmd]
        try { var tags = Commands.run(`/tag "${chat.sender.name}" list`, World.getDimension('overworld')).statusMessage } catch (e) { }
        if (tags.search(/(admin)/g) !== -1) {
            chat.cancel = true
            if (admin) {
                if (admin.args.length > args.length) {
                    Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§cImproper Usage: ${admin.usage}"}]}`, World.getDimension('overworld'))
                } else {
                    admin.execute(chat, args)
                }
            }
        }
    }
})

World.events.tick.subscribe((tick) => {
    var players = World.getPlayers()
    players.forEach(player => {
        /*
        try { var tags = Commands.run(`/tag "${player.name}" list`, World.getDimension('overworld')).statusMessage } catch (e) { }
        if (tags.search(/(credits)/g) == -1) {
            Commands.run(`/tellraw "${player.name}" {"rawtext":[{"text":"§cCustom Commands by IamBanky, to give permissions run /tag <player> add admin"}]}`, World.getDimension('overworld'))
            Commands.run(`/tag "${player.name}" add credits`, World.getDimension('overworld'))
        }
        */
    })
})