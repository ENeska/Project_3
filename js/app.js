
/* Menu */
$(function menu(){
    $('.js_menu').on('click', function(){
        $('body').toggleClass('margin_left');
    });

    $('.js_close').on('click', function(){
        $('body').removeClass('margin_left');
    });

});

/* Nav*/
$(function nav(){
    $('nav li').on('click', function (){

        var icon = $(this).find('i');

        if (icon.hasClass('ion-android-add')) {
            icon.removeClass();
            icon.addClass('ion-android-remove')

        } else {
            icon.removeClass();
            icon.addClass('ion-android-add')
        }
    });
});

$(function hideNav() {

    $('.up ul').hide();
    $('.up').children('li').on('click', function () {
        $(this).next().slideToggle();
    });
});

/* Read more */

$(function readMore() {

    var hidden_text = $('.hidden_text');
    hidden_text.hide();
    $(hidden_text).addClass('hide');


    $('.box_first').find('button').on('click', function () {

        if (hidden_text.hasClass('hide'))  {
            hidden_text.slideDown();
            $(this).text('Read less');
            hidden_text.removeClass('hide')

        } else {
            hidden_text.slideUp();
            $(this).text('Read more');
            hidden_text.addClass('hide');
        }
    })
});

/* Change color */

$(function changeColor() {

    var button = $('nav').find('.js_button');
    $(button).on('click', function () {

        $('.menu_head, p::selection, section button, section select, nav button, .cost').toggleClass('changeStyleB');
        $('.icon_menu, section i, nav a:hover').toggleClass('changeStyleC');
    })

});




/*Travel Cost*/

$(function cost() {

    $('.cost .calculate').on('click', function () {


        /* Day */
        var data1 = $('.cost #datepicker1').val();
        var data2 = $('.cost #datepicker2').val();

        var data_1 = new Date(data1);
        var data_2 = new Date(data2);

        var totalDay = (data_2 - data_1)/86400000;

        /*Adult*/
        var dayAdult = 200;
        if(totalDay>=4) {
            dayAdult = dayAdult*0.9;
        }

        /*Children*/
        var dayChildren = 170;
        if(totalDay>=4) {
            dayChildren = dayChildren*0.9;
        }

        /*Other option*/
        if($('#check1').is(":checked")){
            var allInclusive = 10;
        } else {
            allInclusive = 0;
        }

        if($('#check2').is(":checked")){
            var extraTrips = 200;
        } else {
            extraTrips = 0;
        }

        if($('#check3').is(":checked")){
            var food = 20;
        } else {
            food = 0;
        }

        /*Result*/
        var cost =$('.cost');
        var adult = +cost.find('#adult').val();
        var childreen = +cost.find('#childreen').val();

        var adultCost = dayAdult + allInclusive + food;
        var childreenCost = dayChildren + food;

        var totalAdult = (totalDay * (adultCost) +extraTrips) *adult;
        var totalChildreen = (totalDay * (childreenCost) +extraTrips) *childreen;

        cost.find('.total').text(totalAdult-totalChildreen);
    });
});


/*Datepicker*/
$( function() {
    $("#datepicker1, #datepicker2").datepicker({
        dateFormat: "yy-mm-dd",
        minDate: "0"
    });

});


    /* Change selection*/

var $singleSelect =  $('#single');

var showPlace = {

    piazza: function () {
        $('.inf:first').show()
    },

    arena: function () {
        $('.inf:odd').show()
    },

    balcony: function () {
        $('.inf:last').show()
    }
};


$(function changeSection() {

    var hidden = $('.inf');
    hidden.hide();

    $('#single').on('change', function () {

        var singleValues = $singleSelect.val();

        if ($.isFunction(showPlace[singleValues])) {
            showPlace[singleValues]();
        }
    });
});


