class Cell {
	constructor() {
		this._cellSize = 30;
		this._xcount = 20;
		this._ycount = 15;
	}
	get cellSize() {
		return this._cellSize;
	}
	get xcount() {
		return this._xcount;
	}
	get ycount() {
		return this._ycount;
	}
}