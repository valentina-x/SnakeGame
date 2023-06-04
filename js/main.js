const field = new Field();
const snake = new Snake();
const apple = new Apple();
const collision = new Collision();
const score = new Score();
const snakegame = new SnakeGame();

snakegame.draw();
snakegame.useLocalStorage();
snakegame.start();