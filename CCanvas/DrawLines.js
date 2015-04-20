var mousePressed = false;
var lastX, lastY;
var ctx;

function InitThis() {
	ctx = document.getElementById("bbCanvas").getContext("2d");

	$("#bbCanvas").mousedown(function(e){
		mousePressed= true;
		Draw(e.pageX -$(this).offset().left, e.pageY - $(this).offset().top, false);
	});
	$("#bbCanvas").mousemove(function(e){
		if(mousePressed){
			Draw(e.pageX-$(this).offset().left, e.pageY - $(this).offset().top, true);
		}
	});
	$("#bbCanvas").mouseup(function(e){
		mousePressed = false;
	});
	$("#bbCanvas").mouseleave(function(e){
		mousePressed = false;
	});
}

function Draw(x,y, isDown) {
	if(isDown) {
		ctx.beginPath();
		ctx.strokeStyle = $("#selColor").val();
		ctx.lineWidth = $("#selWidth").val();
		ctx.lineJoin ="round";
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(x,y);
		ctx.closePath();
		ctx.stroke();
	}
	lastX =x;
	lastY =y;
}

function clearArea(){
	ctx.setTransform(1,0,0,1,0,0);
	ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}



