window.onscroll = function () {
    growShrinkLogo();
};
function growShrinkLogo() {
    
   var nav = document.getElementById("nav");
   if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      nav.style.boxShadow = '0 8px 6px -6px #999';
   }
   else {
      nav.style.boxShadow = '0 0px 0px 0px';
   }
}