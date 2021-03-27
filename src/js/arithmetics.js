/* js数量计算 */
$('.good_item').on('click', '.reduce_buy_number', function() {
    // console.log($(this).parent());
    let buy_number = $(this).parent().find('.buy_number').val();
    console.log(buy_number);

    let sum = parseInt(buy_number--);
    if (sum == 1) {
        sum = 1;
        return $(this).parent().find('.buy_number').val(sum); // $('.buy_number').html($('.buy_number').val(sum));
    } else {
        sum--;
        $(this).parent().find('.buy_number').val(sum);
        // $('.buy_number').html($('.buy_number').val(sum));
    }

    /* 个数 */
    // let t = $('.amount').parent().parent().parent().children('.t_quantity').children('.p-detail').children('.addcountbox').children('.buy_number').val();

    /* 单价 */
    let p = $(this).parent().parent().parent().parent().find('.cost').text();
    let d = parseInt(buy_number * p);
    $(this).parent().parent().parent().parent().find('.amount').html(d);
});
/* js 加法 事件 */
$(document).on('click', '.add_buy_number', function() {
    // console.log($(this).parent());
    let buy_number = $(this).parent().children('.buy_number').val();
    console.log(buy_number);

    let sum = parseInt(++buy_number);
    // $('.buy_number').html($('.buy_number').val(sum));
    if (sum >= 11) {
        alert("您最多只能买十件");
        return
    } else {
        $(this).parent().find('.buy_number').val(sum);
    }
    // console.log(sum);



    // // let s = $('#amount').html(Number($('#buy_number').val(sum)));
    // /* 个数 */
    // let t = $('#amount').parent().parent().parent().children('.t_quantity').children('.p-detail').children('#addcountbox').children('#buy_number').val();

    // /* 单价 */
    let p = $(this).parent().parent().parent().parent().find('.cost').text();
    let d = parseInt(buy_number * p);
    $(this).parent().parent().parent().parent().find('.amount').html(d);
});
/* change事件 */
$(document).on('change', '.buy_number', function() {
    let sum = $(this).val();
    if (sum >= 10) {
        alert("您最多只能买十件");
        sum = 10;
        return $(this).val(sum);
    };

});