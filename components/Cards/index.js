// initial save
// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function createArticleCard(data) {
  // * deconstructing data
  const { headline, authorPhoto, authorName } = data;

  // create
  const cardContainer = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImageContainer = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardAuthorName = document.createElement("span");

  // append
  cardContainer.appendChild(cardHeadline);
  cardContainer.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImageContainer);
  cardImageContainer.appendChild(cardImage);
  cardAuthor.appendChild(cardAuthorName);

  // give class
  cardContainer.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImageContainer.classList.add("img-container");

  // textContent
  cardHeadline.textContent = headline;
  // * you had this set to cardImageContainer
  cardImage.src = authorPhoto;
  // cardImageContainer.src = imgSrc;
  cardAuthorName.textContent = authorName;

  // return
  return cardContainer;
}

// axios get part
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  // good
  // .then((response) => {
  //   const cardsContainer = document.querySelector(".cards-container");

  //   // * looping through response's object

  //   for (const item in response.data.articles) {
  //     // * iterating through one layer deeper where card data lives

  //     response.data.articles[item].forEach((article) => {
  //       // * appending function, passing data (article) to each card

  //       cardsContainer.append(createArticleCard(article));
  //     });
  //   }
  // })
  .then((response) => {
    const jsArray = response.data.articles.javascript;
    const bsArray = response.data.articles.bootstrap;
    const techArray = response.data.articles.technology;
    const jqArray = response.data.articles.jquery;
    const nodeArray = response.data.articles.node;

    jsArray.forEach((article) => {
      const newArticleCard = createArticleCard(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      const articleParent = document.querySelector("div.cards-container");
      articleParent.appendChild(newArticleCard);
    });

    bsArray.forEach((article) => {
      const newArticleCard = createArticleCard(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      const articleParent = document.querySelector("div.cards-container");
      articleParent.appendChild(newArticleCard);
    });

    techArray.forEach((article) => {
      const newArticleCard = createArticleCard(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      const articleParent = document.querySelector("div.cards-container");
      articleParent.appendChild(newArticleCard);
    });

    jqArray.forEach((article) => {
      const newArticleCard = createArticleCard(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      const articleParent = document.querySelector("div.cards-container");
      articleParent.appendChild(newArticleCard);
    });

    nodeArray.forEach((article) => {
      const newArticleCard = createArticleCard(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      const articleParent = document.querySelector("div.cards-container");
      articleParent.appendChild(newArticleCard);
    });
  })
  .catch((err) => {
    console.log(err);
  });
