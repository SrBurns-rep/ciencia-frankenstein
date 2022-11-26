let commandBlockOutput = "";

enum GameModes {
	SURVIVAL,
	CREATIVE,
	ADVENTURE,
}

function setGamemode(mode: GameModes) {
	return "gamemode " + mode;
}

function say(text: string) {
	return "/say " + text;
}

function tell(text: string, who: string) {
	return who ? `/tell @${who} ${text}` : `/tell ${text}`;
}

function execute(origin: string, pos: "~ ~ ~" | number[], command: string) {
	return `/execute @${origin} ${pos.length == 0 ? "~ ~ ~" : pos} ${command}`;
}

// commandBlockOutput += execute('e[type="villager"]', [], say("hey"))
commandBlockOutput += execute(
	"a",
	[],
	execute('e[type="Villager",c=1]', [], tell("Hey", "p"))
);

console.log(commandBlockOutput);
