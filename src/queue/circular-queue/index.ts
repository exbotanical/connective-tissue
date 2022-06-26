class CircularQueue<T> {
	length = 0;
	head = 0;
	tail = -1;
	state: (T | null)[] = [];

	constructor(private size: number) {}

	enqueue(value: T) {
		if (this.isFull()) {
			return false;
		}

		this.tail++;
		this.state[this.tail % this.size] = value;
		this.length++;

		return true;
	}

	deQueue() {
		if (this.isEmpty()) {
			return false;
		}

		const value = this.front();

		this.state[this.head % this.size] = null;
		this.head++;
		this.length--;

		return value;
	}

	front() {
		if (this.isEmpty()) {
			return -1;
		}

		return this.state[this.head % this.size];
	}

	rear() {
		if (this.isEmpty()) {
			return -1;
		}

		return this.state[this.tail % this.size];
	}

	isEmpty() {
		return this.length === 0;
	}

	isFull() {
		return this.length === this.size;
	}
}
