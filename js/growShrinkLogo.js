window.onscroll = function () {
    growShrinkLogo();
};
function growShrinkLogo() {
    var Logo = document.getElementById("Logo");
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        Logo.style.height = '60px';
        Logo.style.width = '60px';
        Logo.style.transitionDuration = '0.6s';
    }
    else {
        Logo.style.height = '80px';
        Logo.style.width = '80px';
    }

   var nav = document.getElementById("nav");
   if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      nav.style.boxShadow = '0 8px 6px -6px #999';
   }
   else {
      nav.style.boxShadow = '0 0px 0px 0px';
   }
}