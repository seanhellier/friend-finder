module.exports = [
	{
		name: 'Alain Robert',
		photo: 'http://localhost:8080/app/public/images/climber1.png',
		answers: [ 4, 2, 4, 4, 5, 4, 1, 5, 5, 5 ]
	},
	{
		name: 'Chris Sharma',
		photo: 'http://localhost:8080/app/public/images/climber2.png',
		answers: [ 4, 1, 1, 1, 3, 1, 1, 5, 2, 5 ]
	},
	{
		name: 'Alex Honnold',
		photo: 'http://localhost:8080/app/public/images/climber3.png',
		answers: [ 5, 1, 2, 5, 5, 5, 1, 3, 4, 5 ]
	},
	{
		name: 'Dean Potter',
		photo: '/public/images/climber4.png',
		answers: [ 5, 1, 5, 1, 5, 3, 1, 4, 4, 5 ]
	},
	{
		name: 'Graham Hunt',
		photo: '/public/images/climber5.png',
		answers: [ 5, 5, 5, 3, 1, 3, 1, 5, 5, 5 ]
	},
	{
		name: 'Bill Dause',
		photo: '/public/images/skydiver1.png',
		answers: [ 5, 3, 5, 5, 5, 5, 1, 4, 4, 5 ]
	},
	{
		name: 'Jay Stokes',
		photo: '/public/images/skydiver2.png',
		answers: [ 5, 1, 4, 1, 5, 1, 1, 4, 2, 5 ]
	},
	{
		name: 'Greg Windmiller',
		photo: '/public/images/skydiver3.png',
		answers: [ 3, 1, 4, 3, 5, 5, 1, 4, 3, 5 ]
	},
	{
		name: 'Nick Batsch',
		photo: '/public/images/skydiver4.png',
		answers: [ 5, 1, 5, 1, 5, 1, 1, 2, 2, 1 ]
	},
	{
		name: 'Mitch Decoteau',
		photo: '/public/images/skydiver5.png',
		answers: [ 5, 4, 5, 3, 5, 3, 4, 4, 5, 5 ]
	},
	{
		name: 'Kelly Slater',
		photo: '/public/images/surfer1.png',
		answers: [ 3, 1, 3, 5, 2, 1, 1, 5, 5, 5 ]
	},
	{
		name: 'Laird Hamilton',
		photo: '/public/images/surfer2.png',
		answers: [ 3, 1, 1, 5, 5, 5, 1, 5, 5, 5 ]
	},
	{
		name: 'Corky Carroll',
		photo: '/public/images/surfer3.png',
		answers: [ 5, 3, 4, 3, 5, 5, 1, 5, 4, 5 ]
	},
	{
		name: 'Mark Richards',
		photo: '/public/images/surfer4.png',
		answers: [ 5, 5, 5, 1, 5, 1, 1, 3, 3, 3 ]
	},
	{
		name: 'Andy Irons',
		photo: '/public/images/surfer5.png',
		answers: [ 4, 5, 4, 1, 5, 3, 2, 3, 4, 5 ]
	}
];

module.exports.push2arr = function(data) {
	module.exports.allFriends.push(data);
};
