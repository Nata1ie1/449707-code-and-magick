window.renderStatistics = function(ctx, names, times) {
  debugger;
  renderCloud(ctx);
  var maxTime = getMaxTime(times);
  var x = 150;
  for(var i = 0; i < times.length; i++) {
    renderHistogram(ctx, x, maxTime,names[i], times[i]);
    x = x + 90;
  }
}

var renderCloud = function(ctx){
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);
}

function getMaxTime(times){
  var maxTime = times[0];
  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }
  return Math.floor(maxTime);
}

renderHistogram = function(ctx, x, maxTime, name, time){
  var height = getHeight(time, maxTime);
  var width = 40;
  var histogramHeight = 150;
  var y = 250 - height;
  ctx.fillStyle = getRandomColor(name);
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = '#8b00ff';
  ctx.fillText(name, x, 270);
  ctx.fillText(Math.floor(time), x, y - 10);
}

function getHeight(time, maxTime){
  var histogramHeight = 150;
  var height = Math.floor(histogramHeight * time / maxTime);

  return height;
}

var getRandomColor = function(name) {
  if (name != 'Вы'){
   var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  return hue;
} else return 'blue';
}
