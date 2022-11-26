function twoSum(nums: number[], target: number): number[] {
	for (const i in nums) {
		const num1 = nums[i];

		for (const j in nums) {
			if (i == j) continue;

			const num2 = nums[j];

			if (num1 + num2 == target) {
				return [parseInt(i), parseInt(j)];
			}
		}
	}
	return [];
}

console.log(twoSum([2, 7, 11, 15], 9), twoSum([3, 2, 4], 6), twoSum([3, 3], 6));
