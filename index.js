let input = [
	[1, 1, 2, 2],
	[1, 4, 2, 7],
	[1, 4, 2, 6],
	[1, 4, 4, 5],
	[2, 5, 6, 7],
	[4, 3, 7, 6],
]

console.log(calculate(input))

function calculate(arr) {
	const uniqueArray = arr.filter(
		(obj, index) =>
			arr.findIndex((item) => item.toString() === obj.toString()) === index
	)

	let area = []
	let area_intersect = []
	let point_intersect = []

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

	//console.log(area)
	console.log(area_intersect)
	console.log(point_intersect)

	return sum(area) - sum(area_intersect)
}

function isSameIntersectPoint(point_intersect, newPoint) {
	let isSame = false

	point_intersect.map(function (item) {
		if (newPoint.toString() === item.toString()) {
			isSame = true
		}
	})

	return isSame
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
	let area = 0

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
