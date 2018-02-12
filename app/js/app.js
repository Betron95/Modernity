$(function () {
    /*Tabs*/
    $('.catalog-tabs a').click(function () {
        $('.catalog-tabs-content').fadeIn(500);
        $('.catalog-tabs-close').fadeOut(1);
        if($(this).hasClass('active')){
            $('.catalog-tabs-content').fadeOut(1);
            $('.catalog-tabs-close').fadeIn(500);
            $('.catalog-tabs a').removeClass('active');
            $('.catalog-tabs a img').removeClass('activeimg');
        }
        else{
            $('.catalog-tabs a').removeClass('active');
            $(this).addClass('active');
            var id = $(this).data('id');

            $('.tabs-content').hide();
            $('#' + id).css('display','flex');
            /*Tabs images*/
            $('.catalog-tabs a img').removeClass('activeimg');
            $(this).find('.noactive').addClass('activeimg');
        }
    });
    /*Tabs content-block category*/
    $('.tabs-content-block__title').click(function () {
        $(this).closest('.tabs-content-block__cat').find('.a-cont').slideToggle();

    });
    /*Section page*/
    $('.section-page-item__text_title').click(function () {
        $(this).closest('.section-page-item__text').find('ul').slideToggle();
    });
    /*Basket num*/
    $('.basket-arrow').click(function () {
        var count = $(this).closest('.basket-item__num_inp').find('.basket-item-kotov').val();
        console.log(count);
        if ( $(this).hasClass('arrow-plus') ) {
            count++;
            $(this).closest('.basket-item__num_inp').find('input').val(count).change();
            $(this).closest('.basket-item__num_inp').find('input').val();
        } else if ( $(this).hasClass('arrow-minus') ) {
            if(count >= 2){
                count--;
                $(this).closest('.basket-item__num_inp').find('input').val(count).change();
            }
            else return false;
        }
    });
    /*Burger*/
    $('.burger').click(function () {
        $('body').toggleClass('hide-scroll-body');
        $(this).toggleClass('burger-active');
        $('.dd-menu').slideToggle();
    });

    /*CloseOpen subpage*/
    $('.closeopen').click(function () {
        $(this).closest('.subsection-sample-section').next().slideToggle();
        $(this).find('img').toggleClass('imgrotate');
        if($(this).find('p').html() == 'Свернуть'){
            $(this).find('p').html('Развернуть');
        }
        else {
            $(this).find('p').html('Свернуть');
        }
    });
    /*PageToogle*/
    $('.subsection-pagenum-contleft .pageul li').click(function () {
       $('.subsection-pagenum-contleft .pageul li').removeClass('active');
       $(this).addClass('active');
    });
    /*Casing Hover*/
    $('.casing-item').hover(function() {
        $(this).find('.casing-item-text').toggleClass('hov');
        $(this).find('.casing-item__img').toggleClass('hov');
        $(this).find('.darkcasing').toggleClass('colortog');
    });
    /*JQUERY UI SLIDER*/
    $( function() {
        $( ".slider-range" ).slider({
            range: true,
            min: 5000,
            max: 30000,
            values: [ 5000, 30000 ],
            slide: function( event, ui ) {
                $( ".amount" ).val(ui.values[ 0 ]);
                $( ".amount1" ).val(ui.values[ 1 ]);
            }
        });
        $( ".amount" ).val($( ".slider-range" ).slider( "values", 0 ));
        $( ".amount1" ).val($( ".slider-range" ).slider( "values", 1 ));
    } );
    /*Selection-page podbor*/
    $('.selection-types a').click(function () {
        $(this).closest('.selection-types').find('a').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('extended')){
            $('.selection-extended').fadeIn(500);
            $('.selection-brief').fadeOut(1);
        }
        else{
            $('.selection-extended').fadeOut(1);
            $('.selection-brief').fadeIn(500);
        }
    });
    /*requisites-page*/
    $('.requisites-contacts-links a').click(function () {
       $(this).closest('.requisites-contacts-links').find('a').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('contactslink')){
            $('.contacts-block').show(500);
            $('.requisites-block').hide(500);
            $('.map-block').hide(500);
        }
        else if($(this).hasClass('maplink')){
            $('.map-block').show(500);
            $('.requisites-block').hide(500);
            $('.contacts-block').hide(500);
        }
        else{
            $('.requisites-block').show(500);
            $('.contacts-block').hide(500);
            $('.map-block').hide(500);
        }
    });
    /*Card swiper*/
    var mySwiper = new Swiper ('.card-swiper', {
        // Optional parameters
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    /*Main swiper*/
    var mainSwiper = new Swiper ('.main-swiper', {
        // Optional parameters
        loop: true,
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: 'true',
        },
    });
    /*Loop Card*/
    $("#zoom_01").elevateZoom({
        zoomType				: "lens",
        lensShape : "round",
        lensSize    : 200
    });
    //Magnific Popup
    $('.open-link-popup').magnificPopup({
        type: 'inline'
    });
    /*Change view*/
    $('.subsection-display').click(function () {
        if($(this).hasClass('active')){
            return false;
        }
        else {
            $('.subsection-display').removeClass('active');
            $(this).addClass('active');
            $('.subsection-display img').toggleClass('noactive');
        }



    });
    /*choise-casing colors*/
    $('.product-casing-choise-item__del').click(function () {
       $(this).closest('.product-casing-choise-item').hide(400);
    });
    //Кастомный селект
    $('body').on('click', '.material-link', function () {
        $(this).toggleClass('border-niz');
        $(this).next('.material-select-dd').slideToggle(200); //При клике по ссылке,открывается скрытый список
        $(this).closest('.custom-select').find('.custom-select-arrow').toggleClass('active');
    });
    $('.material-select-dd a').click(function () {
        var val = $(this).text(); //считываем значение элемента списка,по которому нажали
        $(this).closest('.custom-select').find('.material-link').text(val); //заносим считаное значение в видимую ссылку
        $(this).closest('.custom-select').find('input').val(val);//Заносим значение в скрытый input для натяжки
        $(this).closest('.custom-select').find('.material-select-dd').slideUp(200); //Скрываем выпавший список
        $(this).closest('.custom-select').find('.material-link').removeClass('border-niz');
        $(this).closest('.custom-select').find('.custom-select-arrow').toggleClass('active');

    });

    $('body').on('click', function (e) { //если нажать на другое место на сайте,то "селект" закроется


        if ($(e.target).closest('.custom-select').length == 0) {


            $('.material-select-dd').slideUp(200);
            if($('.custom-select-arrow').hasClass('active')){
                $('.custom-select-arrow').removeClass('active');
                $('.material-link').removeClass('border-niz');
            }
        }

    });

    function basketcalc() {
        var count = 2;
        var cena = 2;
        var res = count * cena;
    };
    basketcalc();
});