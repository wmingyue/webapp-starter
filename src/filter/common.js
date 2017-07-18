import Vue from 'vue';
/** 应用实例  状态
 *  @param {string} status 状态类型
 */
Vue.filter('getStatus', function(status) {
    let str;
    switch (status) {
        case 'closed':
            str = '已关闭';
            break;
        case 'opened':
            str = '已开启';
            break;
        case 'deleting':
            str = '删除中';
            break;
        case 'open_failed':
            str = '开启失败';
            break;
        case 'close_failed':
            str = '关闭失败';
            break;
        case 'delete_failed':
            str = '删除失败';
            break;
        default:
            str = '执行中';
            break;
    }
    return str;
});

/**
 * 列表时间转换
 *  @param unix 转换类型 yyyy-mm-dd
 */
Vue.filter('localDate', function(date) {
    date = new Date(date);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    month = parseInt(month) < 10 ? '0' + month : month;
    day = parseInt(day) < 10 ? '0' + day : day;
    hour = parseInt(hour) < 10 ? '0' + hour : hour;
    minute = parseInt(minute) < 10 ? '0' + minute : minute;
    second = parseInt(second) < 10 ? '0' + second : second;

    date = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    return date;
});
