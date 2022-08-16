window.onload = async function (e) {
  /***
   * fetching the API and data
   */
  let data = await fetch("http://localhost:3000/data");
  data = await data.json();
  const courses = data.courses;

  /**
   * DOM Manipulations
   */
  const cardsContainer = document.getElementById("cards-container");
  let cards = [];
  courses.forEach((element) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("course-card");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", element.image);

    const cardTitle = document.createElement("h4");
    const titleText = document.createTextNode(element.course_title);
    cardTitle.classList.add("card-title");
    cardTitle.appendChild(titleText);

    const cardAuthor = document.createElement("p");
    const authorText = document.createTextNode(element.author);
    cardAuthor.classList.add("card-author");
    cardAuthor.appendChild(authorText);

    const cardPrice = document.createElement("div");
    const priceText = document.createTextNode(element.price);
    cardPrice.classList.add("card-price");
    cardPrice.classList.add("font-bold");
    cardPrice.appendChild(priceText);

    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardAuthor);
    cardDiv.appendChild(cardPrice);

    cardsContainer.appendChild(cardDiv);
    cards.push(cardDiv);
  });
  console.log(cards);
};
