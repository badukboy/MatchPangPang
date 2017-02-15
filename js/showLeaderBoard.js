
$.ajax({
    //url: 'https://api.mongolab.com/api/1/databases/mppdb/collections/leaderboard?q={}&apiKey=Hhr-6UhjYSxoysP2-FgTuQavIAfLg2q5',
    url: 'https://api.mongolab.com/api/1/databases/mppdb/collections/leaderboard?s={"score" : -1}&l=10&apiKey=Hhr-6UhjYSxoysP2-FgTuQavIAfLg2q5',

    type: "GET",
    dataType: "json",
    
    success: function(data, textStatus, jqXHR) {
        // since we are using jQuery, you don't need to parse response
        drawTable(data);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#personDataTable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.name + "</td>"));
    row.append($("<td>" + rowData.score + "</td>"));
}

