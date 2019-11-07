 function func3(){
            var chart3 = new CanvasJS.Chart("chartContainer3", {
animationEnabled: true,
title: {
text: "Attendance According to Host Countries"
},
data: [{
type: "pie",
startAngle: 240,

yValueFormatString: "\"Attendance \"##0.00",
indexLabel: "{label} {y}",
dataPoints: [
]
}]
});
for(var i = 0; i < 10;i++)
chart3.options.data[0].dataPoints.push({y:parseInt(final_match_attendance_array[i]),label:finalMatchHostCountry_array[i]});
chart3.render();

        }
        window.onload = func3();
        var year3 = [];
        var finalMatchHostCountry_array = [];
        var totalGoals_yearwide_array = [];
        var final_match_attendance_array = [];
        var final_match_teamPlayed_array = [];
        //attendence_all_array = [];

        d3.csv("WorldCups.csv", function (error, data) {
            if (error) throw error;
            //console.log(data[Object.keys(obj)[0]]);
            var keys = Object.keys(data);


            for (var i = 0; i < keys.length-1; i++) {
                year3.push(data[keys[i]].Year);
                finalMatchHostCountry_array.push(data[keys[i]].Country);
                totalGoals_yearwide_array.push(data[keys[i]].GoalsScored);
                final_match_teamPlayed_array.push(data[keys[i]].QualifiedTeams);
                final_match_attendance_array.push(data[keys[i]].Attendance);
            }
            console.log(final_match_teamPlayed_array);
            console.log(totalGoals_yearwide_array);
            console.log(year3);
            console.log(final_match_attendance_array);
            console.log(finalMatchHostCountry_array);

        
        });