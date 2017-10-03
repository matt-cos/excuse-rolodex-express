var excuseNumber;
var nextId;
var prevId;

function nextActive(ex){
	excuseNumber = this.excuses.length;
	nextId = ex.id + 1;
	prevId = ex.id - 1;

	console.log(prevId);
	console.log(nextId);

	// change current excuses active state
	ex.active = !ex.active;

	if(nextId >= excuseNumber) {
		// if we run out of excuses, reset the counter
		nextId = 0;
	}

	// change next excuses active state
	this.excuses[nextId].active = !this.excuses[nextId].active;
}

// $("#roladex").remove();