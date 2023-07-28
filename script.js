var sheetId = "552937929";  // Replace with your Sheet ID
var apiKey = "AIzaSyBFEHQpGzSbF36WE8FySkFARJstBczTEiQ";  // Replace with your API Key
var range = "terv 23!L16";  // The range of cells you want to access

var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    var labels = data.values.map(row => row[0]);  // Assuming first column contains labels
    var values = data.values.map(row => row[1]);  // Assuming second column contains values

    var ctx = document.getElementById('chartContainer').getContext('2d');
    new Chart(ctx, {
      type: 'line',  // Change this to the type of chart you want
      data: {
        labels: labels,
        datasets: [{
          label: 'My Dataset',
          data: values,
          backgroundColor: 'rgba(0, 123, 255, 0.5)'
        }]
      },
      options: {
        responsive: true
      }
    });
  });
