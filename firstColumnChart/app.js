google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {

  var button = document.getElementById('change-chart');
  var chartDiv = document.getElementById('chart_div');

  var data = google.visualization.arrayToDataTable([
       ['ユニット', '走行時間', '走行正転', '走行逆転','切換正転','走換正転'],
    ['1', 290, 896, 913, 194, 225],
    ['2', 55, 298, 156, 168, 181],
    ['3', 23, 124, 77, 66, 69],
    ['4', 0, 0, 0, 0, 0],
    ['5', 437, 1800, 1911, 561, 576],
    ['6', 118, 530, 321, 299, 307],
    ['7', 398, 1188, 1378, 564, 571],
    ['8', 151, 562, 598, 383, 393],
    ['9', 100, 370, 373, 264, 276]
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
    colors: ['#7F7F7F', '#0000FF', '#4C99BF','#FFCC00','#FF6600'],
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
};