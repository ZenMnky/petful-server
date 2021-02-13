const Queue = require('../queue/Queue');
const store = require('../store');

// Set up initial data.
// --------------------

const DogQueue = new Queue();
const CatQueue = new Queue();


store.dogs.forEach(dog => DogQueue.enqueue(dog));
store.cats.forEach(cat => CatQueue.enqueue(cat));


// --------------------

module.exports = {
	get() {
		// Return the pets next in line to be adopted.
		let firstPets = {
			dog: DogQueue.show(),
			cat: CatQueue.show()
		};
		
		if(!firstPets.dog){
			store.dogs.forEach(dog => DogQueue.enqueue(dog));
			firstPets.dog = DogQueue.show();
		}
		if(!firstPets.cat){
			store.cats.forEach(cat => CatQueue.enqueue(cat));
			firstPets.cat = CatQueue.show();
		}

		return firstPets;
	},

	dequeue(type) {
		// Remove a pet from the queue.
		let toRemove = type === 'dog'
			? DogQueue
			: CatQueue;
    
		return toRemove.dequeue();
	}
};

