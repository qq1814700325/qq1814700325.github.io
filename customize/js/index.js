var wrapper = document.getElementsByClassName("wrapper")[0];
var html = document.getElementsByTagName("html")[0];
window.addEventListener("load", function() {
	setTimeout(function() {
		wrapper.style.animation = " ";
		wrapper.style.display = "none";
		html.style.overflowX = "hidden";
		html.style.overflowY = "inherit";
	}, 2600);

});





function typewriter() {
	var cursor = "<span>|</span>";
	var teletype = document.getElementById("teletype");
	var telecopy = "(广告位)这是青青子衿的个人小站(๑>؂<๑） 欢迎关注微信公众号->一个小衿";
	var counter = 0;
	teletype.innerHTML = cursor;
	teletype.removeAttribute("hidden");
	var timer = setInterval(function() {
		teletype.innerHTML = telecopy.substr(0, counter) + cursor;
		counter++;
		if (counter === telecopy.length + 1) {
			clearInterval(timer);
		}
	}, 100);
};
setInterval(typewriter, 5000);
// ----------------------------------

var Advertising1 = document.querySelector(".Advertising1");
var Advertising = document.getElementById("Advertising");
Advertising.onmouseover = function() {
	Advertising1.style.display = "inline";
}
Advertising.onmouseout = function() {
	Advertising1.style.display = "none";
}
// var Collecticon = document.querySelector("svg.Collecticon");
// Collecticon.ondblclick = function (){
// 	Collecticon.style.fill = "#03A9F4";
// }
var Advertising2 = document.querySelector(".Advertising2");
window.onscroll = function() {
	var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
	if (scrollY > 500) {
		Advertising2.style.display = 'block';
	} else {
		Advertising2.style.display = 'none';
	}
};

Advertising2.onclick = function() {
	var scrollY = document.documentElement.scrollTop;
	step = Math.floor(-scrollY / 30);
	timer = setInterval(function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var ispeed = Math.floor(-scrollTop / 6);
		console.log(ispeed)
		if (scrollTop == 0) {
			clearInterval(timer);
		}
		document.documentElement.scrollTop = document.body.scrollTop = scrollTop + step;
	}, 30)
};














// ------------------------------------------------------------
var crsbarrollitem = document.getElementsByClassName("crs-bar-roll-item");
setInterval(cycle, 2000);

function cycle() {

}




let svg_width = document.querySelector("#chart").viewBox.baseVal.width;
console.log(svg_width);
let name = document.createElementNS("http://www.w3.org/2000/svg", "text");
name.setAttribute("text-anchor", "middle");
name.setAttribute('alignment-baseline', 'middle')
name.setAttribute('x', svg_width / 2)
name.setAttribute('y', 6)
name.classList.add('name')
name.appendChild(document.createTextNode("Study planning"));
document.querySelector('#chart').appendChild(name);
var Technicalname = ["html", "CSS", 'Bootstrap', "javascript", 'vue.js', 'PHP', 'mysql', 'java', 'Node.js'];
var timenum = [60, 20, 30, 60, 70, 60, 60, 80, 80];
for (var i = 0; i < Technicalname.length; i++) {
	let start_x = 12;
	let caption = document.createElementNS("http://www.w3.org/2000/svg", "text");
	caption.setAttribute("text-anchor", "middle");
	caption.setAttribute('alignment-baseline', 'middle');
	caption.setAttribute('x', start_x + 22 * i);
	caption.setAttribute('y', 96);
	caption.classList.add('caption');
	caption.appendChild(document.createTextNode(Technicalname[i]));
	document.querySelector('#chart').appendChild(caption);

	let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	circle.setAttribute('cx', start_x + 22 * i);
	circle.setAttribute('cy', timenum[i]);
	circle.setAttribute('r', 3);
	circle.setAttribute('stroke', ' #9F3AF0')
	circle.setAttribute('stroke-width', 2)
	circle.setAttribute('fill', '#ffffff')
	circle.setAttribute('transform-origin', `${start_x + 22*i } ${timenum[i]}`)
	document.querySelector('#path-container').appendChild(circle);

	let value = document.createElementNS('http://www.w3.org/2000/svg', 'text')
	value.setAttribute('text-anchor', 'middle')
	value.setAttribute('alignment-baseline', 'middle')

	value.setAttribute('x', start_x + 22 * i)
	value.setAttribute('y', timenum[i])
	value.classList.add('values')
	circle.setAttribute('transform-origin', `${start_x + 22*i } ${timenum[i]}`)
	value.setAttribute('transform', `translate(0, ${timenum[i] * 2 - 6}) scale(1, -1)`)
	value.appendChild(document.createTextNode(timenum[i]+" days"))
	document.querySelector('#path-container').appendChild(value)
}
let line = document.querySelector('#line')
let strokeLength = Math.ceil(line.getTotalLength())
document.querySelector('#chart').style.setProperty('--stroke-length', strokeLength)
document.querySelector('#chart').classList.add('animate')
