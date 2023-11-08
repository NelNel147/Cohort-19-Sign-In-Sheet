document.addEventListener("DOMContentLoaded", function() {
    el_autohide = document.querySelector('.autohide');
    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
    if (el_autohide) {
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
        let scroll_top = window.scrollY;
        if (scroll_top < last_scroll_top) {
          el_autohide.classList.remove('scrolled-down');
          el_autohide.classList.add('scrolled-up');
        } else {
          el_autohide.classList.remove('scrolled-up');
          el_autohide.classList.add('scrolled-down');
        }
        last_scroll_top = scroll_top;
      });
      // window.addEventListener
    }
    // if
  });
  // DOMContentLoaded  end

  let inpts =document.querySelectorAll('input');
for(var i=0;i<inpts.length;i++){
inpts[i].onfocus = function(){
this.parentElement.children[0].children[0].style.color = "#0080ff";
gotoNextField(nextElement)
  nextElement.setFocus();
}
}
inpts[i].onblur = function(){
this.parentElement.children[0].children[0].style.color = "#ddd";
}
let pinCode = document.getElementsByClassName('pin');
let number = 1;
for(var j=0;j<pinCode.length;j++){
pinCode[j].onkeyup = (e)=>{
if(e.target.value.length > 1){
e.target.value = e.target.value.slice(0,1);
}
}
}
