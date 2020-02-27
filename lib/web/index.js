export function throttle (fn, delay) {
	let timer = null,
  		firstTime = true;
      
  return function () {
  	const args = arguments, self = this;
    
    if (firstTime) {
    	fn.apply(self, args);
      return firstTime = false;
    }
    
    if (timer) return false;
    
    timer = setTimeout(function() {
    	clearTimeout(timer);
      timer = null;
    	fn.apply(self, args);
    }, delay);
  }
}

export function debounce (fn, delay) {
	let timer = null;
  return function() {
  	clearTimeout(timer);
  	timer = setTimeout(() => {
    	fn.apply(this, arguments);
    }, delay);
  }
}