google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {

  var button = document.getElementById('change-chart');
  var chartDiv = document.getElementById('chart_div');

  var data = google.visualization.arrayToDataTable([
       ['ユニット', '走行時間', '走行正転', '走行逆転','切換正転','走換正転'],
    ['1', 5, 1.7, 0.5, 0, 0],
    ['2', 1, 0.5, 0, 0, 0],
    ['3', 0.4, 0, 0, 0, 0],
    ['4', 0, 0, 0, 0, 0],
    ['5', 7.9, 2.8, 1.8, 0, 0],
    ['6', 2.2, 0, 0, 0, 0],
    ['7', 7, 1, 3.2, 0, 0],
    ['8', 2.8, 0, 0, 0.5, 0],
    ['9', 2, 0.5, 0, 0, 0.5]
  ]);

  var options = {
    width: 900,
    
    chart: {
      title: '',
      subtitle: ''
    },
    
    axes: {
      y: {
        走行時間: {side: 'left',label: '回数'}, // Left y-axis.
      }
    },
    colors: ['#7F7F7F', '#0000FF', '#4C99BF','#FFCC00','#FF6600'],
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
};