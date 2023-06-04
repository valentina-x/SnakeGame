class Field extends Cell {
	constructor() {
		super();
		this._canvas = document.querySelector('#snakegame');
		this._ctx = this.canvas.getContext('2d');
		this._width = this.canvas.getAttribute('width');
		this._height = this.canvas.getAttribute('height');
	}

	#linesColor = '#9b9b9b';

	get canvas() {
		return this._canvas;
	}
	get ctx() {
		return this._ctx;
	}
	get width() {
		return this._width;
	}
	get height() {
		return this._height;
	}

	draw() { 
		for (let x = 0; x < this.width; x += this.cellSize) {
			this.ctx.moveTo(x, 0);
			this.ctx.lineTo(x, this.height);
		}
		for (let y = 0; y < this.height; y += this.cellSize) {
			this.ctx.moveTo(0, y);
			this.ctx.lineTo(this.width, y);
		}
		this.ctx.strokeStyle = this.#linesColor;
		this.ctx.stroke();
	}
}