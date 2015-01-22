canciones = [];
artistas = [];
PlayCounts = [];
duracion = [];
image = [];

OrderList = [];
OrderDuration = [];
OrderPlayCount = [];


/* ingressos */
$(document).ready(function() {
$("[data-toggle=popover]")
.popover({html:true})
});
jQuery(document).ready(function($) {
$.ajax({
url : "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=87a5b09be55cddbf22c3552c6ac0068c&format=json",
dataType : "jsonp",
success : function(parsed_json) {
for (var i = 0; i <= 50; i++) {

	OrderList.push(parsed_json["tracks"]["track"][i]["name"])
	OrderDuration.push(parsed_json["tracks"]["track"][i]["duration"])
	OrderPlayCount.push(parsed_json["tracks"]["track"][i]["playcount"])

	canciones.push(parsed_json['tracks']['track'][i]['name'])
	artistas.push(parsed_json['tracks']['track'][i]['artist']['name'])
	duracion.push(parsed_json["tracks"]["track"][i]["duration"])
	PlayCounts.push(parsed_json["tracks"]["track"][i]["playcount"])
	
		$(".datos").append(
			"<div class = 'row-fluid'>"+
				"<div class ='col-md-12'>"+

				"<div class='row-fluid'>"+
					"<div class='col-md-2'>"+
						"<br/>"+
						"<h2>"+
							(i+1)+
								"</h2>" +
									"</div>"+

			"<div class='col-md-2'>"+
				"<br/>"+
				"<br/>"+
					canciones[i]+
						"</div>"+

			"<div class='col-md-2'>"+
				"<br/>"+
				"<br/>"+
					artistas[i]+
						"</div>"+

			"<div class = 'col-md-2'>"+
				"<br/>"+
				"<br/>"+
					PlayCounts[i]+
						"</div>"+

			"<div class = 'col-md-2'>"+
				"<br/>"+
				"<br/>"+
					(duracion[i]/60).toFixed(2)+
				"</div>"+
				"</div>"
				);
	};
}
});
});

$(document).ready(function() {
	function orden1(a,b) {
	var A = a.toLowerCase();
	var B = b.toLowerCase();
	if (A < B) {
		return -1;
	} else if (A > B) {
		return 1;
	} else {
		return 0;
	}
};

function orden2(a,b) {
	var A = a.toLowerCase();
	var B = b.toLowerCase();
	if (A > B) {
		return -1;
	} else if (A < B) {
		return 1;
	} else {
		return 0;
	}
};

function order(a,b) {
	a = a/60
	b = b/60
	if (a<b) {return 1}else{return 0};
};

$(".top").click(function() {
	$(".datos").empty();
	OrderList.sort(orden1);
	for (var i = 0; i <50; i++) {

		$(".datos").append(
			"<div class = 'row-fluid'>"+
				"<div class ='col-md-12'>"+

				"<div class = 'row-fluid'>"+
					"<div class ='col-md-2'>"+
						"<br/>"+
						"<h2>"+
							(i+1)+
								"</h2>" +
									"</div>"+

			"<div class ='col-md-2'>"+
				"<br/>"+
				"<br/>"+
					canciones[i]+
						"</div>"+

			"<div class ='col-md-2'>"+
				"<br/>"+
				"<br/>"+
				artistas[i]+
					"</div>"+

			"<div class ='col-md-2'>"+
				"<br/>"+
				"<br/>"+
				PlayCounts[i]+
					"</div>"+

			"<div class ='col-md-2'>"+
				"<br/>"+
				"<br/>"+
					(duracion[i]/60).toFixed(2)+
				"</div>"+
				"</div>"
				);
	};
});

$(".orden1").click(function() {
	$(".datos").empty();
	OrderList.sort(orden1);
	for (var x = 0; x <50; x++) {
		for (var i = 0; i <50; i++) {
			if (OrderList[x] === canciones[i]) {

				$(".datos").append(
					"<div class = 'row-fluid'>"+
						"<div class ='col-md-12'>"+

						"<div class = 'row-fluid'>"+
							"<div class ='col-md-2'>"+
								"<br/>"+
								"<h2>"+
									(i+1)+
										"</h2>" +
											"</div>"+

					"<div class ='col-md-2'>"+
						"<br/>"+
						"<br/>"+
							canciones[i]+
								"</div>"+

					"<div class ='col-md-2'>"+
						"<br/>"+
						"<br/>"+
						artistas[i]+
							"</div>"+

					"<div class ='col-md-2'>"+
						"<br/>"+
						"<br/>"+
						PlayCounts[i]+
							"</div>"+

					"<div class ='col-md-2'>"+
						"<br/>"+
						"<br/>"+
							(duracion[i]/60).toFixed(2)+
						"</div>"+
						"</div>"
						);
			};
		};
	};
});

$(".orden2").click(function() {
	$(".datos").empty()
	OrderList.sort(orden2);
		for (var x = 0; x <50; x++) {
			for (var i = 0; i <50; i++) {
				if (OrderList[x] === canciones[i]) {

					$(".datos").append(
						"<div class = 'row-fluid'>"+
							"<div class ='col-md-12'>"+

							"<div class = 'row-fluid'>"+
								"<div class ='col-md-2'>"+
									"<br/>"+
									"<h2>"+
										(i+1)+
											"</h2>" +
												"</div>"+

						"<div class ='col-md-2'>"+
							"<br/>"+
							"<br/>"+
								canciones[i]+
									"</div>"+

						"<div class ='col-md-2'>"+
							"<br/>"+
							"<br/>"+
							artistas[i]+
								"</div>"+

						"<div class ='col-md-2'>"+
							"<br/>"+
							"<br/>"+
							PlayCounts[i]+
								"</div>"+

						"<div class ='col-md-2'>"+
							"<br/>"+
							"<br/>"+
								(duracion[i]/60).toFixed(2)+
							"</div>"+
							"</div>"
							);
				};
			};
		};
});

$(".durationTrack").click(function() {
	$(".datos").empty();
	OrderDuration.sort(order);
	for (var x = 0; x <50; x++) {
		for (var i = 0; i <50; i++) {
if (OrderDuration[x] === duracion[i]) {

	$(".datos").append(
		"<div class = 'row-fluid'>"+
			"<div class ='col-md-12'>"+

			"<div class = 'row-fluid'>"+
				"<div class ='col-md-2'>"+
					"<br/>"+
					"<h2>"+
						(i+1)+
							"</h2>" +
								"</div>"+

		"<div class ='col-md-2'>"+
			"<br/>"+
			"<br/>"+
				canciones[i]+
					"</div>"+

		"<div class ='col-md-2'>"+
			"<br/>"+
			"<br/>"+
			artistas[i]+
				"</div>"+

		"<div class ='col-md-2'>"+
			"<br/>"+
			"<br/>"+
			PlayCounts[i]+
				"</div>"+

		"<div class ='col-md-2'>"+
			"<br/>"+
			"<br/>"+
				(duracion[i]/60).toFixed(2)+
			"</div>"+
			"</div>"
			);
};
};
};
});

$(".playcounts").click(function(){
	$(".datos").empty();
	OrderPlayCount.sort(order);
	for (var x = 0; x <50; x++) {
		for (var i = 0; i <50; i++) {
			if (OrderPlayCount[x] === PlayCounts[i]) {

				$(".datos").append(	
					"<div class = 'row-fluid'>"+
						"<div class ='col-md-12'>"+

						"<div class = 'row-fluid'>"+
							"<div class ='col-md-2'>"+
								"<br/>"+
								"<h2>"+
									(i+1)+
										"</h2>" +
											"</div>"+

					"<div class ='col-md-2'>"+
						"<br/>"+
						"<br/>"+
							canciones[i]+
								"</div>"+

					"<div class ='col-md-2'>"+
					"<br/>"+
					"<br/>"+
						artistas[i]+
							"</div>"+

					"<div class ='col-md-2'>"+
					"<br/>"+
					"<br/>"+
						PlayCounts[i]+
							"</div>"+

					"<div class ='col-md-2'>"+
						"<br/>"+
						"<br/>"+
							(duracion[i]/60).toFixed(2)+
						"</div>"+
						"</div>"
						);
			};
		};
	};
});
});


























