module.exports = [
	{
		name: 'Alain Robert',
		photo: '/images/climber1.png',
		answers: [ 4, 2, 4, 4, 5, 4, 1, 5, 5, 5 ]
	},
	{
		name: 'Chris Sharma',
		photo: '/images/climber2.png',
		answers: [ 4, 1, 1, 1, 3, 1, 1, 5, 2, 5 ]
	},
	{
		name: 'Alex Honnold',
		photo: '/images/climber3.png',
		answers: [ 5, 1, 2, 5, 5, 5, 1, 3, 4, 5 ]
	},
	{
		name: 'Dean Potter',
		photo: '/images/climber4.png',
		answers: [ 5, 1, 5, 1, 5, 3, 1, 4, 4, 5 ]
	},
	{
		name: 'Graham Hunt',
		photo: '/images/climber5.png',
		answers: [ 5, 5, 5, 3, 1, 3, 1, 5, 5, 5 ]
	},
	{
		name: 'Bill Dause',
		photo: '/images/skydiver1.png',
		answers: [ 5, 3, 5, 5, 5, 5, 1, 4, 4, 5 ]
	},
	{
		name: 'Jay Stokes',
		photo: '/images/skydiver2.png',
		answers: [ 5, 1, 4, 1, 5, 1, 1, 4, 2, 5 ]
	},
	{
		name: 'Greg Windmiller',
		photo: '/images/skydiver3.png',
		answers: [ 3, 1, 4, 3, 5, 5, 1, 4, 3, 5 ]
	},
	{
		name: 'Nick Batsch',
		photo: '/images/skydiver4.png',
		answers: [ 5, 1, 5, 1, 5, 1, 1, 2, 2, 1 ]
	},
	{
		name: 'Mitch Decoteau',
		photo: '/images/skydiver5.png',
		answers: [ 5, 4, 5, 3, 5, 3, 4, 4, 5, 5 ]
	},
	{
		name: 'Kelly Slater',
		photo: '/images/surfer1.png',
		answers: [ 3, 1, 3, 5, 2, 1, 1, 5, 5, 5 ]
	},
	{
		name: 'Laird Hamilton',
		photo: '/images/surfer2.png',
		answers: [ 3, 1, 1, 5, 5, 5, 1, 5, 5, 5 ]
	},
	{
		name: 'Corky Carroll',
		photo: '/images/surfer3.png',
		answers: [ 5, 3, 4, 3, 5, 5, 1, 5, 4, 5 ]
	},
	{
		name: 'Mark Richards',
		photo: '/images/surfer4.png',
		answers: [ 5, 5, 5, 1, 5, 1, 1, 3, 3, 3 ]
	},
	{
		name: 'Andy Irons',
		photo: '/images/surfer5.png',
		answers: [ 4, 5, 4, 1, 5, 3, 2, 3, 4, 5 ]
	}
];

module.exports.push2arr = function(data) {
	module.exports.allFriends.push(data);
};
