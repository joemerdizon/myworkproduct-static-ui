var xValues = ["Completed", "Compete", "Alert", "Overdue"];
var yValues = [39.7, 24.1, 6.9, 29.3];
var barColors = ["#00CC66", "#330099", "#FFFF66","#FF0066"];

new Chart("dashboardChart", {
  type: "pie",
//   type: "horizontalBar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: true},
    title: {
      display: false,
      text: "Tasks"
    }
  }
});