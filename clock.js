// First Method
/* for Method 2 comment out the following  */
setInterval(function () {
  var time = new Date()
  var second = time.getSeconds()
  var minute = time.getMinutes()
  var hour = time.getHours() + minute / 60

  if (hour > 12) {
    hour -= 12
  }
/* for Mthod 2 comment out until here */
/*  Second Method
setInterval(function () {

  if (second < 60) {
    second += 1
  } else {
    second = 1
    if (minute < 60) {
      minute += 1
      hour += minute / 60
    } else {
      minute = 1
      if (hour < 12) {
        hour += 1
      } else {
        hour = 1
      }
    }
  }
*/

  var elsec = document.getElementById('second')
  var elmin = document.getElementById('minute')
  var elhr = document.getElementById('hour')

  elsec.style.transform = 'rotate(' + (second / 60) * 360 + 'deg)'
  elmin.style.transform = 'rotate(' + (minute / 60) * 360 + 'deg)'
  elhr.style.transform = 'rotate(' + (hour / 12) * 360 + 'deg)'
}, 1000)
