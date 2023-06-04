class Apple extends Snake {
	constructor(x, y) {
		super();
		this._x = x;
		this._y = y;
		this._img = new Image();
		this._img.src = "./images/apple.png";
	}

	set x(x) {
		this._x = x;
	}
	get x() {
		return this._x;
	}
	set y(y) {
		this._y = y;
	}
	get y() {
		return this._y;
	}
	get img() {
		return this._img;
	}

	draw() {
		this.x = createRandom(this.xcount, this.cellSize);
		this.y = createRandom(this.ycount, this.cellSize);

		function createRandom(count, size) {
			return Math.floor(Math.random() * count) * size; 
		}

		return setTimeout(() => {
			if (snake.snakeX != this.x && snake.snakeY != this.y &&
				snake.snakeX != this.y && snake.snakeY != this.x) {
				this.ctx.drawImage(this.img, this.x, this.y);
			} else {
				this.x = createRandom(this.xcount, this.cellSize);
				this.y = createRandom(this.ycount, this.cellSize); 
				this.ctx.drawImage(this.img, this.x, this.y);
			}
		}, 150);
	}
}
