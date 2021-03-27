function time() {
    let span1 = document.querySelector(".day");
    let span2 = document.querySelector(".i1");
    let span3 = document.querySelector(".i2");
    let span4 = document.querySelector(".i3");


    let time = new Date(), //获取当前时间
        now_hour = time.getHours() * 1000 * 60 * 60,
        now_minute = time.getMinutes() * 60 * 1000,
        now_second = time.getSeconds() * 1000,
        now_time = now_hour + now_minute + now_second,
        end_hour = 12 * 60 * 60 * 1000, //定义结束时间
        flag = false;
    if (now_time > end_hour) {
        now_time -= end_hour;
        flag = true;
    }
    if ((end_hour - now_time) >= 0) {
        let hour = Math.floor((end_hour - now_time) / (1000 * 60 * 60) % 24);
        let minute = Math.floor((end_hour - now_time) / (1000 * 60) % 60);
        let second = Math.floor((end_hour - now_time) / 1000 % 60);
        if (hour < 10) {
            $('.i1').html('0' + hour); //s1
        } else {
            $('.i1').html(hour); //s1
        }
        if (minute < 10) {
            $('.i2').html('0' + minute); //s2
        } else {
            $('.i2').html(minute); //s2
        }
        if (second < 10) {
            $('.i3').html('0' + second); //s3
        } else {
            $('.i3').html(second); //s3
        }
    } else {
        $('.i1').html('00'); //s1
        $('.i2').html('00'); //s2
        $('.i3').html('00'); //s3
    }
    return (end_hour - now_time) / 1000;
}


export { time };