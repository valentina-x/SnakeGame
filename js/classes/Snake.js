class Snake extends Field {
	constructor() {
		super();
		this._speed = 200; // начальная скорость
		this._stepspeed = 15; // шаг ускорения
		this._maxspeed = 80; // максимальная скорость
		this._arr = []; // snake array
		this._arr[0] = {
			y: 6 * this.cellSize,
			x: 9 * this.cellSize,
		}
		this._arr[1] = {
			y: 7 * this.cellSize,
			x: 9 * this.cellSize,
		}
	}

	#headcolor = '#202020';
	#teilcolor = '#e4671f'; 
	#direction = '';

	set speed(speed) {
		this._speed = speed;
	}
	get speed() {
		return this._speed;
	}
	get stepspeed() {
		return this._stepspeed;
	}
	get maxspeed() {
		return this._maxspeed;
	}

	get arr() {
		return this._arr;
	}

	draw() {
		for (let i = 0; i < this.arr.length; i++) {
			this.ctx.fillStyle = i == 0 ? this.#headcolor : this.#teilcolor;
			this.ctx.fillRect(this.arr[i].x, this.arr[i].y, this.cellSize, this.cellSize);
		}
	}

	direction = (event) => {
		if (event.keyCode == 37 && this.#direction != "right")
			this.#direction = "left";
		else if (event.keyCode == 38 && this.#direction != "down")
			this.#direction = "up";
		else if (event.keyCode == 39 && this.#direction != "left")
			this.#direction = "right";
		else if (event.keyCode == 40 && this.#direction != "up")
			this.#direction = "down";
	}

	move(idSetInterval) {
		this.snakeX = this.arr[0].x;
		this.snakeY = this.arr[0].y;

		for (let i = 0; i < this.arr.length; i++) {
			this.ctx.clearRect(this.arr[i].x, this.arr[i].y, this.cellSize, this.cellSize);
		}

		collision.bump(idSetInterval);
		super.draw();
		collision.hitWall(idSetInterval);

		if ((this.#direction) && this.#direction != '') {
			if (this.#direction == 'left') {
				this.snakeX -= this.cellSize;
			}
			if (this.#direction == 'right') {
				this.snakeX += this.cellSize;
			}
			if (this.#direction == 'up') this.snakeY -= this.cellSize;
			if (this.#direction == 'down') this.snakeY += this.cellSize;
		} else {
			this.snakeY -= this.cellSize;
		}

		let newHead = {
			x: this.snakeX,
			y: this.snakeY
		}

		Collision.eatTeil(newHead, this.arr, idSetInterval);

		this.arr.unshift(newHead);
		this.draw();
	}

	init = () => {
		document.querySelector('canvas').removeEventListener('click', this.init);
		apple.draw();
		document.addEventListener('keydown', this.direction);
		const idSetInterval = setInterval(() => {
			this.move(idSetInterval);
		}, this.speed);
	}
}