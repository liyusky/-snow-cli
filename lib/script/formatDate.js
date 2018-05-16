/** 

* 将时间转换成固定格式输出 

* new Date().toFormat('YYYY-MM-DD HH:mm:ss');

* new Date().toFormat('YYYY/MM/DD hh:mm:ss');

* 只支持关键字（YYYY、MM、DD、HH、hh、mm、ss WW）HH：表示24小时，hh表示12小时

*/

Date.prototype.toFormat = function (format) {

  var formatstr = format;

  if (format != null && format != "") {

    //设置年  

    if (formatstr.indexOf("YYYY") >= 0) {

      formatstr = formatstr.replace("YYYY", this.getFullYear());

    }

    //设置月  

    if (formatstr.indexOf("MM") >= 0) {

      var month = this.getMonth() + 1;

      if (month < 10) {

        month = "0" + month;

      }

      formatstr = formatstr.replace("MM", month);

    }

    //设置日  

    if (formatstr.indexOf("DD") >= 0) {

      var day = this.getDate();

      if (day < 10) {

        day = "0" + day;

      }

      formatstr = formatstr.replace("DD", day);

    }

    //设置时 - 24小时  

    var hours = this.getHours();

    if (formatstr.indexOf("HH") >= 0) {

      if (month < 10) {

        month = "0" + month;

      }

      formatstr = formatstr.replace("HH", hours);

    }

    //设置时 - 12小时  

    if (formatstr.indexOf("hh") >= 0) {

      if (hours > 12) {

        hours = hours - 12;

      }

      if (hours < 10) {

        hours = "0" + hours;

      }

      formatstr = formatstr.replace("hh", hours);

    }

    //设置分  

    if (formatstr.indexOf("mm") >= 0) {

      var minute = this.getMinutes();

      if (minute < 10) {

        minute = "0" + minute;

      }

      formatstr = formatstr.replace("mm", minute);

    }

    //设置秒  

    if (formatstr.indexOf("ss") >= 0) {

      var second = this.getSeconds();

      if (second < 10) {

        second = "0" + second;

      }

      formatstr = formatstr.replace("ss", second);

    }

    if (formatstr.indexOf("WW") >= 0) {

      var ww = this.getDay();
      var weekday = [
        "周日",
        "周一",
        "周二",
        "周三",
        "周四",
        "周五",
        "周六"
      ];

      formatstr = formatstr.replace("WW", weekday[ww]);

    }

  }

  return formatstr;

};

Date.prototype.getSpecifyDate = function (num) {
  this.setDate(this.getDate() + num);
  return this;
};

Date.prototype.getDelayDay = function (current) {
  var time = new Date(current).getDate() - this.getDate();
  return time;
}