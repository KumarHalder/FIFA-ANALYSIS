function func1(){
                                        var chart2 = new CanvasJS.Chart("chartContainer2", {
                                animationEnabled: true,
                                
                                title:{
                                    text:"Number of Goals by Year"
                                },
                                axisX:{
                                    interval: 1
                                },
                                axisY2:{
                                    interlacedColor: "rgba(1,77,101,.2)",
                                    gridColor: "rgba(1,77,101,.1)",
                                    title: "Number of Goals"
                                },
                                data: [{
                                    type: "bar",
                                    name: "Goals",
                                    axisYType: "secondary",
                                    color: "#014D65",
                            dataPoints: [
                            
                            
                            ]
                            }]
                            });
                            for(var i = 0; i < 20;i++)
                            chart2.options.data[0].dataPoints.push({y:parseInt(totalGoals_yearwide_array2[i]),label:year2[i]});
                            chart2.render();
                            
                                    }
                                    window.onload = func1;
                                    var year2 = [];
                                    var finalMatchHostCountry_array2 = [];
                                    var totalGoals_yearwide_array2 = [];
                                    var final_match_attendance_array2 = [];
                                    var final_match_teamPlayed_array2 = [];
                                    //attendence_all_array = [];
                            
                                    d3.csv("WorldCups.csv", function (error, data) {
                                        if (error) throw error;
                                        //console.log(data[Object.keys(obj)[0]]);
                                        var keys2 = Object.keys(data);
                            
                            
                                        for (var i = 0; i < keys2.length-1; i++) {
                                            year2.push(data[keys2[i]].Year);
                                            finalMatchHostCountry_array2.push(data[keys2[i]].Attendance);
                                            totalGoals_yearwide_array2.push(data[keys2[i]].GoalsScored);
                                            final_match_teamPlayed_array2.push(data[keys2[i]].QualifiedTeams);
                                        }
                                        // console.log(final_match_teamPlayed_array2);
                                        // console.log(totalGoals_yearwide_array2);
                                        // console.log(year22);
                            
                                    
                                    });