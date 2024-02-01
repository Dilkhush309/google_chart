google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {

  var button = document.getElementById('change-chart');
  var chartDiv = document.getElementById('chart_div');

  var data = google.visualization.arrayToDataTable([
       ['時刻', '入出庫'],
    ['0', 1],
    ['1', 3],
    ['2', 0],
    ['3', 0],
    ['4', 0],
    ['5', 0],
    ['6', 0],
    ['7', 6],
    ['8', 8],
    ['9', 7],
    ['10', 9],
    ['11', 10],
    ['12', 15],
    ['13', 13],
    ['14', 12],
    ['15', 8],
    ['16', 13],
    ['17', 8],
    ['18', 5],
    ['19', 7],
    ['20', 5],
    ['21', 6],
    ['22', 5],
    ['23', 9],
  ]);

  var options = {
    width:900,
    chart: {
      title: '',
      subtitle: ''
    },
    series: {
      0: { axis: '入出庫'}
    },
    axes: {
      y: {
        入出庫: {side: 'left',label: '入出庫'}, // Left y-axis.
      }
    },
    colors: [ '#7F7F7F'],
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
};