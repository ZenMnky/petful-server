const Queue = require('../queue/Queue');
const store = require('../store');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach(person => people.enqueue(person));

const backUpNames = ['John', 'Peter', 'Paul', 'Ruth', 'Elija', 'Ye-Jun', 'Seo-yun', 'Soo-ah', 'Shinichi Izumi', 'Satomi Murano', 'Migi'];

const allTheFolks = () => {
	let listOfFolks = people.all();

	// if we're running out of names
	// grab a random one and stick it in the queue
	// make sure that there are five names in queue
	if (listOfFolks) {
		if (listOfFolks.length < 5) {
			let diff = (listOfFolks.length)
				? (5 - listOfFolks.length)
				: 5;
			let i = 0;
			do{
				people.enqueue(
					backUpNames[Math.floor(Math.random() * backUpNames.length)]
				);
				i++;
			} while (i < diff);
		}
	} else {
		for( let i = 0; i < 5; i++){
			people.enqueue(
				backUpNames[Math.floor(Math.random() * backUpNames.length)]
			);
		}
	}
	

	return people.all();
};

// --------------------

module.exports = {
	allTheFolks,

	enqueue(name) {
		// Add a person's name to the queue.
		people.enqueue(name);
	},

	dequeue() {
		// Remove a person from the queue.
		return people.dequeue();
	}
};
