$(window).scroll(function() {
    let fromTop = window.scrollY +1;
  
    $('.nav-a').each(function(i, link) {
      let section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
    
    }).scroll();

$('.nav-a').click(function(){
    $('.nav-a').removeClass('active');
    $(this).addClass('active');
})