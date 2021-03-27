/* js数量计算 */
$(document).on('click', '#reduce_buy_number', function() {

    // let buy_number = $(this).parent().children('.buy_number').val();
    let buy_number = $(this).parent().parent().parent().parent().children('#purchase').children('.p-detail').children('.addcountbox').children('.buy_number').val();
    console.log(buy_number);
    let sum = parseInt(buy_number--);


    if (sum == 1) {
        sum = 1;
        return $('.buy_number').html($('.buy_number').val(sum));
    } else {
        sum--;
        $('.buy_number').html($('.buy_number').val(sum));
    }

    // /* 个数 */
    // let t = $('.amount').parent().parent().parent().children('.t_quantity').children('.p-detail').children('.addcountbox').children('.buy_number').val();

    // /* 单价 */
    // let p = $('#cost').text();
    // let d = parseInt(p * t);
    // $('#amount').html(d);
});
/* js 加法 事件 */
$(document).on('click', '#add_buy_number', function() {
    let sum = $('#buy_number').val();
    if (sum >= 10) {
        alert("您最多只能买十件");
        return
    };
    sum++;
    // console.log(sum);

    $('#buy_number').html($('#buy_number').val(sum));

    // // let s = $('#amount').html(Number($('#buy_number').val(sum)));
    // /* 个数 */
    // let t = $('#amount').parent().parent().parent().children('.t_quantity').children('.p-detail').children('#addcountbox').children('#buy_number').val();

    // /* 单价 */
    // let p = $('#cost').text();
    // let d = parseInt(p * t);
    // $('#amount').html(d); //$('#buy_number').val(sum) * parseInt($('#cost').val())
});
/* change事件 */
$(document).on('change', '#buy_number', function() {
    let sum = $('#buy_number').val();
    if (sum >= 10) {
        alert("您最多只能买十件");
        sum = 10;
        return $('#buy_number').html($('#buy_number').val(sum));
    };

});