var loadingmain = document.getElementsByClassName("loadingmain")[0];
var html = document.getElementsByTagName("html")[0];
var box = document.getElementById("box"); //233盒子
var musicbox = document.getElementById("musicbox"); //音乐盒子
window.addEventListener("load", function() {
	// loadingmain.classList.toggle("loadingmainactive");
	loadingmain.style.animation = "xiaoshi 2s linear 0s 1 normal";
	
	setTimeout(function() {
		loadingmain.remove();
		box.style.display = "flex";
		musicbox.style.display = "flex";
		html.style.overflowX = "hidden";
		html.style.overflowY = "inherit";
	}, 1800);
});

function star() {
	//-50是为了防止页面出现滚动条
	var x = document.documentElement.clientWidth - 50;
	var y = document.documentElement.clientHeight - 50;
	for (var i = 0; i < 45; i++) {
		var spans = document.createElement('span');
		var element = document.getElementById("div2");
		var child = document.getElementById("i2");
		element.insertBefore(spans, child);

		spans.style.left = x * Math.random() + 'px';
		spans.style.top = y * Math.random() + 'px';
		//使星星不同时闪烁
		var randomDelay = Math.random() * 2;
		spans.style.animationDelay = randomDelay + 's';
		//使星星大小不一
		var randomRota = Math.random() * 1.5;
		spans.style.transform = 'scale(' + randomRota + ',' + randomRota + ')';
	}
}
star();

// ------------------------------------------
var music = ["晴天                                周杰伦                     audio/晴天%20-%20周杰伦.mp3   ",
	"Bloom of youth                      RADWIMPS                   audio/Bloom%20of%20Youth.mp3 ",
	"なんでもないや                       Mewhan                     audio/なんでもないや.mp3      ",
]; //歌单  方式：歌名歌手歌位置  
var musicsingcover = ["img/晴天.png", " img/Bloom%20of%20Youth.png", "img/なんでもないや.jpg"]

var singcover = document.querySelector("img.singcover"); //封面
var singername = document.querySelector("p.singername"); //歌手名字
var singname = document.querySelector("p.singname"); //歌名
var lefticon = document.querySelector("svg.lefticon"); //左按键
var righticon = document.querySelector("svg.righticon"); //右按键
var starticon = document.querySelector("svg.starticon"); //开始按键
var pauseicon = document.querySelector("svg.pauseicon"); //暂停按键
var volumeicon = document.querySelector("svg.pauseicon"); //音量键
var musicDom = document.getElementById("musicDom"); //真实播放器
var Slidericon = document.querySelector("input.Slidericon"); //滑块
musicDom.style.display = "none";
musicDom.load();
musicDom.volume = 1;
var num = 0; //数组下标
starticon.onclick = function start() { //播放
	musicDom.play();
	starticon.classList.add("pauseicon");
	pauseicon.classList = " ";
	cycle();
}

pauseicon.onclick = function pause() { //暂停
	musicDom.pause();
	pauseicon.classList.add("pauseicon");
	starticon.classList = " ";
	stopcyle();
}
Slidericon.classList.add("pauseicon"); //隐藏滑块
volumeicon.onmouseover = function() {
	Slidericon.classList.remove("pauseicon"); //显示滑块
}
setInterval(volume, 2000);
// Slidericon.addEventListener("mousemove",volume());
function volume() { //改音量
	var i = 5;
	var i = Slidericon.value;
	musicDom.volume = i / 10;
}



lefticon.onclick = function left() { //左进
	num = (num + 2) % 3;
	musicDom.src = music[num].slice(56, 200);
	singname.innerHTML = music[num].slice(0, 25);
	singername.innerHTML = music[num].slice(26, 55);
	singcover.src = musicsingcover[num];
	musicDom.play();
}

righticon.onclick = function right() { //右进
	num = (num + 1) % 3;
	musicDom.src = music[num].slice(56, 200);
	singname.innerHTML = music[num].slice(0, 25);
	singername.innerHTML = music[num].slice(26, 55);
	singcover.src = musicsingcover[num];
	musicDom.play();

}
// --------------------------------音乐



// --------------------------------------------------------------233娘

var mov = document.getElementById("mov"); //移动icon
var RegionTool = document.getElementById("RegionTool"); //对话框
var open = document.getElementById("open"); //睁眼照片
var close = document.getElementById("close"); //闭眼照片
var img_id = document.getElementById("img_id"); //循环照片
img_id.classList.add("dis"); //循环照片隐藏
var time = setInterval(ope, 4000);

function ope() { //睁眼
	open.classList.add("dis")
	setTimeout(clo, 1000);
}

function clo() { //闭眼
	open.classList.remove("dis");
}

function cycle() { //听音乐
	clearInterval(time);
	close.classList = "dis";
	open.classList = "dis";
	img_id.classList.remove("dis");
	time1 = setInterval(rollImg, 200);
	var i = 1;

	function rollImg() {
		i++;
		if (i === 30) {
			i = 14;
		}
		img_id.src = "233img/" + i + ".png";
	}
	RegionTool.innerHTML = "♪ ♪ ♪";
}


function stopcyle() { //停止听音乐
	clearInterval(time1);
	for (var j = 14; j >= 37; j++) {
		img_id.src = "233img/" + j + ".png";
	}
	img_id.classList.add("dis");
	close.classList.remove("dis");
	open.classList.remove("dis");
	time = setInterval(ope, 4000);
	RegionTool.innerHTML = "刚才的歌好好听(๑• . •๑)";
}

setInterval(Dialogbox, 10000);

function Dialogbox() {
	var time = new Date();
	var hour = time.getHours();
	var txt;
	if (0 <= hour && hour <= 6) {
		txt = "不要熬夜哦";
	}
	if (6 <= hour && hour <= 12) {
		txt = "早上好";
	}
	if (12 < hour && hour <= 18) {
		txt = "下午好";
	}
	if (18 < hour && hour <= 22) {
		txt = "晚上好";
	}
	if (22 < hour && hour <= 24) {
		txt = "该睡觉了";
	}
	console.log(txt);
	var expression = ["‵（*∩_∩*）′", "∩__∩y", "\\*^o^*//", "(๑• . •๑)", "#^_^# ", "\^o^/"]
	var expressionnum = parseInt(Math.random() * 5);
	RegionTool.innerHTML = "" + txt + expression[expressionnum];
}
mov.addEventListener("mousedown", movstart)

function movstart(event) { // 鼠标在拖动条上 按下 可拖动盒子  
	var event = event || window.event;
	event.stopPropagation();
	// 获取鼠标按下时的位置
	var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
	var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
	// 计算鼠标按下的位置 距 盒子的位置
	var spaceX = pageX - mov.offsetLeft;
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
// --------------------------------------------------------------
txtarray = ["上帝为你关上一扇门，然后就去睡觉了。",
	"工作再忙也别忘了买彩票，毕竟你挣一千万比中一千万难多了",
	"直到三十岁才知道，和不同的人说不同的话，表现出不一样的态度，是一种非常可贵的能力，而不是虚伪。",
	"别灰心，人生就是这样起起落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落的。",
	"做个爱笑的人，其实更容易受伤。你总是笑，别人就觉得怎么伤你都没关系",
	"努力了这么久，但凡有点儿天赋，也该有些成功迹象了",
	"凭什么要他人在意你？就凭你想别人在意你吗。",
	"比泪水更令人痛苦的是，无论那颗心是多么绝望悲伤，脸上却依旧不得不挂着灿烂的微笑",
	"许多人说选择北上广的原因，是发展机会好。但他们说的发展，实际上指的就是打工。",
	"人类自以为能做到面面俱到，却在半路上不想努力了",
	"对今天解决不了的事情，请不要着急，因为到明天你还是解决不了！",
	"小时候说到梦想，整晚都不想睡觉。现在说到梦想，只想赶快睡觉。",
	"虽然你矮，但是你胖呀！虽然你胸小，但是你脸大呀！虽然你爱笑，但是你一口大黄牙呀！",
	"哪怕抛掉出身的因素，我觉得你也未必干得过别人",
	"如果你觉得自己，整天累得跟狗一样。你真是误会大了，狗都没有你这么累。",
	"我其实看得蛮开的，我身边的人来来去去，对我而言，构不成一丝的伤害。因为从一开始，我就不认为会有人在我身边。",
	"虽然你学的慢，但是你放弃的快呀。",
	"人生，在迷茫与痛苦中前行，只有坚持最初的自我，才能走向人生的辉煌。",
	"你努力后的成功，不能弥补你成功前的痛苦。",
	"你记住了，没有一个人是只属于你自己的，就算关系够好，不要自作多情，毕竟冰凉不过人心。",
	"光穿破云层，照亮了整片天空，却灰暗了我长久的时光。",
	"幸福就像你身后的影子，你追不到，但是只要你往前走，它就会一直跟着你。",
	"比一个人吃火锅更寂寞的是，一个人没有钱吃火锅。"
];


function text() {
	num = Math.floor(Math.random() * 23);
	txt = txtarray[num];
	typewriter();
}

function typewriter() {
	var cursor = "<span>|</span>";
	var teletype = document.getElementById("teletype");
	var telecopy = "" + txt;
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
setInterval(text, 6000); //打字机





var pointicon = document.getElementsByClassName("pointicon");
var txt = document.getElementsByClassName("txt");
var pointiconpath = document.getElementsByClassName("pointiconpath");
var pointiconpathspan = document.getElementsByClassName("spancover");
var flag0 = true;
var flag1 = true;
var flag2 = true;
var flag3 = true;
var flag4 = true;
var flag5 = true;
pointicon[0].onclick = function() {
	if (flag0) {
		pointiconpath[0].style.fill = "#000000";
		pointiconpathspan[0].style.display = "inline";
		// txt[0].style.fgColor = "#B3B6B7";
		if (txt[0].value) {
			alert("恭喜您完成了一项任务，继续加油！(๑>؂<๑）");
		}
		flag0 = false;
	} else {
		pointiconpath[0].style.fill = "transparent";
		pointiconpathspan[0].style.display = "none";
		// txt.style.fgColor = "#000000";
		flag0 = true;
	}
}
pointicon[1].onclick = function() {
	if (flag1) {
		pointiconpath[1].style.fill = "#000000";
		pointiconpathspan[1].style.display = "inline";
		// txt[1].style.color = "#B3B6B7"
		if (txt[1].value) {
			alert("恭喜您完成了一项任务，继续加油！(๑• . •๑)");
		}
		flag1 = false;
	} else {
		pointiconpath[1].style.fill = "transparent";
		pointiconpathspan[1].style.display = "none";
		// txt[1].style.color = "black";
		flag1 = true;
	}
}
pointicon[2].onclick = function() {
	if (flag2) {
		pointiconpath[2].style.fill = "#000000";
		pointiconpathspan[2].style.display = "inline";
		// txt[2].style.color = "#B3B6B7";
		if (txt[2].value) {
			alert("恭喜您完成了一项任务，继续加油！(๑• . •๑)");
		}
		flag2 = false;
	} else {
		pointiconpath[2].style.fill = "transparent";
		pointiconpathspan[2].style.display = "none";
		// txt[2].style.color = "black";
		flag2 = true;
	}
}
pointicon[3].onclick = function() {
	if (flag3) {
		pointiconpath[3].style.fill = "#000000";
		pointiconpathspan[3].style.display = "inline";
		// txt[3].style.color = "#B3B6B7";
		if (txt[3].value) {
			alert("恭喜您完成了一项任务，继续加油！(๑>؂<๑）");
		}
		flag3 = false;
	} else {
		pointiconpath[3].style.fill = "transparent";
		pointiconpathspan[3].style.display = "none";
		// txt[3].style.color = "black";
		flag3 = true;
	}
}
pointicon[4].onclick = function() {
	if (flag4) {
		pointiconpath[4].style.fill = "#000000";
		pointiconpathspan[4].style.display = "inline";
		// txt[4].style.color = "#B3B6B7";
		if (txt[4].value) {
			alert("恭喜您完成了一项任务，继续加油！(๑>؂<๑）");
		}
		flag4 = false;
	} else {
		pointiconpath[4].style.fill = "transparent";
		pointiconpathspan[4].style.display = "none";
		// txt[4].style.color = "black";
		flag4 = true;
	}
}
pointicon[5].onclick = function() {
	if (flag4) {
		pointiconpath[5].style.fill = "#000000";
		pointiconpathspan[5].style.display = "inline";
		// txt[5].style.color = "#B3B6B7";
		if (txt[5].value) {
			alert("恭喜您完成了一项任务，继续加油！(๑>؂<๑）");
		}
		flag4 = false;
	} else {
		pointiconpath[5].style.fill = "transparent";
		pointiconpathspan[5].style.display = "none";
		// txt[5].style.color = "black";
		flag4 = true;
	}
}




var url = document.querySelectorAll("a.url");
var urlbox = document.querySelectorAll("div.urlbox");
var closebox = document.querySelectorAll("a.closebox");


url[0].onclick = function() {
	urlbox[0].classList.toggle("urlboxactive");
}
url[1].onclick = function() {
	urlbox[1].classList.toggle("urlboxactive");
}
url[2].onclick = function() {
	urlbox[2].classList.toggle("urlboxactive");
}
url[3].onclick = function() {
	urlbox[3].classList.toggle("urlboxactive");
}
closebox[0].onclick = function() {
	urlbox[0].classList.toggle("urlboxactive");
}
closebox[1].onclick = function() {
	urlbox[1].classList.toggle("urlboxactive");
}
closebox[2].onclick = function() {
	urlbox[2].classList.toggle("urlboxactive");
}
closebox[3].onclick = function() {
	urlbox[3].classList.toggle("urlboxactive");
}

var b = document.getElementsByTagName("b")[0];
var btime = new Date().getTime();
var basebtime = new Date("2020-6-4 21:00:00").getTime();
var timeDifference = parseInt((btime - basebtime) / 1000);
var day = parseInt(timeDifference / 86400);
b.innerHTML = "" + day;
