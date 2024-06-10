if (document.querySelector("#splide-banner")) {
  var splide = new Splide("#splide-banner", {
    type: "fade",
  });
  splide.mount();
}

//Esto sirve para agregar un padding-top al section
if (document.querySelector("main")) {
  function adjustMainPadding() {
    var header = document.querySelector("header");
    var main = document.querySelector("#splide-banner .splide__slide");
    var headerHeight = header.offsetHeight;
    main.style.paddingTop = headerHeight + "px";
  }
  window.onload = adjustMainPadding;
  window.onresize = adjustMainPadding;
}
