 function func4(){
            var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Crude Oil Reserves vs Production, 2016"
	},	
	axisY: {
		title: "Billions of Barrels",
		titleFontColor: "#4F81BC",
		lineColor: "#4F81BC",
		labelFontColor: "#4F81BC",
		tickColor: "#4F81BC"
	},
	axisY2: {
		title: "Millions of Barrels/day",
		titleFontColor: "#C0504E",
		lineColor: "#C0504E",
		labelFontColor: "#C0504E",
		tickColor: "#C0504E"
	},	
	toolTip: {
		shared: true
	},
	legend: {
		cursor:"pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "column",
		name: "Proven Oil Reserves (bn)",
		legendText: "Proven Oil Reserves",
		showInLegend: true, 
		dataPoints:[


		]
	},
	{
		type: "column",	
		name: "Oil Production (million/day)",
		legendText: "Oil Production",
		axisYType: "secondary",
		showInLegend: true,
		dataPoints:[


		]
	}]
});

for(var i = 0; i < 20;i++){
chart.options.data[0].dataPoints.push({y:50,label:year[i]});
chart.options.data[1].dataPoints.push({y:50,label:year[i]});
}
chart.render();

function toggleDataSeries(e) {
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart.render();
}

        }
        window.onload = func4;
        var year = [];
        var winners = [];
        var runnersUp = []
        var tempCity = "";
        var count = 0;
        //attendence_all_array = [];

        d3.csv("http://127.0.0.1:8080/WorldCups.csv", function (error, data) {
            if (error) throw error;
            //console.log(data[Object.keys(obj)[0]]);
            var keys = Object.keys(data);


            for (var i = 0; i < keys.length-1; i++) {
              year.push(data[keys[i]].Year);
               winners.push(data[keys[i]].Winner);
               runnersUp.push(data[keys[i]].RunnersUp);
            }
            
            console.log(year);
            console.log(winners);
            console.log(runnersUp);
            

        
        });
        