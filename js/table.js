// <!--
// File: table.js
// GUI Assignment: hw4
// Caleb Bergen, UMass Lowell Computer Science, caleb_bergen@student.uml.edu
// Copyright (c) 2021 by Bergen. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by CB on November 21, 2021 at 7:23 PM
//
//
// This file contains the functions that generate the multplication table. Also 
// a function to check for errors and a function to find the min of two values
// it also contains code for jquery sliders 
//
// -->

var one;
var two;
var three;
var four;

var x = document.getElementById("errorMSG");
x.style.display = "none";

$( function() {
    $( "#slider1" ).slider({
        max: 50,
        min: -50,
        value: 0,

        stop: function(event, ui){
            one = $("#slider1").slider( "option", "value" );
            one = Math.round(one);
            document.getElementById("num1").value = Number(one);
            updateTable(1);
        }
    });

    $( "#slider2" ).slider({
        max: 50,
        min: -50,
        value: 0,

        stop: function(event, ui){
            two = $("#slider2").slider( "option", "value" );
            two = Math.round(two);
            document.getElementById("num2").value = Number(two);
            updateTable(2);
        }
    });
    $( "#slider3" ).slider({
        max: 50,
        min: -50,
        value: 0,

        stop: function(event, ui){
            three = $("#slider3").slider( "option", "value" );
            three = Math.round(three);
            document.getElementById("num3").value = Number(three);
            updateTable(3);
        }
    });
    $( "#slider4" ).slider({
        max: 50,
        min: -50,
        value: 0,

        stop: function(event, ui){
            four = $("#slider4").slider( "option", "value" );
            four = Math.round(four);
            document.getElementById("num4").value = Number(four);
            updateTable(4);
        }
    });
  } );



function getNums(){
    one = Math.round(document.getElementById("num1").value);
    two = Math.round(document.getElementById("num2").value);
    three = Math.round(document.getElementById("num3").value);
    four = Math.round(document.getElementById("num4").value);
}

function syncInputs(syncNum){
    var temp = Number(syncNum);
    if(temp == 1){
        one = Math.round(document.getElementById("num1").value);
        $( "#slider1" ).slider( "option", "value", Number(one) );
    } else if (temp == 2) {
        two = Math.round(document.getElementById("num2").value);
        $( "#slider2" ).slider( "option", "value", Number(two) );
    } else if (temp == 3) {
        three = Math.round(document.getElementById("num3").value);
        $( "#slider3" ).slider( "option", "value", Number(three) );
    } else if (temp == 4) {
        four = Math.round(document.getElementById("num4").value);
        $( "#slider4" ).slider( "option", "value", Number(four) );
    }
}

function syncSlider(syncNum){
    var temp = Number(syncNum)
    if(temp == 1){
        one = $( "#slider1" ).slider( "option", "value" );
        one = Math.round(one);
        document.getElementById("num1").value = Number(one);
    } else if (temp == 2) {
        two = Math.round(document.getElementById("slider-2").value);
        document.getElementById("num2").value = Number(two);
    } else if (temp == 3) {
        three = Math.round(document.getElementById("slider-3").value);
        document.getElementById("num3").value = Number(three);
    } else if (temp == 4) {
        four = Math.round(document.getElementById("slider-4").value);
        document.getElementById("num4").value = Number(four);
    }
}



// Function returns the min of two arguments so if the user
//put the numbers in the wrong order it is corrected
function findMin(){
    if(Number(arguments[0]) < Number(arguments[1])){
        return arguments[0];
    }
    else{
        return arguments[1];
    }
}

function getParams(){
    var paramStr = "";
    getNums();
    var colStr1 = findMin(one, two);
    paramStr += colStr1;
    if(colStr1 === one){
        paramStr += " * " + two;
    } else {
        paramStr += " * " + one;
    }

    paramStr += " by ";
    var rowStr1 = findMin(three, four);
    paramStr += rowStr1;
    if(rowStr1 === three){
        paramStr += " * " + four;
    } else {
        paramStr += " * " + three;
    }

    return paramStr;
}

//This function dynamiclly generates a multiplcation table and displays it
//On an hthml page
function table() {
    //Checks for errors before creating table
    
    //Vars to hold the 4 user input numbers
    getNums();

    //Sets the range of the table to be generated
    var tableXLimDown = findMin(one, two) - 2;
    var tableYLimDown = findMin(three, four) - 2;
    
    
    var myTableDiv = document.getElementById("table");

    var table = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    //For loop that is generates one axis of the table
    for (var i = 0; i < Math.abs(two - one) + 2; i++) {
        
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        
        tableXLimDown++;
        tableYLimDown = findMin(three, four) - 2;
        //for loop that generates the other axis of the table
        for (var j = 0; j < Math.abs(three - four) + 2; j++) {
            var th = document.createElement('TH');
            var td = document.createElement('TD');
            
        
            tableYLimDown++;
            
            // sets the top left cell to be empty
            if(i == 0 && j == 0){
                th.appendChild(document.createTextNode("  "));
                tr.appendChild(th);
            }
            //Sets an axis
            else if(i == 0){
                th.appendChild(document.createTextNode(tableYLimDown));
                tr.appendChild(th);
            }
            //sets another axis
            else if(j == 0){
                th.appendChild(document.createTextNode(tableXLimDown));
                tr.appendChild(th);
            }
            //Sets the body of the table with correct values
            else {
                td.appendChild(document.createTextNode(tableYLimDown * tableXLimDown));
                tr.appendChild(td);
            }
            
            
            
        }
    }
    //Puts table on page. Deletes table if there is one already there
    if(myTableDiv.hasChildNodes()){
        myTableDiv.removeChild(myTableDiv.firstChild);
        myTableDiv.appendChild(table);
    }
    else{
        myTableDiv.appendChild(table);
    }
    
}


