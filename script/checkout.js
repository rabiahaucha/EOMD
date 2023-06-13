let products = [
    {
      id: 1,
      picture: "https://i.postimg.cc/dVJ9Gnfc/Screenshot-2023-06-08-130111.png",
      name: "skincare",
      title: "21 best retinol serums and creams, as recommended by dermatologists",
      cost: "Finding out which one of the best retinol serums is right for you isn't exactly the easiest thing in the world, even if you consider yourself a skincare guru. And although trial-and-error can certainly help you decide what skincare product works for your skin, this can be troublesome when you consider the fact that retinol serums aren't exactly the most affordable of products to begin with. Plus, once you finally do get your hands on one that suits you, you'll need to be extra careful with how you use it so as not to damage your skin's surface.",
    },
    {
      id: 2,
      picture: "https://i.postimg.cc/SxqpCFqQ/Screenshot-2023-06-08-130143.png",
      name: "skincare",
      title: "Here's exactly how to work out if you have sun damaged skin, according to dermatologists",
      cost: "Perhaps it was an accidental sunburn on holiday or you've had one too many picnics without reapplying your SPF50; The problem is, it also raises the question of what may be long-lasting sun damage of those inopportune naps in the midday sun – which can inevitably lead to sun damaged skin.Perhaps it was an accidental sunburn on holiday or you've had one too many picnics without reapplying your SPF50; maybe you've simply been enjoying the UK sunshine in your garden. The problem is, it also raises the question of what may be long-lasting sun damage ",
    },
    {
      id: 2,
      picture: "https://i.postimg.cc/Gm0mf5C6/Screenshot-2023-06-08-130129.png",
      name: "skincare",
      title: "11 best bronzing drops for the ultimate sun-kissed glow",
      cost: "Bronzing drops may not be the most obvious product to add to your skincare routine, but trust us when we tell you that you won't regret doing so. After all, a sun-kissed glow is a never a bad idea, especially during the summer. And considering that more often than not, the skin on our face doesn't get tanned as much as the rest of our body, it's fair to say that anyone can benefit from a bronzy boost. So whether you're simply looking to diversify your everyday look with a J-Lo-inspired glow, consider a bottle of bronzing drops your new best friend.",
    },
    {
      id: 2,
      picture: "https://i.postimg.cc/DfP0SKt6/Screenshot-2023-06-08-131059.png",
      name: "skincare",
      title: "33 best eye creams to tackle dark circles, fine lines and puffiness – tried and tested",
      cost: "No skincare routine is complete without one of the best eye creams, I think we can all agree on that. Forget what you thought you knew: you don't need to wait 'til you hit a certain age to start introducing eye creams into your daily routine. Instead, you should be slathering your under-eyes with one as early as possible (yes, even in your early 20s).",
    },
    {
      id: 2,
      picture: "https://i.postimg.cc/PxHPZ3fs/Screenshot-2023-06-08-104145.png",
      name: "skincare",
      title: "15 best night creams to repair and renew your skin while you sleep",
      cost: "Finding the best night creams for our skin can always be a challenge, despite how well-versed we are in nailing the perfect skincare routine. It's not like we're short of skincare products already: from the moisturising face creams and day creams we using in the morning to the eye creams, cleansers and toners we're applying at night",
    },
  ];
  let divChrome = document.querySelector("#product");
  products.forEach((reader) => {
    divChrome.innerHTML += `
    <div class="col-sm-2 col-lg-3 m-2">
       <div class="card cards-wrapper" style="width: 18rem;height:60rem;border: 3px solid black">
       <img class="card-img-top cardImg" src="${reader.picture}" alt="${reader.name}" loading="lazy" class="img-fluid">
       <h2 class="card-title">${reader.title}</h2>
       <p class="card-title price">${reader.cost}</p>
       <a href="https://www.glamourmagazine.co.uk/topic/skincare">
    <button id="see">Read More</button>
  </a>
       </div>
       </div>
       `;
  });
  function darkMode() {
    if (document.body.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "black";
    }
    console.log(document.body.style.backgroundColor);   
  }