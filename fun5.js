function func5(){
                            var chart5 = new CanvasJS.Chart("chartContainer5", {
                            animationEnabled: true,
                            title:{
                                text: "World Cup Finals"
                            },	
                            axisY: {
                                title: "Percentage to reach Final",
                                titleFontColor: "#4F81BC",
                                lineColor: "#4F81BC",
                                labelFontColor: "#4F81BC",
                                tickColor: "#4F81BC"
                            },
                            axisY2: {
                                title: "Goal Scored",
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
                                name: "Percentage to reach final",
                                legendText: "Percentage to reach Final",
                                showInLegend: true, 
                                dataPoints:[
                        
                        
                                ]
                            },
                            {
                                type: "column",	
                                name: "Goal Scored ",
                                legendText: "Goal Scored",
                                axisYType: "secondary",
                                showInLegend: true,
                                dataPoints:[
                        
                        
                                ]
                            }]
                        });
                        
                        for(var i = 0; i < 12;i++){
                        chart5.options.data[0].dataPoints.push({y:parseInt(percentage5[i]),label:country5[i]});
                        chart5.options.data[1].dataPoints.push({y:parseInt(goalScored5[i]),label:country5[i]});
                        }
                        chart5.render();
                        
                        function toggleDataSeries(e) {
                            if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                                e.dataSeries.visible = false;
                            }
                            else {
                                e.dataSeries.visible = true;
                            }
                            chart5.render();
                        }
                        
                                }
                                window.onload = func5;
                                var country5 = [];
                                var percentage5 = [];
                                var goalScored5 = [];
                         
                                //attendence_all_array = [];
                        
                                d3.csv("Test.csv", function (error, data) {
                                    if (error) throw error;
                                    //console.log(data[Object.keys(obj)[0]]);
                                    var keys = Object.keys(data);
                        
                        
                                    for (var i = 0; i < keys.length-1; i++) {
                                      country5.push(data[keys[i]].Country);
                                       percentage5.push(data[keys[i]].Percentage);
                                       goalScored5.push(data[keys[i]].GoalScored);
                                    }
                                    
                                    // console.log(country5);
                                    // console.log(percentage);
                                    // console.log(goalScored);
                                    
                        
                                
                                });