

  const productAdd = document.querySelectorAll(".product__add");
  productAdd.forEach((element) => {
    element.addEventListener("click", (e) => {
      // console.log(document.querySelector(".cart"));
      if (document.querySelector(".cart") === null) {
        const cart = document.createElement("div");
        cart.classList.add("cart", "center");
        cart.id = "cartId";
        const cartH3 = document.createElement("h3");
        cartH3.textContent = "Cart Items";
        cart.append(cartH3);
        const advant = document.querySelector(".advantages");
        advant.insertAdjacentElement("afterend", cart);
      } else e.stopPropagation();
    });
  });
  productAdd.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (document.querySelector(".cart") !== null) {
        const productEl = element.parentElement;
        const productEl2 = productEl.cloneNode(true);
        const vector = document.createElement("img");
        vector.src = "img/vector.svg";
        vector.alt = "";
        vector.classList.add("vector");
        productEl2.appendChild(vector);
        productEl2.classList.add("product2");
        const cart = document.querySelector(".cart");
        cart.appendChild(productEl2);
        vector.addEventListener("click", (e) => {
          const prodArray = document.querySelectorAll(".product2");
          if (prodArray.length > 1) cart.removeChild(productEl2);
          else cart.remove();
        });
      }
    });
  });
  
  const featuredItems = `[
    {
      "img": "./img/product1.jpg",
      "h3": "ELLERY X M'O CAPSULE",
      "p1": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
      "p2": "$52.00"
    },
    {
      "img": "./img/product2.jpg",
      "h3": "ELLERY X M'O CAPSULE",
      "p1": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
      "p2": "$52.00"
    },
    {
      "img": "./img/product3.jpg",
      "h3": "ELLERY X M'O CAPSULE",
      "p1": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
      "p2": "$52.00"
    },
    {
      "img": "./img/product4.jpg",
      "h3": "ELLERY X M'O CAPSULE",
      "p1": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
      "p2": "$52.00"
    },
    {
      "img": "./img/product5.jpg",
      "h3": "ELLERY X M'O CAPSULE",
      "p1": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
      "p2": "$52.00"
    },
    {
      "img": "./img/product6.jpg",
      "h3": "ELLERY X M'O CAPSULE",
      "p1": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
      "p2": "$52.00"
    }
  ]`;