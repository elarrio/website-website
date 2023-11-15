const hideNavbar = () => {
  $(".navbar").css("top", "-65px");
};

const showNavbar = () => {
  $(".navbar").css("top", "0");
};

const navbarOnScroll = () => {
  const timeout = () => {
    console.log("timeout");
    if (!$(".navbar").is(":hover")) {
      hideNavbar();
    }
  };

  showNavbar();
  clearTimeout(timeout);
  setTimeout(timeout, 1000);
};

$(document).ready(() => {
  if ($(window).width() < 768) return;
  $(window).scroll(navbarOnScroll);
});

$(document).ready(() => {
  if ($(window).width() < 768) return;
  $(".navbar").mouseenter(showNavbar);
  $(".navbar").mouseleave(hideNavbar);
});


function doTypewriter(id, text) {
  var i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      document.getElementById(id).innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
}

$(document).ready(() => {
  doTypewriter("hero-subtitle", "Musician. Composer. Beatmaker.");
});



