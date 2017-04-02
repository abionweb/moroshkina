/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    var bars = $('.menu-wrapper1 i.fa-bars');
    var close = $('.menu-wrapper1 .fa-times');
    var menuwrapper1 = $('.menu-wrapper1');

    bars.click(function() {
        console.log('123');
        menuwrapper1.removeClass('close');
    });
    close.click(function() {
        menuwrapper1.addClass('close');

    })
    console.log('ready');
});