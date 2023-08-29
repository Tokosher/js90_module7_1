
// ******* Додавання прослуховувача подій на кожен елемент ******* \\
// Отримай колір квадратика по якому було здійснено клік

// const container = document.querySelector('.js-container');

// [...container.children].forEach(box => {
//     box.addEventListener('click', handleClick);
// })

// function handleClick (event) {
//     console.log(event.currentTarget.dataset.color);
// }


// ************** Дегегування подій ************** \\
// Отримай колір квадратика по якому було здійснено клік

// const container = document.querySelector('.js-container');

// container.addEventListener('click', handleClick);

// function handleClick(event) {
//     if (!event.target.classList.contains('js-box')) {
//         return;
//     }

//     const color = event.target.dataset.color;
//     console.log('Color: ' + color)
// }



// **************** stopPropagation **************** \\

// const red = document.querySelector(".js-box-red");
// const green = document.querySelector(".js-box-green");
// const black = document.querySelector(".js-box-black");

// red.addEventListener('click', handlerClick);
// green.addEventListener('click', handlerClick);
// black.addEventListener('click', handlerClick)

// function handlerClick(evt) {
//     console.log(evt.currentTarget);
//   const isConfirm = confirm(`click на елементі ${evt.currentTarget.id} ,викликати метод stopPropagation?`)

  
//   if (isConfirm) {
//     evt.stopPropagation();
//   }
// }




// **************** Практика **************** \\
// Створи картки з товарами на основі масиву products, приклад картки https://prnt.sc/KmgDlzqOIA3M
// Реалізуй делегування подій на колекції карток
// Після кліку на картку повинно з'являтись модальне вікно з детальною інформацією про продукт, приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
// Для реалізації модального вікна використай бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)

const products = [
    {
      id: 1,
      img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
      name: "Монітор",
      price: 3000,
      description: "23-дюймовий монітор з Full HD роздільною здатністю.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
      name: "Ноутбук",
      price: 20000,
      description: "Легкий та потужний ноутбук з 15-дюймовим дисплеєм та SSD.",
    },
    {
      id: 3,
      img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
      name: "Смартфон",
      price: 8000,
      description: "Оснащений потрійною камерою та багатоядерним процесором.",
    },
    {
      id: 4,
      img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
      name: "Планшет",
      price: 12000,
      description:
        "10-дюймовий планшет з високою продуктивністю та Retina дисплеєм.",
    },
  ];

  const container = document.querySelector('.js-products');
  const markup = createMarkup(products)
  
  container.insertAdjacentHTML('beforeend', markup);
  container.addEventListener('click', handleProductClick);

  function createMarkup (arr) {
    return arr.map(({ id, img, name, price }) => {
      return `<li data-id="${id}" class="item js-product-item">
      <img src="${img}" alt="${name}" />
      <h2>${name}</h2>
      <p>Ціна: ${price} грн</p>
      </li>`
    }).join('');
  };

  function handleProductClick (event) {
    if (event.target === event.currentTarget) {
      return;
    }
    const targetElement = event.target.closest('.js-product-item');
    const productId = targetElement.dataset.id;
    const productInfo = products.find(product => product.id === Number(productId))
    
    const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${productInfo.img}" alt="${productInfo.name}" />
      <h3>${productInfo.name}</h3>
      <h4>${productInfo.price} грн</h4>
      <p>${productInfo.description}</p>
      </div>
    `);

    instance.show();
  };
 