$(document).ready(function(){

    /* Menu */
    $(function(){
        $('.js_menu').on('click', function(){
            $('nav').toggleClass('margin_left');
        });

        $('.js_close').on('click', function(){
            $('nav').removeClass('margin_left');
        });

    });

    /* Nav*/
    $(function (){
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

    $(function () {
        $('.up ul').hide();
        $('.up').children('li').on('click', function () {
            $(this).next().slideToggle();
        });
    });

    /* Read more */

    $(function() {
        var hidden_text = $('.hidden_text');
        hidden_text.hide();
        $('.box_first').find('button').on('click', function () {
            hidden_text.slideToggle();
            $(this).remove();
        })
    });

    /* Change color */

    $(function () {

        var button = $('nav').find('.js_button');
        $(button).on('click', function () {

            $('.menu_head, p::selection, section button, section select, nav button, .cost').toggleClass('changeStyleB');
            $('.icon_menu, section i, nav a:hover').toggleClass('changeStyleC');
        })

    });

    /*Travel Cost*/

    $('.cost .calculate').on('click', function () {

        /* Day */
        var data1 = $('.cost #data1').val();
        var data2 = $('.cost #data2').val();

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

        cost.find('.total').text(totalAdult+totalChildreen);

    });

    /* Change selection*/
    $(function() {
        var hidden = $('.inf');

        hidden.hide();

        function displayVals() {
            var singleValues = $( "#single" ).val();

            if (singleValues=="piazza") {
                hidden.hide();
                $('.inf:first').show();
            } else if (singleValues=="arena"){
                hidden.hide();
                $('.inf:odd').show();
            } else {
                hidden.hide();
                $('.inf:last').show();
            }
        }
        $("select" ).change( displayVals );
        displayVals();
    });

});




