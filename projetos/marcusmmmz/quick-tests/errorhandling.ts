export function resultError<T>(err: T) {
	return { err, res: null };
}

export function resultSuccess<T>(res: T) {
	return { err: null, res };
}

export interface ItemStack {
	itemID: string;
	amount: number;
}

export const formatItemStack = ({ amount, itemID }: ItemStack) =>
	`${amount} ${itemID}`;

export const formatItemStacks = (itemStacks: ItemStack[]) =>
	itemStacks.length !== 0
		? itemStacks.map(formatItemStack).join(", ")
		: "Nenhum";

export interface Crafting {
	input: ItemStack[];
	output: ItemStack[];
}

export enum CraftErrors {
	USER_CANT_CRAFT,
}

export async function canUserCraft(userId: string, crafting: Crafting) {
	return false;

	// let invSlots = getInventory(userId);
	// let ingredients = crafting.input;

	// return ingredients.every((ingredient) => {
	// 	let item = invSlots.find((invSlot) => invSlot.itemID == ingredient.itemID);

	// 	if (!item) return false;
	// 	if (item?.amount < ingredient.amount) return false;

	// 	return true;
	// });
}

export async function craft(userId: string, crafting: Crafting) {
	if (!(await canUserCraft(userId, crafting)))
		return resultError(CraftErrors.USER_CANT_CRAFT);

	// crafting.input.forEach((stack) => {
	// 	removeItemById(stack, userId);
	// });

	// crafting.output.forEach((stack) => addItem(stack, userId));

	return resultSuccess(crafting.output);
}

let msg = {
	reply: console.log,
};

let crafting: Crafting = {
	input: [],
	output: [],
};

export async function execute() {
	const { err, res } = await craft("msg.author.id", crafting);

	switch (err) {
		case CraftErrors.USER_CANT_CRAFT:
			return msg.reply("Tu não tem recursos pra fazer isso porrar");
		default:
			// throw Error(err);
			break;
	}

	// if (res)
	res;
	msg.reply(`Tu craftou: ${formatItemStacks(res)}`);
}
