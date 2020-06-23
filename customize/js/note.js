var startX, startWidth
startWidth = localStorage.getItem('scalable_width') || getScalableDivWidth()

document.querySelector('.scalable').style.width = startWidth + 'px'

document.querySelector('.separator').addEventListener('mousedown', startDrag)

function startDrag(e) {
	startX = e.clientX
	startWidth = getScalableDivWidth()

	document.documentElement.addEventListener('mousemove', onDrag)
	document.documentElement.addEventListener('mouseup', stopDrag)
}

function onDrag(e) {
	let newWidth = startWidth + e.clientX - startX
	document.querySelector('.scalable').style.width = newWidth + 'px'
}

function stopDrag(e) {
	localStorage.setItem('scalable_width', getScalableDivWidth())
	document.documentElement.removeEventListener('mousemove', onDrag)
	document.documentElement.removeEventListener('mouseup', stopDrag)
}

function getScalableDivWidth() {
	return parseInt(window.getComputedStyle(document.querySelector('.scalable')).width, 10)
}

var javakey = document.querySelectorAll("p")[0];
var Frontkey = document.querySelectorAll("p")[1];
var PHPkey = document.querySelectorAll("p")[2];
var mysqlkey = document.querySelectorAll("p")[3];
var Tutorialkey = document.querySelectorAll("p")[4];
var Englishkey = document.querySelectorAll("p")[5];
var javapage = document.querySelector("div.javamain");
var Frontpage = document.querySelector("div.frontendmain");
var PHPpage = document.querySelector(".PHPmain");
var mysqlpage = document.querySelector(".mysqlmain");
var Tutorialpage = document.querySelector(".Tutorialmain");
var Englishpage = document.querySelector(".Englishmain");
javakey.onclick = function() {
	javapage.style.display = "inline-block";
	Frontpage.style.display = "none";
	PHPpage.style.display = "none";
	mysqlpage.style.display = "none";
	Tutorialpage.style.display = "none";
	Englishpage.style.display = "none";
}
Frontkey.onclick = function() {
	javapage.style.display = "none";
	Frontpage.style.display = "inline-block";
	PHPpage.style.display = "none";
	mysqlpage.style.display = "none";
	Tutorialpage.style.display = "none";
	Englishpage.style.display = "none";
}
PHPkey.onclick = function() {
	javapage.style.display = "none";
	Frontpage.style.display = "none";
	PHPpage.style.display = "inline-block";
	mysqlpage.style.display = "none";
	Tutorialpage.style.display = "none";
	Englishpage.style.display = "none";
	box0.classList.toggle("boxactive");
}
mysqlkey.onclick = function() {
	javapage.style.display = "none";
	Frontpage.style.display = "none";
	PHPpage.style.display = "none";
	mysqlpage.style.display = "inline-block";
	Tutorialpage.style.display = "none";
	Englishpage.style.display = "none";
	box1.classList.toggle("boxactive");
}
Tutorialkey.onclick = function() {
	javapage.style.display = "none";
	Frontpage.style.display = "none";
	PHPpage.style.display = "none";
	mysqlpage.style.display = "none";
	Tutorialpage.style.display = "inline-block";
	Englishpage.style.display = "none";
	box2.classList.toggle("boxactive");
}
Englishkey.onclick = function() {
	javapage.style.display = "none";
	Frontpage.style.display = "none";
	PHPpage.style.display = "none";
	mysqlpage.style.display = "none";
	Tutorialpage.style.display = "none";
	Englishpage.style.display = "inline-block";
}

var box0 = document.querySelectorAll("div.box")[0];
var box1 = document.querySelectorAll("div.box")[1];
var box2 = document.querySelectorAll("div.box")[2];
// var box3 = document.querySelectorAll("div.box")[3];
// var box4 = document.querySelectorAll("div.box")[4];
// var box5 = document.querySelectorAll("div.box")[5];
var a0 = document.querySelectorAll("a")[0];
var a1 = document.querySelectorAll("a")[1];
var a2 = document.querySelectorAll("a")[2];
// var a3 = document.querySelectorAll("a")[3];
// var a4 = document.querySelectorAll("a")[4];
// var a5 = document.querySelectorAll("a")[5];

a0.onclick = function() {
	box0.classList.toggle("boxactive");
}
a1.onclick = function() {
	box1.classList.toggle("boxactive");
}
a2.onclick = function() {
	box2.classList.toggle("boxactive");
}
// a3.onclick = function() {
// 	box3.classList.toggle("boxactive");
// }
// a4.onclick = function() {
// 	box4.classList.toggle("boxactive");
// }

// a5.onclick = function() {
// 	box5.classList.toggle("boxactive");
// }




$(document).ready(function() {
	$("#menu1").click(function() {
		$("div.path1").show(800);
		$("div.path2").show(1000);
		$("div.path3").show(1200);
		$("div.path4").show(1500);

	})
	$("#menu1").dblclick(function() {
		$("div.path1").hide(1500);
		$("div.path2").hide(1200);
		$("div.path3").hide(1000);
		$("div.path4").hide(800);
	})
});

var box = document.querySelector("#menu1");
var drop = document.querySelector(".menu");
drop.onmousedown = function(event) { // 鼠标在拖动条上 按下 可拖动盒子  
	var event = event || window.event;
	// 获取鼠标按下时的位置
	var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
	var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
	// 计算鼠标按下的位置 距 盒子的位置
	var spaceX = pageX - box.offsetLeft;
	var spaceY = pageY - box.offsetTop;
	document.onmousemove = function(event) { // 鼠标移动的时候 获取鼠标的位置 整个盒子跟着鼠标的位置走
		var event = event || window.event;
		// 获取移动后鼠标的位置
		var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
		var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
		// 计算并设置盒子移动后的位置
		box.style.left = pageX - spaceX + 'px';
		box.style.top = pageY - spaceY + 'px';
		// 清理鼠标拖动时，选中拖动条中文字的情况
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
	};
};
document.onmouseup = function() { // 释放鼠标按键时  取消盒子的移动 
	document.onmousemove = null;
};
