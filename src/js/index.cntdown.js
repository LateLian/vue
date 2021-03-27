import { time } from '../js/timmer.js';

$(function() {
    $('#list>li>a').on('click', function() {
        let elm = $(`#${$(this).attr('title')}`);
        let top = elm.offset().top;
        $('html').animate({
            scrollTop: top
        }, 600);
    });

    $(window).on('scroll', function() {
        let top = $(document).scrollTop();
        console.log(top); //134 5333   
        // nav-two  ltr  nav-logo nav-two-ul
        let gapc = top - 700;
        let _index = Math.floor((gapc / 700));
        $('#list>li>a>em').removeClass('active').eq(_index + 1).addClass('active');
        $('#list>li>a>span').removeClass('typ1').eq(_index + 1).addClass('typ1');
        // console.log(_index);
        // $('#list>li>a>span').removeClass('typ1').eq(_index).addClass('active');
        // $('#list>li>a').removeClass('active typ1').eq(_index).addClass('active typ1');

        if (top > 120) {
            $('.right-fix').css('display', 'block');

            $('.nav-logo').css({
                "position": "fixed",
                "top": "0",
                "z-index": "999"
            });

            $('.nav-two').css({
                "position": "fixed",
                "top": "0",
                "width": "100%",
                "height": "50px",
                // "text-align": "center",
                // "left": "10%",
                "z-index": "900"
            });

            $('.nav-two-ul>li').css({
                "line-height": "50px"
            });

            $('.search').css({
                "display": "none"
            });

            $('.nav-right').css({
                "position": "fixed",
                "top": "0",
                "right": "16.5%",
                "z-index": "999"
            });

            $('.slider-u').css('top', '115px');
        } else {
            $('.right-fix').css('display', 'none');


            $('.nav-logo').css({
                "position": "static"
            });


            $('.nav-right').css({
                "position": "static"
            });


            $('.nav-two').css({
                "position": "static",
                "height": "70px"
            });


            $('.nav-two-ul>li').css({
                "line-height": "70px"
            });


            $('.search').css({
                "display": "block"
            });

            $('.slider-u').css('top', '189px');
        }

        if (top > 650) {
            $('#list').css('display', 'block');
        }
        if (top < 450) {
            $('#list').css('display', 'none');
        }

    });

    $.ajax({
        type: "get",
        url: "../../interface/library/getData.php",
        dataType: "json",
        success: function(res) {
            let temp = '';
            res.forEach((elm, i) => {
                let picture = JSON.parse(elm.picture);

                temp += ` <li>
                <div class="le-img">
                    <a href="../html/detail.html?id=${elm.id}"><img src="../${picture[0].src}" alt=""></a>
                </div>
                <div class="le-text">
                    <a href="#">${elm.title}</a>
                    <a href="#"> ${elm.subtitle}</a>
                    <p>￥${elm.price}</p>
                </div>
            </li>`;
                console.log(picture);
            });
            $('#t_model').html(temp);

        }
    });
});

$('.gbg').on('click', function() {
    location.href = "../html/enter.html";
});

setInterval(() => {
    time();
}, 1000);