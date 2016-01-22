// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {
    'packages': ['corechart']
});
// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);
google.setOnLoadCallback(drawBasic);
google.setOnLoadCallback(drawBar);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Act');
    data.addColumn('number', 'Percentage');
    data.addRows([
          ['Recycling', 3],
          ['Waste', 1]
        ]);

    // Set chart options
    var options = {
        legend: 'none',
        slices: {
            0: {
                color: '#1a4b5a'
            },
            1: {
                color: '#94b554'
            }
        },
        backgroundColor: 'none',
        is3D: true,
        pieStartAngle: 80
    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Year');
    data.addColumn('number', 'MSW Recycling Rates');

    data.addRows([
        [1960, 6.4], [1965, 6.2], [1970, 6.6], [1975, 7.3], [1980, 9.6], [1985, 10.1],
        [1990, 16.0], [1995, 25.7], [2000, 28.5], [2005, 31.4], [2010, 34], [2012, 34.5]
      ]);

    var options = {
        legend: 'none',
        hAxis: {
            title: 'Year',
            format: '####'
        },
        vAxis: {
            title: 'Percent Recycling'
        },
        backgroundColor: 'none',
        pointSize: 6,
        lineWidth: 4,
        colors: ['#3c6d0b']
    };

    var chart = new google.visualization.LineChart(document.getElementById('recycling_rates'));

    chart.draw(data, options);
}

function drawBar() {

    var data = google.visualization.arrayToDataTable([
          ['Country', 'Rate'],
          ['Germany', 33],
          ['United States', 24],
          ['South Korea', 49],
          ['Canada', 27],
          ['France', 16],
          ['Sweden', 34],
        ['Switzerland', 34],
        ['Ireland', 34],
        ['Norway', 34],
        ['Belgium', 31],
        ['Australia', 30],
        ['Finland', 30],
        ['Austria', 27],
        ['Denmark', 26],
        ['Netherlands', 25],
        ['Luxembourg', 23],
        ['UK', 17],
        ['Japan', 17],
        ['Iceland', 16],
        ['New Zealand', 15],
        ['Spain', 9],
        ['Portugal', 9],
        ['Greece', 8],
        ['Poland', 4],
        ['Mexico', 3],
        ['Hungary', 3],
        ['Czech Republic', 1],
        ['Slovakia', 1],
        ]);

    var options = {
        colorAxis: {
            colors: ['#5fbe14', '#158cb7']
        },
        backgroundColor: 'none',
        datalessRegionColor: '#d0d0d0',
    };

    var chart = new google.visualization.GeoChart(document.getElementById('bar_rates'));

    chart.draw(data, options);
}
