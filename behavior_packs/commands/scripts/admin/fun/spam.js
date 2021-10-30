import { Commands, World } from 'mojang-minecraft'

const command = {
    name: 'spam',
    description: 'Spams a players chat with useless quotes',
    usage: '.spam <@player>',
    category: 'fun',
    args: [
        'player'
    ],
    execute(chat, args) {
        var target = args[0].split('@')[1]
        var playerCheck = World.getPlayers().find(p => p.name == target); if (!playerCheck) return Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§cCould not find the player: ${target}"}]}`, World.getDimension('overworld'))

        var quotes = [
            "Dogs have Owners, Cats have Staff.",
            "I do not fear computers. I fear lack of them.",
            "A computer once beat me at chess, but it was no match for me at kick boxing.",
            "Computer Science is no more about computers than astronomy is about telescopes.",
            "The computer was born to solve problems that did not exist before.",
            "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.",
            "Software is a gas; it expands to fill its container.",
            "All parts should go together without forcing. You must remember that the parts you are reassembling were disassembled by you. Therefore, if you can’t get them together again, there must be a reason. By all means, do not use a hammer.",
            "Standards are always out of date. That’s what makes them standards.",
            "Physics is the universe’s operating system.",
            "It’s hardware that makes a machine fast. It’s software that makes a fast machine slow.",
            "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
            "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
            "The more you know, the more you realize you know nothing.",
            "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
            "Real knowledge is to know the extent of one’s ignorance.",
            "If people never did silly things, nothing intelligent would ever get done.",
            "Getting information off the Internet is like taking a drink from a fire hydrant.",
            "If you think your users are idiots, only idiots will use it.",
            "From a programmer’s point of view, the user is a peripheral that types when you issue a read request.",
            "Where is the ‘any’ key?",
            "Computers are good at following instructions, but not at reading your mind.",
            "There is only one problem with common sense; it’s not very common.",
            "Your most unhappy customers are your greatest source of learning.",
            "Let us change our traditional attitude to the construction of programs: Instead of imagining that our main task is to instruct a computer what to do, let us concentrate rather on explaining to human beings what we want a computer to do.",
            "The Internet? We are not interested in it.",
            "The best way to get accurate information on Usenet is to post something wrong and wait for corrections.",
            "The most likely way for the world to be destroyed, most experts agree, is by accident. That’s where we come in; we’re computer professionals. We cause accidents.",
            "Pessimists, we’re told, look at a glass containing 50% air and 50% water and see it as half empty. Optimists, in contrast, see it as half full. Engineers, of course, understand the glass is twice as big as it needs to be.",
            "In a room full of top software designers, if two agree on the same thing, that’s a majority."
        ]

        for (let i = 0; i < 500; i++) {
            Commands.run(`/execute "${target}" ~ ~ ~ tellraw @s {"rawtext":[{"text":"<"},{"selector":"@r[rm=2]"},{"text":"> ${quotes[Math.floor(Math.random() * quotes.length)]}"}]}`, World.getDimension('overworld'))
        }

        Commands.run(`/tellraw "${chat.sender.name}" {"rawtext":[{"text":"§aPlayer is being spammed!"}]}`, World.getDimension('overworld'))
    }
}

export default command