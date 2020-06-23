var wrapper = document.getElementsByClassName("wrapper")[0];
var loadingmain = document.getElementsByClassName("loadingmain")[0];
var html = document.getElementsByTagName("html")[0];
window.addEventListener("load", function() {
	loadingmain.style.animation = "xiaoshi 2s linear 0s 1 normal";
	setTimeout(function() {
		loadingmain.remove();
		wrapper.style.display = "flex";
		html.style.overflowX = "hidden";
		html.style.overflowY = "inherit";
	}, 1800);
	
});


var Input = document.querySelector(".input");
var btn = document.querySelector(".searchbtn");
var ulborad = document.getElementsByClassName("ulborad")[0];
btn.onclick = function() {
	var time = new Date();
	var timetext = parseInt(time.getMonth() + 1) + "/" + time.getDate() + "/" + time.getHours() + ":" + time.getMinutes();
	var headImg = new Array();
	for (var k = 0; k < 11; k++) {
		headImg[k] = k + ".jpg";
	}
	if (Input.value) {
		var uName = new Array(["体弱多病", "极品", "绝世", "重生", "天赋异禀", "家道中落", "逆天", "良田万亩", "身负重任", "废柴", "豪门", "资质平平"],
			["抖M", "抖S", "傲娇", "纯情", "风流", "腹黑", "软萌", "冰山", "霸道", "邪魅"],
			["小狼狗", "大学生", "总裁", "大叔", "小鲜肉", "御姐", "萝莉", "大魔王", "地主", "女王"]);
		var iNum1 = Math.floor(Math.random() * 11 + 1);
		var iNum2 = Math.floor(Math.random() * 9 + 1);
		var iNum3 = Math.floor(Math.random() * 9 + 1);
		var iNum = Math.floor(Math.random() * 10 + 1);
		var uNametext = uName[0][iNum1] + uName[1][iNum2] + uName[2][iNum3];
		var str = ulborad.innerHTML;
		var headStr = "<img src=images/" + headImg[iNum] + ">";
		var userName = "<span class='uname'>" + uNametext + "</span>";
		var chatStr = "<div class='box'>" + Input.value + "</div>";
		var timestr = "<span class='time'>" + timetext + "</span>"
		var currentStr = "<li><div class='active'>" + headStr + timestr + uNametext + chatStr + "</div></li>";
		ulborad.innerHTML = str + currentStr;
		Input.value = "";
	} else {
		alert("内容不要为空哦！")
	}
}
