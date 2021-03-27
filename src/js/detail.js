import cookie from '../js/cookie.js';

// $(function() {


let id = location.search.split('=')[1];

// $('#exzoom_img_u').ready(function() {

// });
$('.exzoom_img_box').css({
    "width": "520px",
    "height": "530px"
});

$('.exzoom_img_ul_outer').css({
    "width": "520px",
    "height": "530px"
});

$('.exzoom_img_ul').css({
    "width": "520px",
    "height": "530px"
});
$.ajax({
    type: "get",
    url: "../../interface/library/getItem.php",
    data: { id },
    dataType: "json",
    success: function(res) {
        let temp = '';
        let sps = '';
        let picture = JSON.parse(res.picture);
        // let specbig = Array.from(res.specbig);
        let specbig = res.specbig.split(',');
        // console.log(picture);
        // console.log(specbig);

        /* 图片 */
        picture.forEach(elm => {
            temp += `
           <li><img src="../${elm.src}" /></li>
           `;
        });
        /* 规格 */
        specbig.forEach(elm => {
            sps += `
            <span><i>${elm.slice(0,27)+'...'}</i></span>
            `;
        });

        /* 商品价格 评价 */
        let p_wrap = `
                <div class="p_d_w">
                    <div class="p_d_wr">商城价</div>
                    <div class="p_d_wra">
                        <span class="p_d_sn">￥</span>
                        <span class="p_d_st">${res.price}</span>
                    </div>
                </div>
                <div class="p_d_wt">
                        <div class="p_d_wtw">累计评价</div>
                        <div class="p_d_wtwo">${res.details}</div>
                </div>
            `;
        /* 商品名 */
        let til = `
            <h1>${res.tit}</h1>
            <div class="dec">${res.title}</div>
            `;

        /* 购买数量 */
        // let pur = `
        //   <input type="text" class="text" id=" buy_number" value="1">
        //     `;

        /* 加入购物车 */
        let add = `
                <span>加入购物车</span>
            `;

        // $('#ss').append(pur);
        $('#c_one').append(til);
        $('#spec-big').append(sps);
        $('#exzoom_img_u').append(temp);
        $('#price-detail-wrap').append(p_wrap);
        $('#jrgwc').append(add);
        $('#con_right').find('#jrgwc').on('click', function() {
            addItem(res.id, res.price, $('#buy_number').val());
        });

        $(function() {
            $("#exzoom").exzoom({
                autoPlay: false,
            }); //方法调用，务必在加载完后执行
        });


    }


});

function addItem(id, price, num) {
    let shop = cookie.get('shop');
    let product = {
        id,
        price,
        num
    };

    if (shop) {
        shop = JSON.parse(shop);

        if (shop.some(el => el.id === id)) {
            shop.forEach(elm => {
                if (elm.id === id) {
                    elm.id = elm.num;
                } else {
                    elm.num = null;
                }
            });
        } else {
            shop.push(product);
        }
    } else {
        shop = [];
        shop.push(product);
    }

    cookie.set('shop', JSON.stringify(shop), 1);
}



$('#list>li>a').on('click', function() {
    let elm = $(`#${$(this).attr('title')}`);
    let top = elm.offset().top;
    $('html').animate({
        scrollTop: top
    }, 600);
});

$(window).on('scroll', function() {
    let top = $(document).scrollTop();
    // console.log(top); //134 5333   
    // // nav-two  ltr  nav-logo nav-two-ul
    // let gapc = top - 700;
    // let _index = Math.floor((gapc / 700));
    // $('#list>li>a>em').removeClass('active').eq(_index + 1).addClass('active');
    // $('#list>li>a>span').removeClass('typ1').eq(_index + 1).addClass('typ1');
    // // console.log(_index);
    // // $('#list>li>a>span').removeClass('typ1').eq(_index).addClass('active');
    // // $('#list>li>a').removeClass('active typ1').eq(_index).addClass('active typ1');

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
/* span添加brg */
$(document).on('click', '#spec-big>span', function() {
    $(this).attr('id', 'brg').siblings().removeAttr('id');
    // $(this).toggleClass('brg');
});

/* 推荐 多选js */
$('.swiperItemWrap>li>.imgBox').on('click', function() {
    $(this).toggleClass('imB');
});

//   --------------------------
$(document).on('click', '#jrgwc', function() {
    location.href = "../html/shop.html";
});


// });