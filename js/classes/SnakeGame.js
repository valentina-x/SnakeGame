class SnakeGame {
	draw() {
		field.draw();
		snake.draw();
	}
	start() {
		document.querySelector('canvas').addEventListener('click', snake.init);
	}
	static restart() {
		const button = document.querySelectorAll('.restart');
		button.forEach(btn => btn.addEventListener('click', reload))
		
		function reload() {
			score.addBestScore();
			setTimeout(() => { window.location.reload(); }, 200);
		}
	}
	useLocalStorage() {
		score.addBestScore();
		score.checkLocalStorage();
	}
}
