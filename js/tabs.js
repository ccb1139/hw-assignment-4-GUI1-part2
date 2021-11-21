// <!--
// File: tabs.js
// GUI Assignment: hw4
// Caleb Bergen, UMass Lowell Computer Science, caleb_bergen@student.uml.edu
// Copyright (c) 2021 by Bergen. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by CB on November 21, 2021 at 7:23 PM
//
//
// This file contains the functions that save a multiplication table into jquery 
// tabs. The tabs can be closed dynamiclly and multiple can be closed at at time
//
// -->
$(function() {
    $( "#tabs" ).tabs({
        collapsible: true
    });
 });

var num_tabs = 0;
var active_tabs = [];
function addTableTabs(){
    num_tabs += 1;

    $("#tabs ul").append("<li><a href='#tab" + num_tabs + "'>" + getParams() + "</a>"  + 
    " <input type='checkbox' value=1 id='cb"+ num_tabs + "'>" + "</li>");
    $("#tabs").append("<div id='tab" + num_tabs + "'>" + "</div>");
    $("#table").clone().appendTo("#tab" + num_tabs);
    $("#tabs").tabs("refresh");
    active_tabs.push(num_tabs)
}

function closeTabs(){
    for(let i = 0; i < Number(num_tabs); i++){
        var index = Number(i) + 1;
        var cbIdStr = "#cb" + index;
        var tabIdStr = "#tab" + index;
        if(active_tabs[Number(index - 1)] != -1){
            if(document.querySelector(cbIdStr).checked){
                $('#tab'+ index).remove();
                var hrefStr = "a[href='" + tabIdStr + "']"
                $( hrefStr ).closest("li").remove()
                $("#tabs").tabs("refresh");
                for(let j = 0; j < active_tabs.length; j++){
                    if(active_tabs[j] === index){
                        active_tabs[j] = -1;
                        console.log(active_tabs[j]);
                    }
                }
            }
        } 
    }
}