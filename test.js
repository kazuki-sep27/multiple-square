function calculate(arr) {
	const uniqueArray = arr.filter(
		(obj, index) =>
			arr.findIndex((item) => item.toString() === obj.toString()) === index
	)

	let area = []
	let area_intersect = []

	uniqueArray.map(function (item) {
		area.push(findSquareArea(item))
	})

	uniqueArray.map(function (item, index) {
		for (let i = index + 1; i < uniqueArray.length; i++) {
			if (isIntersect(item, uniqueArray[i])) {
				area_intersect.push(findIntersectArea(item, uniqueArray[i]))
			}
		}
	})
	return sum(area) - sum(area_intersect)
}

function sum(arr) {
	return arr.reduce(function (a, b) {
		return a + b
	}, 0)
}

function findSquareArea(square) {
	let wide = square[2] - square[0]
	let height = square[3] - square[1]

	return wide * height
}

function isIntersect(square_1, square_2) {
	if (
		square_1[2] < square_2[0] ||
		square_1[0] > square_2[2] ||
		square_1[3] < square_2[1] ||
		square_1[1] > square_2[3]
	) {
		return false
	} else {
		return true
	}
}

function findIntersectArea(square_1, square_2) {
	let wide = 0
	let height = 0

	if (square_1[0] > square_2[0]) {
		wide = square_2[2] - square_1[0]
	} else {
		wide = square_1[2] - square_2[0]
	}

	if (square_1[1] > square_2[1]) {
		height = square_2[3] - square_1[1]
	} else {
		height = square_1[3] - square_2[1]
	}

	return wide * height
}

// Test
function test(obj) {
	console.log(
		obj.index + ": ",
		JSON.stringify(calculate(obj.input)) === JSON.stringify(obj.output)
	)
}

test({
	index: 1,
	input: [],
	output: 0,
})
test({
	index: 2,
	input: [[0, 0, 1, 1]],
	output: 1,
})
test({
	index: 3,
	input: [[0, 4, 11, 6]],
	output: 22,
})
test({
	index: 4,
	input: [
		[0, 0, 1, 1],
		[1, 1, 2, 2],
	],
	output: 2,
})
test({
	index: 5,
	input: [
		[0, 0, 1, 1],
		[0, 0, 2, 2],
	],
	output: 4,
})
test({
	index: 6,
	input: [
		[3, 3, 8, 5],
		[6, 3, 8, 9],
		[11, 6, 14, 12],
	],
	output: 36,
})
test({
	index: 7,
	input: [
		[0, 0, 1, 1],
		[0, 0, 2, 2],
		[0, 0, 1, 1],
		[0, 0, 2, 2],
		[0, 0, 1, 1],
		[0, 0, 2, 2],
	],
	output: 4,
})
test({
	index: 8,
	input: [
		[1, 1, 2, 2],
		[2, 2, 3, 3],
		[3, 3, 4, 4],
		[4, 4, 5, 5],
		[2, 1, 3, 2],
	],
	output: 5,
})
test({
	index: 9,
	input: [
		[1, 1, 2, 2],
		[1, 4, 2, 7],
		[1, 4, 2, 6],
		[1, 4, 4, 5],
		[2, 5, 6, 7],
		[4, 3, 7, 6],
	],
	output: 21,
})
