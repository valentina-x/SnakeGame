class Collision extends Snake {
	constructor(score = 0) {
		super();
		this._score = score;
		this._resultDiv = document.querySelector('.panel__result-now');
		this._scoreSpan = this.resultDiv.querySelector('span');
	}

	set score(score) {
		this._score = score;
	}
	get score() {
		return this._score;
	}
	get resultDiv() {
		return this._resultDiv;
	}
	get scoreSpan() {
		return this._scoreSpan;
	}

	bump(idSetInterval) {
		if (snake.snakeX == apple.x && snake.snakeY == apple.y) {
			this.score++
			this.scoreSpan.innerHTML = '';
			this.scoreSpan.innerHTML = this.score;
			score.isVictory(this.score); //появление сообщения о новом рекорде
			apple.draw();
			if (snake.speed > snake.maxspeed) snake.speed -= snake.stepspeed;
			clearInterval(idSetInterval);
			const idSetInterval2 = setInterval(() => {snake.move(idSetInterval2);}, snake.speed);
		} else {
			snake.arr.pop();
		}
	}
	hitWall(idSetInterval) {
		if (snake.snakeX < 0 || snake.snakeX > this.cellSize * this.xcount
			|| snake.snakeY < 0 || snake.snakeY > this.cellSize * this.ycount) {
			clearInterval(idSetInterval);
			Collision.showEndGame();
			SnakeGame.restart();
			score.addBestScore();
		}
	}
	static showEndGame(content) {
		const container = document.querySelector('.container');
		if (!content) {
			return container.insertAdjacentHTML('beforeend', `<div class="attention"><div class="attention__title">Конец игры</div><button class="attention__bttn restart">Начать игру заново</button></div>`);
		} else {
			return container.insertAdjacentHTML('beforeend', content);
		}
	}
	static eatTeil(head, arr, idSetInterval) {
		for (let i = 0; i < arr.length; i++) {
			if (head.x == arr[i].x && head.y == arr[i].y) {
				clearInterval(idSetInterval);
				Collision.showEndGame();
				SnakeGame.restart();
				score.addBestScore();
			}
		}
	}
}

