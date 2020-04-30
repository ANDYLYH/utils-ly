let utils = { 
  timestampToTime(time) {
    if (time) {
      var date = new Date(time);;
      var Y = date.getFullYear() + "-";
      var M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
      var D = date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ";
      return Y + M + D;
    }
  },
  timestampToTimepoint(time) {
    if (time) {
      var date = new Date(time);
      var Y = date.getFullYear() + ".";
      var M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + ".";
      var D = date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ";
      return Y + M + D;
    }
  },
  timestampToTimesecond(time) {
    if (time) {
      var date = new Date(time);
      var Y = date.getFullYear() + "-";
      var M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
      var D = date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ";
      var h = date.getHours() + ":";
      var mm = date.getMinutes();
      if (mm < 10) {
        mm = '0' + mm
      }
      return Y + M + D + h + mm;
    }
  },
}
module.exports = utils
