google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {

  var button = document.getElementById('change-chart');
  var chartDiv = document.getElementById('chart_div');

  var data = google.visualization.arrayToDataTable([
       ['時刻', '入出庫'],
    ['0', 4],
    ['1', 3],
    ['2', 0],
    ['3', 0],
    ['4', 0],
    ['5', 0],
    ['6', 0],
    ['7', 9],
    ['8', 18],
    ['9', 20],
    ['10', 16],
    ['11', 20],
    ['12', 26],
    ['13', 29],
    ['14', 33],
    ['15', 35],
    ['16', 41],
    ['17', 33],
    ['18', 32],
    ['19', 21],
    ['20', 15],
    ['21', 8],
    ['22', 5],
    ['23', 11],
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