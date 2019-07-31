let itog = 0;

function total(value) {
    $("#my-progress-bar").width(value+"%");
  }

function sumValue(percent) {
	itog = itog + percent;
	total(itog);
}

function init() {
	total(itog);
	$('#1p').click(function() {
		sumValue(1);
	});
	$('#3p').click(function() {
		sumValue(3);
	});
	$('#7p').click(function() {
		sumValue(7);
	});
}

$(document).ready(init);