var count = 1
var container = document.getElementById('container')

function getUserAction() {
  container.innerHTML = count++
}
//error 
// container.onmousemove = getUserAction();

// container.onmousemove = getUserAction;

// debounce 防抖
// TODO 待完善
function debounce(func,wait) {
  var timeout;
  return function() {
    // clearTimeout(timeout); 清除定时器
    timeout = setTimeout(func, wait);
  }
}


