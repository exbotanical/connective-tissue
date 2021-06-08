// import test from 'tape';

// import { CircularRingList } from '../lib';

// const subject = 'The circular ring list';
// const init = n => new CircularRingList(n);


// test(`${subject} maintains its integrity as a single-node list`, t => {
// 	const tryFail = (t => (...args) => {
// 		try { verify(...args); }
// 		catch (msg) { t.fail(msg); }
// 	})(t);

// 	const r0 = init();
// 	const r1 = init(1);

// 	// base
// 	tryFail(r0, 0, 0);
// 	tryFail(r1, 1, 0);

// 	t.end();
// });

// function TestCornerCases() {


// 	// // insert
// 	// r1.link(r0);
// 	// tryFail(r0, 0, 0);
// 	// tryFail(r1, 1, 0);

// 	// // insert
// 	// r1.link(r0);
// 	// tryFail(r0, 0, 0);
// 	// tryFail(r1, 1, 0);

// 	// // unlink
// 	// r1.unlink(0);
// 	// tryFail(r1, 1, 0);
// }

// // function makeN(n int) *Ring {
// // 	r = New(n)
// // 	for i = 1; i <= n; i++ {
// // 		r.Value = i
// // 		r = r.next()
// // 	}
// // 	return r
// // }

// // function sumN(n int) int { return (n*n + n) / 2 }

// // function TestNew(t *testing.T) {
// // 	for i = 0; i < 10; i++ {
// // 		r = New(i)
// // 		verify(r, i, -1)
// // 	}
// // 	for i = 0; i < 10; i++ {
// // 		r = makeN(i)
// // 		verify(r, i, sumN(i))
// // 	}
// // }

// // function Testlink1(t *testing.T) {
// // 	r1a = makeN(1)
// // 	var r1b Ring
// // 	r2a = r1a.link(&r1b)
// // 	verify(r2a, 2, 1)
// // 	if r2a != r1a {
// // 		throw `a) 2-element link failed`)
// // 	}

// // 	r2b = r2a.link(r2a.next())
// // 	verify(r2b, 2, 1)
// // 	if r2b != r2a.next() {
// // 		throw `b) 2-element link failed`)
// // 	}

// // 	r1c = r2b.link(r2b)
// // 	verify(r1c, 1, 1)
// // 	verify(r2b, 1, 0)
// // }

// // function Testlink2(t *testing.T) {
// // 	var r0 *Ring
// // 	r1a = &Ring{Value: 42}
// // 	r1b = &Ring{Value: 77}
// // 	r10 = makeN(10)

// // 	r1a.link(r0)
// // 	verify(r1a, 1, 42)

// // 	r1a.link(r1b)
// // 	verify(r1a, 2, 42+77)

// // 	r10.link(r0)
// // 	verify(r10, 10, sumN(10))

// // 	r10.link(r1a)
// // 	verify(r10, 12, sumN(10)+42+77)
// // }

// // function Testlink3(t *testing.T) {
// // 	var r Ring
// // 	n = 1
// // 	for i = 1; i < 10; i++ {
// // 		n += i
// // 		verify(r.link(New(i)), n, -1)
// // 	}
// // }

// // function Testunlink(t *testing.T) {
// // 	r10 = makeN(10)
// // 	s10 = r10.move(6)

// // 	sum10 = sumN(10)

// // 	verify(r10, 10, sum10)
// // 	verify(s10, 10, sum10)

// // 	r0 = r10.unlink(0)
// // 	verify(r0, 0, 0)

// // 	r1 = r10.unlink(1)
// // 	verify(r1, 1, 2)
// // 	verify(r10, 9, sum10-2)

// // 	r9 = r10.unlink(9)
// // 	verify(r9, 9, sum10-2)
// // 	verify(r10, 9, sum10-2)

// // }

// // function Testlinkunlink(t *testing.T) {
// // 	for i = 1; i < 4; i++ {
// // 		ri = New(i)
// // 		for j = 0; j < i; j++ {
// // 			rj = ri.unlink(j)
// // 			verify(rj, j, -1)
// // 			verify(ri, i-j, -1)
// // 			ri.link(rj)
// // 			verify(ri, i, -1)
// // 		}
// // 	}
// // }

// // // Test that calling Move() on an empty Ring initializes it.
// // function TestMoveEmptyRing(t *testing.T) {
// // 	var r Ring

// // 	r.move(1)
// // 	verify(r, 1, 0)
// // }


// function dump (r) {
// 	if (r == null) return;

// 	for (let i = 0, n = r.size(), p = r; i < n; p = p._next, i++) {
// 		console.log(i, p, p._prev, p._next);
// 	}
// }

// function verify (r, n, sum) {
// 	// size
// 	let size = r.size();

// 	if (size != n) throw `r.size() == ${size}; expected ${n}`;

// 	let i = 0;
// 	let v = 0;

// 	r.each(function (p) {
// 		i++;

// 		if (p != null) v += p;
// 	});

// 	if (i != n) throw `number of forward iterations == ${i}; expected ${n}`;

// 	if (sum >= 0 && v != sum) throw `forward ring sum = ${v}; expected ${sum}`;

// 	if (r.value == null) return;

// 	// connections
// 	if (r._next != null) {
// 		let p;

// 		for (let q = r; p == null || q != r; q = q._next) {
// 			if (p != null && p != q._prev) {
// 				throw `prev = ${p}, expected q.prev = ${q.prev}`;
// 			}
// 			p = q;
// 		}

// 		if (p != r._prev) throw `prev = ${p}, expected r.prev = ${r.prev}`;
// 	}

// 	// Next, Prev
// 	if (r.next() != r._next) throw `r.next() != r.next`;

// 	if (r.prev() != r._prev) throw `r.Prev() != r.prev`;

// 	// Move
// 	if (r.move(0) != r) throw `r.move(0) != r`;

// 	if (r.move(n) != r) throw `r.move(${n}) != r`;

// 	if (r.move(-n) != r) throw `r.move(${-n}) != r`;

// 	for (let i = 0; i < 10; i++) {
// 		let ni = n + i;
// 		let mi = ni % n;

// 		if (r.move(ni) != r.move(mi)) throw `r.move(${ni}) != r.move(${mi})`;

// 		if (r.move(-ni) != r.move(-mi)) throw `r.move(${-ni}) != r.move(${-mi})`;
// 	}
// }
