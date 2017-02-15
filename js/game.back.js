/**
 * Match Pang-Pang
 */
var mainBoard = "#boxes"; //#boxes in css

var counter = 0;
var cardOpened = "";
var imageOpened = "";
var totalScore = 100; // totalScore to be shown 
var correct = 0; // the counter of success, but isn't needed to show on the screen 
var wrong = 0; // the counter of failure, but isn't needed to show on the screen 
//var score = 100; // initial score at the beginning
var time = 10;
var myTimer;

var completeLevelOne = 0;
var completeLevelTwo = 0;
var completeLevelThree = 0;
var completeLevelFour = 0;
/*
var gfxBase = [
    "../gfx/1.png",
    "../gfx/3.png",
    "../gfx/5.png",
    "../gfx/21.png"
];

var gfxBase2 = [
    "../gfx/3.png",
    "../gfx/4.png",
    "../gfx/5.png",
    "../gfx/35.png",
    "../gfx/40.png",
    "../gfx/6.png"
];

var gfxBase3 = [
    "../gfx/7.png",
    "../gfx/8.png",
    "../gfx/9.png",
    "../gfx/10.png",
    "../gfx/11.png",
    "../gfx/40.png",
    "../gfx/30.png",
    "../gfx/12.png"
];
*/

var gfxBase = [], // the address which can store images
    imgCount = 4, // the number of images needed to make
    imgTotalCount = 60, //maximum of images in the folder
    rNum = []; //the valiables by ramdom generator
while (true)
{ //make the random numbers same as the the number of random images 
    //to see only English tiles, 20.png to 49.png
    var num = Math.floor(Math.random() * (imgTotalCount - 40)); //random generator
    if (rNum.indexOf(num) < 0)
    { //save if the random # is not exist in Array 
        rNum.push(num); // save the number 
        gfxBase.push("../gfx/" + (num + 20) + ".png"); //the address of images 
    }
    if (rNum.length >= imgCount) break;
}

var gfxBase2 = [], // the address which can store images
    imgCount = 6, // the number of images needed to make
    imgTotalCount = 60, //maximum of images in the folder
    rNum = []; //the valiables by ramdom generator
while (true)
{ //make the random numbers same as the the number of random images 
    var num = Math.floor(Math.random() * (imgTotalCount - 20)); //random generator
    if (rNum.indexOf(num) < 0)
    { //save if the random # is not exist in Array 
        rNum.push(num); // save the number 
        gfxBase2.push("../gfx/" + num + ".png"); //the address of images 
    }
    if (rNum.length >= imgCount) break;
}

var gfxBase3 = [], // the address which can store images
    imgCount = 8, // the number of images needed to make
    imgTotalCount = 60, //max of images in the folder
    rNum = []; //the valiables for numbers by ramdom generator
while (true)
{ //make the random numbers same as the the number of random images 
    //생성할 이미지의 개수만큼 반복하여 랜덤 번호를 생성. 
    var num = Math.floor(Math.random() * imgTotalCount); //random generator
    if (rNum.indexOf(num) < 0)
    { //save if the random # is not exist in Array 
        rNum.push(num); // save the number 
        gfxBase3.push("../gfx/" + num + ".png"); //the address of images 
    }
    if (rNum.length >= imgCount) break;
}

var gfxBase4 = [], // the address which can store images
    imgCount = 10, // the number of images needed to make
    imgTotalCount = 60, //max of images in the folder
    rNum = []; //the valiables for numbers by ramdom generator
while (true)
{ //make the random numbers same as the the number of random images 
    //생성할 이미지의 개수만큼 반복하여 랜덤 번호를 생성. 
    var num = Math.floor(Math.random() * imgTotalCount); //random generator
    if (rNum.indexOf(num) < 0)
    { //save if the random # is not exist in Array 
        rNum.push(num); // save the number 
        gfxBase4.push("../gfx/" + num + ".png"); //the address of images 
    }
    if (rNum.length >= imgCount) break;
}


/* preload images */
$(gfxBase).each(function()
{
    var image = $('<img />').attr('src', this);
    //$(selector).attr(attribute,value)
});




function timerStop()
{
    //time = 30;
    //$("#time").html("" + time);
    //if( myTimer ) clearInterval(myTimer); 
    clearInterval(myTimer);
    //alert('Time out'); 
}
function timerStart(){
	timerStop();
	myTimer = setInterval(function()
    {
        if (time > 0)
        {
		
            console.log(time);
            time -= 1;
        }
        //document.write(time); 
        $("#time").html("" + time);
        if (time == 0)
        {
            timerStop();
            gameOver("Times Up");
        }
    }, 1000)
}


function showTiles()
{
    $(mainBoard + " div img").show();
}

function hideTiles()
{
    $(mainBoard + " div img").hide();
}


function win()
{
    $("#roundOutcome").empty();
    $("#roundScore").empty();
    $("#pic").empty();
    $("#roundOutcome").prepend('<h1>You Win!</h1>');
    $("#pic").prepend('<span id="pic"><img src="../gfx/trophy.png" alt="image">');
    $("#roundScore").prepend('<span id="roundScore"><h2>Total Score: ' + totalScore + '</h2></span>');
    console.log("win");
   

}

function achievementOne(message)
{
    totalScore += 200;
    $("#gameOverMessage").html('<span><h1>' + message + ' </h1></span>');
    $("#achievement_message").html('<span><h2>Achievement!</h2></span>' + message + " completed with no mistakes. +200");
    $("#achievement_score").html('<span><h3>Total Score: ' + totalScore + '</h3></span>');
    $("#achievement_pic").html('<span><img src="../gfx/achieve.png" alt="image"></span>');

    //$("#achievement_message").prepend('<h2>Achievement!</h2>' + message + " completed with no mistakes.");
    //$("#achievement_score").prepend('<span id="achievement_score"><h3>Total Score:' + totalScore + '</h3></span>');
    //$("#achievement_pic").prepend('<span id="achievement_pic"><img src="../gfx/achieve.png" alt="image">');
    setTimeout(function()
    {
        $('#achievement1').popup('open',
        {
            transition: 'pop'
        });
    }, 200);

}

function achievementTwo(message)
{
    console.log("achieetwo");
    //$("#achievement_message").empty();
    //$("#achievement_score").empty();
    //$("#achievement_pic").empty();
    totalScore += 200;
    $("#gameOverMessage").html('<span><h1>' + message + ' </h1></span>');
    $("#achievement_message").html('<span><h2>Achievement!</h2></span>You Finished ' + message + " in under 20 seconds. +200");
    $("#achievement_score").html('<span><h3>Total Score: ' + totalScore + '</h3></span>');
    $("#achievement_pic").html('<span><img src="../gfx/achieve.png" alt="image"></span>');
    setTimeout(function()
    {
        $('#achievement1').popup('open',
        {
            transition: 'pop'
        });
    }, 100);

}

function achievementThree(message)
    {
        console.log("achieetwo");
        //$("#achievement_message").empty();
        //$("#achievement_score").empty();
        //$("#achievement_pic").empty();
        totalScore += 200;
        $("#gameOverMessage").html('<span><h1>' + message + ' </h1></span>');
        $("#achievement_message").html('<span><h2>Achievement!</h2></span>You have completed 3 levels! +200');
        $("#achievement_score").html('<span><h3>Total Score:' + totalScore + '</h3></span>');
        $("#achievement_pic").html('<span><img src="../gfx/achieve.png" alt="image"></span>');
        setTimeout(function()
        {
            $('#achievement1').popup('open',
            {
                transition: 'pop'
            });
        }, 100);

    }
    /**
    Displays a popup when the game is over.
    **/
function gameOver(message)
{
 	
    if (totalScore < 0)
    {
        totalScore = 0;
    }

    $("#gameOverMessage").html('<span><h1>' + message + ' </h1></span>'); /*chengzhou wang changed .prepend to .html and removed id, so the message bug is fixed*/
    $("#finalScore").html('<span><h2>Final Score: ' + totalScore + '</h2></span>'); /*chengzhou wang changed .prepend to .html and removed id, so the message bug is fixed*/


    setTimeout(function()
    {
        $('#gameOverPopUp').popup('open',
        {
            transition: 'pop'
        });
    }, 10);


    $(document).off('click', '#btnOK');
    $(document).on('click', '#btnOK', function()
    {
        var username = $('#username').val();
        console.log(username);
        $.ajax(
        {
            url: "https://api.mongolab.com/api/1/databases/mppdb/collections/leaderboard?apiKey=Hhr-6UhjYSxoysP2-FgTuQavIAfLg2q5",
            data: JSON.stringify(
            {
                "name": username,
                "score": totalScore
            }),
            type: "POST",
            contentType: "application/json"
        });

        $(':mobile-pagecontainer').pagecontainer('change', '#highscores',
        {

        });

        displayLeaderBoard();

        $(document).on('click', '#playagain', function() {

            $("#gameOverMessage").empty();
            $("#finalScore").empty();
            completeLevelOne = 0;
            completeLevelTwo = 0;
            level_one();
			timerStop();
        });
   
    });
}

function doRandom(max, min)
{
    return Math.round(Math.random() * (max - min) + min);
}

// put images in random order - $ = document.getElementById()
function shuffleImgs()
{   
    //timerStop();
//////////////////////////////////////////////////////////////
    timerStart();
//////////////////////////////////////////////////////////////

    var allImgs = $(mainBoard).children();
    var thisImg = $(mainBoard + " div:first-child");
    var imgsArr = new Array();

    for (var i = 0; i < allImgs.length; i++)
    {
        imgsArr[i] = $("#" + thisImg.attr("id") + " img").attr("src");
        thisImg = thisImg.next();
    }

    thisImg = $(mainBoard + " div:first-child");

    for (var z = 0; z < allImgs.length; z++)
    {
        var rn = doRandom(0, imgsArr.length - 1);

        $("#" + thisImg.attr("id") + " img").attr("src", imgsArr[rn]);
        imgsArr.splice(rn, 1);
        thisImg = thisImg.next();
    }
}

function startAgain()
{
	shuffleImgs();

    $(mainBoard + " div img").hide(); //start again 누르면 다 보이게 됨
    $(mainBoard + " div").css("visibility", "visible");

    //$("#success").remove(); 
    //counter = 0; //counter for clicking, not really need this time. 
    //$("#counter").html("" + counter);

    correct = 0; //reset correct
    $("#correct").html("" + correct); // to put the value into index.html 

    wrong = 0;
    $("#wrong").html("" + wrong);

    totalScore = 20;
    $("#totalScore").html("" + totalScore);

    time = 30;
    $("#time").html("" + time);
	
  console.log("time");
  
    cardOpened = "";
    imageOpened = "";

    return false;
}

function level_one()
{
    timerStop();
    totalScore = 100;
    time = 10;
    $("#totalScore").html("" + totalScore);
    $("#time").html("" + time);
    $("#boxes").empty();

    cardOpened = "";
    imageOpened = "";
    imgFound = 0;
    correct = 0;

    for (var y = 0; y <= 1; y++)
    {
        $.each(gfxBase, function(i, val)
        {
            $(mainBoard).append("<div id=card" + y + i + "><img src=" + val + " />");
        });
    }
    $(mainBoard + " div").click(openCard);

    shuffleImgs();
    setTimeout(showTiles, 200);
    setTimeout(hideTiles, 3000);
    setTimeout(timerStart, 3000);
    /*
    $(mainBoard + " div img").hide();
    $(mainBoard + " div").css("visibility", "visible"); 
    */

    return false;
}


function level_two()
{
    time = 40;
    $("#totalScore").html("" + totalScore);
    $("#time").html("" + time);
    $("#boxes").empty();

    cardOpened = "";
    imageOpened = "";
    imgFound = 0;
    correct = 0;

    for (var y = 0; y <= 1; y++)
    {
        $.each(gfxBase2, function(i, val)
        {
            $(mainBoard).append("<div id=card" + y + i + "><img src=" + val + " />");
        });
    }
    $(mainBoard + " div").click(openCard);

    shuffleImgs();
    setTimeout(showTiles, 200);
    setTimeout(hideTiles, 3000);
    setTimeout(timerStart, 3000);
    /*
    $(mainBoard + " div img").hide();
    $(mainBoard + " div").css("visibility", "visible"); 
    */

    return false;
}


function level_three()
{
    time = 60;
    $("#time").html("" + time);
    $("#boxes").empty();

    cardOpened = "";
    imageOpened = "";
    imgFound = 0;
    correct = 0;

    for (var y = 0; y <= 1; y++)
    {
        $.each(gfxBase3, function(i, val)
        {
            $(mainBoard).append("<div id=card" + y + i + "><img src=" + val + " />");
        });
    }
    $(mainBoard + " div").click(openCard);
    shuffleImgs();
    setTimeout(showTiles, 200);
    setTimeout(hideTiles, 3000);
    setTimeout(timerStart, 3000);

    /*
    $(mainBoard + " div img").hide();
    $(mainBoard + " div").css("visibility", "visible");
    */
    return false;
}

function level_four()
{
    time = 60;
    $("#time").html("" + time);
    $("#boxes").empty();

    cardOpened = "";
    imageOpened = "";
    imgFound = 0;
    correct = 0;

    for (var y = 0; y <= 1; y++)
    {
        $.each(gfxBase4, function(i, val)
        {
            $(mainBoard).append("<div id=card" + y + i + "><img src=" + val + " />");
        });
    }
    $(mainBoard + " div").click(openCard);
    shuffleImgs();
    setTimeout(showTiles, 200);
    setTimeout(hideTiles, 3000);
    setTimeout(timerStart, 3000);

    /*
    $(mainBoard + " div img").hide();
    $(mainBoard + " div").css("visibility", "visible");
    */
    return false;
}


function displayLeaderBoard()
{
    console.log("displayLeaderBoard");

    $("#yourScore").html("<h3>Your Score: " + totalScore + "</h3>");

    $("#personDataTable").empty();
    $.ajax(
    {
        //url: 'https://api.mongolab.com/api/1/databases/mppdb/collections/leaderboard?q={}&apiKey=Hhr-6UhjYSxoysP2-FgTuQavIAfLg2q5',
        url: 'https://api.mongolab.com/api/1/databases/mppdb/collections/leaderboard?s={"score" : -1}&l=10&apiKey=Hhr-6UhjYSxoysP2-FgTuQavIAfLg2q5',

        type: "GET", 
        dataType: "json",

        success: function(data, textStatus, jqXHR)
        {
            drawTable(data);

            function drawTable(data)
            {
                console.log("drawTable");

                for (var i = 0; i < data.length; i++)
                {
                    drawRow(data[i]);
                }
            }

            function drawRow(rowData)
                {
                    console.log("drawDrow");
                    var row = $("<tr />");

                    $("#personDataTable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
                    row.append($("<td>" + rowData.name + "</td>"));
                    row.append($("<td>" + rowData.score + "</td>"));
                }
                // since we are using jQuery, you don't need to parse response
        }
    });

}

function openCard()
{

    var id = $(this).attr("id");

    if ($("#" + id + " img").is(":hidden"))
    {
        $(mainBoard + " div").unbind("click", openCard);
        //$(selector).unbind(event,function,eventObj)

        $("#" + id + " img").slideDown('fast');
        /* Slide-down (show) all hidden <p> elements:
        $("button").click(function(){
        $("p").slideDown();
    }); */
        //$(selector).slideDown(speed,easing,callback)

        if (imageOpened == "")
        {
            cardOpened = id;
            imageOpened = $("#" + id + " img").attr("src");
            setTimeout(function()
            {
                $(mainBoard + " div").bind("click", openCard)
            }, 400);
        }
        else
        {
            current = $("#" + id + " img").attr("src");

            if (imageOpened != current)
            {
                wrong++;
                //wrong--; // if wrong match, subtract
                totalScore -= 20;
                $("#totalScore").html("" + totalScore);
                //numWrong++;
                setTimeout(function()
                {
                    $("#" + id + " img").slideUp('fast');
                    $("#" + cardOpened + " img").slideUp('fast');
                    cardOpened = "";
                    imageOpened = "";
                }, 500);
            }
            else
            {
                $('#FinalPang').get(0).play();
                $("#" + id + " img").parent().css("visibility", "hidden");
                $("#" + cardOpened + " img").parent().css("visibility", "hidden"); //when success, the second card
                correct++; // if correct match, add 
                console.log(correct);
                totalScore += 20;
                $("#totalScore").html("" + totalScore);
                //numCorrect++;
                //$("#correct).html("" + correct); 

                cardOpened = "";
                imageOpened = "";
            }
            //totalScore++;
            setTimeout(function()
            {
                $(mainBoard + " div").bind("click", openCard)
            }, 500);

        }

        if (correct == gfxBase.length && completeLevelOne == 0)
        {
            timerStop();

            //$("#totalScore").prepend('<span id="totalScore">'totalScore'finalScore</span>');
            //$("#totalScore").html("" + totalScore);



            if (wrong == 0)
            {
                achievementOne("Level 1");

                //$(document).off('click', '#continueBtn');
                $(document).on('click', '#achievement_ok', function()
                {
                    console.log("achievement_ok");
                    completeLevelOne = 1;
                    level_two();
                });
            }
            else
            {
                win();

                setTimeout(function()
                {
                    $('#win').popup('open',
                    {
                        transition: 'pop'
                    });
                }, 400);

                //$(document).off('click', '#continueBtn');
                $(document).on('click', '#winContinueBtn', function()
                {
                    console.log("winContinueBtn");
                    completeLevelOne = 1;
                    level_two();
                });
            }

        }
        else if ((correct == gfxBase2.length) && completeLevelOne == 1 && completeLevelTwo == 0)
        {
            timerStop();

            if (time >= 20)
            {
                console.log("time: " + time);
                achievementTwo("Level 2");

                //$(document).off('click', '#continueBtn');
                $(document).on('click', '#achievement_ok', function()
                {
                    console.log("achievement_ok");
                    completeLevelTwo = 1;
                    level_three();
                });
            }

            if (wrong == 0)
            {
                achievementOne("Level 2");

                //$(document).off('click', '#continueBtn');
                $(document).on('click', '#achievement_ok', function()
                {
                    console.log("achievement_ok");
                    completeLevelTwo = 1;
                    level_three();
                });
            }
            else
            {
                win();
                /*
                $("#levelTwoScore").prepend('<span id="levelTwoScore"><h2>Total Score:' + totalScore + '</h2></span>');
                setTimeout(function() {
                    $('#gotolevelthree').popup('open', {
                        transition: 'pop'
                    });
                }, 10);
*/
                setTimeout(function()
                {
                    $('#win').popup('open',
                    {
                        transition: 'pop'
                    });
                }, 400);

                //$(document).off('click', '#continueBtn');
                $(document).on('click', '#winContinueBtn', function()
                {
                    console.log("continuetolevel3Btn");
                    completeLevelTwo = 1;
                    level_three();
                });
            }


        }
        else if ((correct == gfxBase3.length) && completeLevelOne == 1 && completeLevelTwo == 1 && completeLevelThree == 0)
        {
            timerStop();

          {
                achievementThree("Level 3");

                //$(document).off('click', '#continueBtn');
                $(document).on('click', '#achievement_ok', function()
                {
                    console.log("achievement_ok");
                    completeLevelThree = 1;
                    level_four();
                });
   
            }

        }
        else if ((correct == gfxBase4.length) && completeLevelTwo == 1 && completeLevelOne == 1 && completeLevelThree == 1)
        {
            timerStop();
            gameOver("Mission Accomplish!");


        }
        else if (totalScore < 0)
        {
            timerStop();
            gameOver("Out Of Moves");

        }
    }
}

// GO!
$(function()
{

    for (var y = 1; y < 3; y++)
    {
        $.each(gfxBase, function(i, val)
        {
            $(mainBoard).append("<div id=card" + y + i + "><img src=" + val + " />");
        });
    }

    $(mainBoard + " div").click(openCard);

    shuffleImgs();
    setTimeout(showTiles, 200);
    setTimeout(hideTiles, 3000);
    setTimeout(timerStart, 3000);
});