google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {

  var button = document.getElementById('change-chart');
  var chartDiv = document.getElementById('chart_div');

  var data = google.visualization.arrayToDataTable([
       ['時刻', '入出庫'],
    ['0', 3],
    ['1', 0],
    ['2', 0],
    ['3', 0],
    ['4', 0],
    ['5', 0],
    ['6', 0],
    ['7', 5],
    ['8', 12],
    ['9', 14],
    ['10', 8],
    ['11', 10],
    ['12', 13],
    ['13', 15],
    ['14', 22],
    ['15', 26],
    ['16', 27],
    ['17', 24],
    ['18', 26],
    ['19', 14],
    ['20', 10],
    ['21', 6],
    ['22', 0],
    ['23', 4],
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