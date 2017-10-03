function test() {
	alert("HEY");
}

// var nav = new Vue({
// 	el: '#roladex',
// 	data: {
// 		excuses: [
// 			{ id: 0, text: "Stepped in dog shit", active: true },
// 			{ id: 1, text: "Guy in front of me had excessive Starbucks order", active: false },
// 			{ id: 2, text: "Hit by bus", active: false },
// 			{ id: 3, text: "Forgot to turn dryer on, pants are wet", active: false },
// 		],
// 	},
// 	methods: {
// 		toggleActive: function(s){
// 			s.active = !s.active;
// 		},
// 		nextActive: function(ex){
// 			excuseNumber = this.excuses.length;
// 			nextId = ex.id + 1;
// 			prevId = ex.id - 1;

// 			console.log(prevId);
// 			console.log(nextId);

// 			// change current excuses active state
// 			ex.active = !ex.active;

// 			if(nextId >= excuseNumber) {
// 				// if we run out of excuses, reset the counter
// 				nextId = 0;
// 			}

// 			// change next excuses active state
// 			this.excuses[nextId].active = !this.excuses[nextId].active;
// 		},
// 		prevActive: function(ex) {
// 			// var excuseNumber = this.excuses.length;
// 			// var prevId = ex.id - 1;
// 			nextId = ex.id + 1;
// 			prevId = ex.id - 1;

// 			console.log(prevId);
// 			console.log(nextId);

// 			// change current excuses active state
// 			ex.active = !ex.active;

// 			if(prevId < 0) {
// 				// if we run out of excuses, reset the counter. bc .length counts value, but the ID's are indexed at 0, when the length is 4, the last id # is only 3.
// 				prevId = excuseNumber - 1;
// 			}

// 			// change prev excuses active state
// 			this.excuses[prevId].active = !this.excuses[prevId].active;
// 		},
// 	},
// });