class Score extends Collision {
	constructor(score = 0) {
		super();
		this._nowScore = score;
		this._bestScoreParentHTML = document.querySelector('.panel__result-best');
		this._bestScoreContainer = this.bestScoreParentHTML.querySelector('span');
		this._stringStorage = Number(localStorage.getItem('bestScore'));
	}

	set nowScore(score) {
		this._nowScore = score;
	}
	get nowScore() {
		return this._nowScore;
	}
	get bestScoreParentHTML() {
		return this._bestScoreParentHTML;
	}
	get bestScoreContainer() {
		return this._bestScoreContainer;
	}
	get stringStorage() {
		return this._stringStorage;
	}

	addBestScore() {
		this.nowScore = this.scoreSpan.textContent;
		if (this.stringStorage && this.nowScore > this.stringStorage) {
			addScoreToHTML(this.nowScore, this.bestScoreContainer);
			localStorage.setItem('bestScore', this.nowScore);
		} else if (this.stringStorage && this.nowScore < this.stringStorage) {
			addScoreToHTML(this.stringStorage, this.bestScoreContainer);
		} else if (!this.stringStorage && this.nowScore > 0) {
			addScoreToHTML(this.nowScore, this.bestScoreContainer);
			localStorage.setItem('bestScore', this.nowScore);
		}
		function addScoreToHTML(value, containerHTML) {
			containerHTML.innerHTML = '';
			containerHTML.innerHTML += value;
		}
	}
	checkLocalStorage() {
		if (!this.stringStorage) {
			return this.bestScoreParentHTML.style.display = 'none';
		} else {
			return this.bestScoreParentHTML.style.display = 'block';
		}
	}
	isVictory(nowScore) {
		if (this.stringStorage && nowScore > this.stringStorage) {
			const content = `<div class="victory"><div class="victory__title">Вы побили рекорд!</div><div class="victory__btn restart">Начать игру заново?</div></div>`;
			Collision.showEndGame(content);
			SnakeGame.restart();
		}
	}
}
