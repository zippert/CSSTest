var startTime = new Date;

function startTimer() {
	var date = new Date();
	var diffHour = date.getHours() - startTime.getHours();
	var diffMinute = date.getMinutes() - startTime.getMinutes();
	var diffSeconds = date.getSeconds() - startTime.getSeconds();
	var secDiff = diffSeconds + diffMinute * 60 + diffHour * 3600;
	if(secDiff > 59){
		var sec = secDiff%60;
		document.getElementById('main').innerHTML = diffMinute + " minutes and " + sec + " seconds";
	} else{
		document.getElementById('main').innerHTML = secDiff + " seconds";	
	}
	
	setTimeout('startTimer()', 500);
}
