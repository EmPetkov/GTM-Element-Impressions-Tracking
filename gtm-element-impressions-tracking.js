var hasDeals = document.getElementsByClassName('deal-offer-holder').length;
var element = document.getElementsByClassName('deal-offer-holder')[0];
var elVisible = false;
var eventPushed = false;
var scrolls = 0;
  
if(hasDeals>0) {  
	document.addEventListener("scroll", function() {scrolls+=1; if(scrolls%7 === 0) {isScrolledIntoView(element);}} );
}
  
function isScrolledIntoView(el) {
	if(!elVisible) {  
      var elemTop = el.getBoundingClientRect().top;
      var elemBottom = el.getBoundingClientRect().bottom;
      var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
      elVisible = isVisible;
      console.log(isVisible);
      return isVisible;
    } else if(!eventPushed) {
      dataLayer.push({'event': 'dealVisible'});
      eventPushed = true;
    }
}