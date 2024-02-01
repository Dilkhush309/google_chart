google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {

  var button = document.getElementById('change-chart');
  var chartDiv = document.getElementById('chart_div');

  var data = google.visualization.arrayToDataTable([
       ['ユニット', '走行時間', '走行正転', '走行逆転','切換正転'],
    ['1', 896, 913, 0, 0],
    ['2', 298, 156, 0, 0],
    ['3', 124, 77, 0, 0],
    ['4', 0, 200, 0, 0],
    ['5', 0, 0, 561, 576],
    ['6', 0, 0, 299, 307],
    ['7', 0, 0, 564, 571],
    ['8', 0, 0, 383, 393]
  ]);

  var options = {
    width: 900,
    height: 2000,
    chart: {
      title: '',
      subtitle: ''
    },
    series: {
      1: { axis: '走行時間'},
      1: { axis: '走行時間'}
    },
    axes: {
      y: {
        走行時間: {side: 'left',label: '回数'}, // Left y-axis.
        走行時間: {side: 'right', label: '走行時間（分）'} // Right y-axis.
      }
    },
    colors: [ '#7F7F7F', '#00B050','#FFCC00','#FF6600'],
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
};