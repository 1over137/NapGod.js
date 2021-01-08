const fs = require("fs");
const Discord = require('discord.js');
const categories = require('../../commands/categories')
let commands = {};

async function bootstrapCommands() {
	/*
	let cmds = await fs.readdirSync("./commands/help");
	cmds.forEach(async function(d) {
		if (!d.endsWith(".md")) return;

		let commandName = d.replace(".md", "").toLowerCase();
		let text = await fs.readFileSync("./commands/help/" + d, "utf8");
		if (commandName.indexOf(".") >= 0) {
			commandName = commandName.split(".")[0];
			if (!commands.hasOwnProperty(commandName)) {
				commands[commandName] = [];
			}
			commands[commandName].push(text);
		} else {
			commands[commandName] = text;
		}
	});
	*/
	let text = await fs.readFileSync("./commands/helpdoc.md", "utf8");
	text.split("\n!").forEach((item, i) => {
		let s = item
		if(i!=0){
			s = "!" + s;
		}
		let commandName = s.match("(^!.*?)\n")[0].slice(1, -1).trim();
		//console.log(commandName);
		let snippet = s.replace(/^!.*?\n/, "");
		//console.log(snippet)
		if (commandName.indexOf(".") >= 0) {
			commandName = commandName.split(".")[0];
			if (!commands.hasOwnProperty(commandName)) {
				commands[commandName] = [];
			}
			commands[commandName].push(snippet);
		} else {
			commands[commandName] = snippet;
	}
	});
}

bootstrapCommands();


module.exports = {
	processMarkdownCommands: function(command, message, args, dry=false) {
		if (commands.hasOwnProperty(command)) {
			markdown(command, message, args, dry)
			return true
		}
		else if (command == "help") {
			message.channel.send(new Discord.RichEmbed()
	        .setColor('#0099ff')
	      	.setTitle('Nap God Help Commands')
	      	.addField('Adaptation', categories.adaptation, true)
					.addField('Symptoms', categories.symptoms, true)
					.addField('Scheduling', categories.scheduling, true)
					.addField('Lifestyle', categories.lifestyle, true)
					.addField('Mechanics', categories.mechanics, true)
					.addField('What do I do/Tips', categories.tips, true)
	      	)
			return true
		}
		return false
	}
};

async function markdown(command, message, args, dry=false) {
	let mVal = commands[command];
	console.log("MSG   : ", "[Help markdown for " + command + "]")
	msgparams = {}
	if (Array.isArray(mVal)) {
		if(!dry){mVal.forEach(m => message.channel.send(m, msgparams));}
	} else {
		if(!dry){message.channel.send(mVal, msgparams);}
	}
}
