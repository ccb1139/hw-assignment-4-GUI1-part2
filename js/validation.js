// <!--
// File: table.js
// GUI Assignment: hw4
// Caleb Bergen, UMass Lowell Computer Science, caleb_bergen@student.uml.edu
// Copyright (c) 2021 by Bergen. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by CB on November 21, 2021 at 7:23 PM
//
//
// This file contains uses jqeury to validate input fields for the multpication
// table
// 
//
// -->
$(function(){
    $("#nums").validate({
        rules: {
            num1:{
                required: true,
                max: 50,
                min: -50
            },
            num2:{
                required: true,
                max: 50,
                min: -50
            },
            num3:{
                required: true,
                max: 50,
                min: -50
            },
            num4:{
                required: true,
                max: 50,
                min: -50
            }
        },
        messages: {
            num1:{
                required:  "Please enter the minimum column value",
                max: "Please enter a minimum column value lower than 50",
                min: "Please enter a minimum column value higher than -50"
            },
            num2:{
                required:  "Please enter the maximum column value",
                max: "Please enter a maximum column value lower than 50",
                min: "Please enter a maximum column value higher than -50"
            },
            num3:{
                required:  "Please enter the minimum row value",
                max: "Please enter a minimum row value lower than 50",
                min: "Please enter a minimum row value higher than -50"
            },
            num4:{
                required:  "Please enter the maximum row value",
                max: "Please enter a maximum row value lower than 50",
                min: "Please enter a maximum row value higher than -50"
            },
        },

        errorElement : 'div',
        errorLabelContainer: '#errorMSG',

        submitHandler: function(form) {
            if($("#nums").valid()) {
                table();
                addTableTabs();
            } else {
                return false;
            }
        },
        
    });
});

function updateTable(syncNum){
    if($("#nums").valid()) {
        syncInputs(syncNum);
        table();
    }
}
