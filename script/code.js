function darkMode() {
    if (document.body.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "black";
    }
    console.log(document.body.style.backgroundColor);   
  }

  const myCarouselElement = document.querySelector('#myCarousel')

  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
  })
//   const carousel = new bootstrap.Carousel('#myCarousel')