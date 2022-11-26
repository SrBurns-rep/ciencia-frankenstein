function getXPercentageOfY(x: number, y: number) {
	(x / y) * 100;
}
const minimumBlockReward = 0.3;

const blocksPerMinute = 2;
let currentSupply = 18_200_000;
let currentBlockReward = 0.6;

let blocksPerHour = 60 / blocksPerMinute;
let blocksPerDay = 24 * blocksPerHour;
let blocksPerYear = 365 * blocksPerDay;

let rewardsPerYear = blocksPerYear * currentBlockReward;

let inflationPercentagePerYear = (rewardsPerYear / currentSupply) * 100;

console.log(inflationPercentagePerYear);
