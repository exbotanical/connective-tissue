// export class CircularRingList {
// 	constructor (n) {
// 		if (n <= 0) return null;

// 		this.next = this;
// 		this.prev = this;

// 		for (let i = 0; i < n; i++) {
// 			this.next = this.init();
// 			this.next.prev = this;
// 		}

// 		this.next = this;
// 		this.prev = this;
// 	}

// 	init () {
// 		this.next = this;
// 		this.prev = this;

// 		return this;
// 	}

// 	static next () {
// 		if (!this.next) return this.init();
// 		return this.next;
// 	}

// 	static prev () {
// 		if (!this.next) return this.init();
// 		return this.prev;
// 	}

// 	static move (n) {
// 		if (!this.next) return this.init();

// 		switch (n) {
// 			case n < 0:
// 				while (n < 0) {
// 					Object.assign(this, this.prev);
// 					n++;
// 				}
// 				break;
// 			case n > 0:
// 				while (n > 0) {
// 					Object.assign(this, this.next);
// 					n--;
// 				}
// 				break;
// 		}

// 		return this;
// 	}

// 	link (s) {
// 		const n = this.next();

// 		if (s != null) {
// 			const p = s.prev();
// 			this.next = s;
// 			s.prev = this;
// 			n.prev = p;
// 			p.next = n;
// 		}

// 		return n;
// 	}

// 	unlink (n) {
// 		if (n <= 0) return null;
// 		return this.link(this.move(n + 1));
// 	}

// 	size () {
// 		let n = 0;

// 		if (this != null) {
// 			n = 1;
// 			for (let p = this.next(); p != this; p = p.next) {
// 				n++;
// 			}
// 		}

// 		return n;
// 	}

// 	each (fn) {
// 		if (this != null) {
// 			fn(this.value);

// 			for (let p = this.next(); p != this; p = p.next) {
// 				fn(p.value);
// 			}
// 		}
// 	}
// }
