google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {

  var button = document.getElementById('change-chart');
  var chartDiv = document.getElementById('chart_div');

  var data = google.visualization.arrayToDataTable([
       ['暗証番号', '入出庫'],
    ['0189', 4],
    ['0270', 3],
    ['0361', 0],
    ['1452', 0],
    ['1543', 0],
    ['2634', 0],
    ['2725', 0],
    ['3816', 9],
    ['3907', 18],
    ['4098', 20],
    ['4189', 16],
    ['4270', 20],
    ['5361', 26],
    ['5452', 29],
    ['6543', 33],
    ['6634', 35],
    ['6725', 41],
    ['7816', 33],
    ['7907', 32],
    ['8098', 21],
    ['8189', 15],
    ['8270', 8],
    ['9361', 5],
    ['9452', 11],
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