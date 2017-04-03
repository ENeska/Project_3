$( document ).ready(function() {

    /* **** Menu **** */

    $(function menu(){
        $('.js_menu').on('click', function(){
            $('nav').toggleClass('margin_left');
            $('#dark').fadeToggle('dark_background');
        });

        $('.js_close').on('click', function(){
            $('nav').removeClass('margin_left');
            $('#dark').fadeOut('dark_background');
        });

    });

    /* **** Nav **** */
    $(function nav(){


        $('nav li').on('click', function (){

            var icon = $(this).find('i');
            icon.toggleClass('ion-android-add');
            icon.toggleClass('ion-android-remove');

        });
    });

    $(function hideNav() {

        $('.up ul').hide();
        $('.up').children('li').on('click', function () {
            $(this).next().slideToggle();
        });
    });

    /* **** Read more **** */

    $(function readMore() {

        var hidden_text = $('.hidden_text');
        hidden_text.hide();
        $(hidden_text).addClass('hide');


        $('.box_first').find('button').on('click', function () {

            if (hidden_text.hasClass('hide'))  {
                hidden_text.slideDown();
                $(this).text('Read less');
            } else {
                hidden_text.slideUp();
                $(this).text('Read more');
            }
            hidden_text.toggleClass('hide')
        })
    });

    /* **** Change color **** */

    $(function changeColor() {

        var button = $('nav').find('.js_button');
        $(button).on('click', function () {

            $('.menu_head, p::selection, section button, section select, nav button, .cost').toggleClass('changeStyleB');
            $('.icon_menu, section i, nav a:hover').toggleClass('changeStyleC');
        })

    });

    /* **** Datepicker **** */

    $( function() {
        $("#datepicker1, #datepicker2").datepicker({
            dateFormat: "yy-mm-dd",
            minDate: "0"
        });

    });


    /* **** Change selection **** */

    var $singleSelect =  $('#single');

    var hidden = $('.inf');

    var showPlace = {

        piazza: function () {
            $('.inf:first').show();
        },
        arena: function () {
            $('.inf:odd').show();
        },
        balcony: function () {
            $('.inf:last').show();
        }
    };

    $(function changeSection() {

        $('#single').on('change', function () {

            var singleValues = $singleSelect.val();

            if ($.isFunction(showPlace[singleValues])) {
                $('.inf').hide();
                showPlace[singleValues]();
            }
        });
    });

    /* **** Travel Cost **** */

    $(function cost() {



        $('form').on('submit', function() {
            /* Day */
            var data1 = $('.cost #datepicker1').val();
            var data2 = $('.cost #datepicker2').val();

            var data_1 = new Date(data1);
            var data_2 = new Date(data2);

            var totalDay = (data_2 - data_1)/86400000;

            /*Adult Childreen*/
            var dayAdult = 200;
            var dayChildren = 170;

            if(totalDay>=4) {
                dayAdult = dayAdult*0.9;
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


            var form = $('form');
                form.on('submit', function(evt) {
                evt.preventDefault();
            });

    });

    /* **** Validate **** */

    $(function check(){
        $('#myform').find('input').on('focus change', function (event){


            if (event.type === 'focus') {

                if ($(this).val() == '') {
                    $(this).addClass('error');
                }
                else {
                    $(this).removeClass('error');
                }
            } else if (event.type === 'change') {

                if ($(this).val() == '') {
                    $(this).addClass('error');
                }
                else {
                    $(this).removeClass('error');
                }
            }
        });
    });


    /* **** Image - mouseover, moseout **** */

    var text = $('.image_text');
    var layer = $('.layer_image');

    $(layer).on('mouseover', function () {
        $(this).fadeOut(500);
        $(text).fadeOut(500);
    });

    $('.image_section img').on('mouseout', function () {
        $(layer).fadeIn(500);
        $(text).fadeIn(500);
    });




});












