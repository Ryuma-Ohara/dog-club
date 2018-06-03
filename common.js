// function get scroll amount
function getScrolled() {
 return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
}

// Get button element
var topButton = document.getElementById( 'page-top' );

// function move to top
function scrollToTop() {
  var scrolled = getScrolled();
  window.scrollTo( 0, Math.floor( scrolled / 1.2 ) );
  if ( scrolled > 0 ) {
    window.setTimeout( scrollToTop, 20 );
  }
};
