import cookie from '../js/cookie.js';

let shop = cookie.get('shop');

if (shop) {
    shop = JSON.parse(shop);

    let idList = shop.map(el => el.id).join();

    $.ajax({
        type: "get",
        url: "../../interface/library/getItems.php",
        data: { idList },
        dataType: "json",
        success: function(res) {
            let temp = '';
            res.forEach(elm => {
                let picture = JSON.parse(elm.picture);

                let current = shop.filter(val => val.id == elm.id);

                temp = `
                <div class="two">
                        <div class="t_main taxian">
                            <!-- 是否选中 -->
                            <div class="t_fl">
                                <input type="checkbox" class="t_ck" name="checkbox-item" date-id="${elm.id}">
                            </div>
                            <!-- 对应的图片 -->
                            <div class="t_img">
                                <img src="../${picture[0].src}" alt="">
                            </div>
                            <!-- 品牌 -->
                            <div class="t_desc">
                                <h3>${elm.title}</h3>
                            </div>
                            <!-- 价格 -->
                            <div class="t_price">
                                <p class="t_65"><span>¥</span><span class="cost">${elm.price}</span></p>
                            </div>
                            <!-- 数量 总数 -->
                            <div class="t_quantity le_width_172">
                                <div class="p-detail">
                                    <!-- js数量addcountbox -->
                                    <div class="add-count-wrap addcountbox" >
                                        <!-- js减号reduce_buy_number -->
                                        <span class="reduce reduce_buy_number" >
                                            <i></i>
                                        </span>
                                        <input type="text" class="text buy_number"   value="${current[0].num}" name="${elm.id}">
                                        <!-- js加号add_buy_number -->
                                        <span class="add add_buy_number" >
                                            <i>+</i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <!-- 小计 总数 -->
                            <div class="t_sum">
                                <p class="t_le_65"><span>￥</span><span class="amount">${elm.price*current[0].num}</span></p>
                            </div>
                            <div class="t_re_116">
                                <p class="onremover" data-id="${elm.id}">删除</p>
                            </div>
                        </div>
                        <div class="bg"></div>
                    </div>
                `;
                $('#good_item').append(temp).find('.onremover').on('click', function() {
                    let res = shop.filter(el => el.id != $(this).attr('data-id'));
                    cookie.set('shop', JSON.stringify(res), 1);
                    location.reload();
                });
            });
        }

    });
}

$(document).on('click', '.toIndex', function() {
    location.href = "../html/index.html";
})
$(document).on('click', '.doLogin', function() {
    location.href = "../html/enter.html";
})

/* checkbox事件 */

let checkBoxItemNum = $(".strt").find("input[name='checkbox-item']").length;
console.log(checkBoxItemNum);
$("#circle").on('click', function() {
    let s = $(".strt").find("input[name='checkbox-item']").prop("checked", true);
    // let su = ($(this));
    let se = s.parent().parent().find('.amount');

    // console.log(parseInt($(this).parent().parent().parent().children('.good_list').children('.container').children('.good_item').children('.two').children('.t_main').children('.t_sum').children('.t_le_65').children('.amount').text()));
    let sum = 0;
    $.each(se, function(index, elm) {
        sum += parseInt($(elm).text());
        // $('.foo_sum').html();
    })

    if ($(this).prop("checked") == true) {
        $.each(s, function(index, elm) {
            $('.foo_sum').text(index + 1);
            // console.log(index);
            $('.jg').html(sum);
        })
    } else {
        $.each(s, function(index, elm) {
            $('.foo_sum').text(0);
            $('.jg').html(0);
        })
        $(".strt").find("input[name='checkbox-item']").prop("checked", false);
    }
});
let d = 0;
let b1 = 0;
$(".strt").on('click', "input[name='checkbox-item']", function() {
    let s = $(this).prop("checked");
    let su = parseInt($(this).parent().parent().children('.t_sum').children('.t_le_65').children('.amount').text());

    // $.each(s, function(index, elm) {
    //     console.log(index);
    // });

    if (s) {
        d = d + 1;
        $('.foo_sum').text(d);
        console.log(d);
        b1 += su;
        $('.jg').html(b1);
    } else {
        b1 -= su;
        d = d - 1;
        $('.foo_sum').text(d);
        console.log(d);
        $('.jg').html(b1);
    }

    // console.log(s);
    // if (s == true) {
    //     $.each(s, function(index, elm) {
    //         $('.foo_sum').text(index + 1);
    //     });
    // } //else if (s) {
    // //     $.each(s, function(index, elm) {
    // //         $('.foo_sum').text(index - 1);
    // //     });
    // // }

    // if ($(this).prop("checked") == true) {
    //     $("#circle").prop("checked", true);
    //     $.each(s, function(index, elm) {
    //         $('.foo_sum').text(index + 1);
    //     })
    // } else {
    //     $("#circle").prop("checked", false);
    //     $.each(s, function(index, elm) {
    //         $('.foo_sum').text(index - 1);
    //     })
    // }


    // if ($(".strt").find("input[name='checkbox-item']:checked").length == checkBoxItemNum) {
    //     $("#circle").prop("checked", true);
    // } else {
    //     $("#circle").prop("checked", false);
    // }
});