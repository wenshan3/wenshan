
(function() {
	// 记录游戏对象
	var that;
	function Game(map) {
		this.food = new Food();
		this.snake = new Snake();
		this.map = map;
		that = this;
	}
	Game.prototype.start = function() {
		// 1. 把蛇和食物对象渲染到地图上
		this.food.render(this.map);
		this.snake.render(this.map);
		// 2. 开始游戏的逻辑
		// 2.1 让蛇移动
		// 2.2 当蛇遇到游戏边界 游戏结束
		runSnake();
		// 2.3 通过键盘控制蛇移动的方向
		bindKey();
		// 2.4 当蛇遇到食物
		
	}
	function bindKey() {
		document.addEventListener('keydown', function(e) {
			switch(e.keyCode) {
				case 37:
					that.snake.direction = 'left';
					break;
				case 38:
					that.snake.direction = 'top';
					break;
				case 39:
					that.snake.direction = 'right';
					break;
				case 40:
					that.snake.direction = 'bottom';
					break;				
			}
		}, false)
	}
	// 私有函数 让蛇移动
	function runSnake() {
		var timerId = setInterval(function() {
			that.snake.move(that.food, that.map);
			// that.snake.move();
			that.snake.render(that.map);
			// 2.2 当蛇遇到游戏边界 游戏结束
			// 获取蛇头的坐标
			var maxX = that.map.offsetWidth / that.snake.width;
			var maxY = that.map.offsetHeight / that.snake.height;
			var headX = that.snake.body[0].x;
			var headY = that.snake.body[0].y;
			if(headX < 0 || headX >= maxX) {
				alert('Game Over');
				clearInterval(timerId);
			}
			if(headY < 0 || headY >= maxY) {
				alert('Game Over');
				clearInterval(timerId);
			}
		}, 200)
	}
	
	window.Game = Game;
})()


