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

function createArticleCard(headline, author, imgSrc) {
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
  cardImageContainer.src = imgSrc;
  cardAuthorName.textContent = author;

  // return
  return cardContainer;
}

// axios get part
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  // good
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
  });

// {
//     "articles": {
//         "javascript": [ //? jsArray
//             {
//                 "headline": "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
//                 "authorPhoto": "./assets/sir.jpg",
//                 "authorName": "SIR RUFF'N'STUFF"
//             },
//             {
//                 "headline": "Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences",
//                 "authorPhoto": "./assets/bones.jpg",
//                 "authorName": "BONES R. LIFE"
//             },
//             {
//                 "headline": "When to Rest, When to Spread: Why There Are Two Meanings Behind '...'",
//                 "authorPhoto": "./assets/puppers.jpg",
//                 "authorName": "PUPPER S. DOGGO"
//             },
//             {
//                 "headline": "Typescript: Ten Things you Should Know Before Building Your Next Angular Application",
//                 "authorPhoto": "./assets/sir.jpg",
//                 "authorName": "SIR RUFF'N'STUFF"
//             }
//         ],
//         "bootstrap": [ //? bsArray
//             {
//                 "headline": "Bootstrap 5: Get a Sneak Peak at all the New Features",
//                 "authorPhoto": "./assets/fido.jpg",
//                 "authorName": "FIDO WALKSALOT"
//             },
//             {
//                 "headline": "UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)",
//                 "authorPhoto": "./assets/max.jpg",
//                 "authorName": "MAX GOODBOYE"
//             },
//             {
//                 "headline": "The Hottest New Bootstrap 4 Components Every Developer Needs to Know About",
//                 "authorPhoto": "./assets/max.jpg",
//                 "authorName": "MAX GOODBOYE"
//             }
//         ],
//         "technology": [ //? techArray
//             {
//                 "headline": "AI: What Are the Ethical Ramifications of the Future?",
//                 "authorPhoto": "./assets/max.jpg",
//                 "authorName": "MAX GOODBOYE"
//             },
//             {
//                 "headline": "AR or VR: How We Will See the World Through a Digital Lense",
//                 "authorPhoto": "./assets/max.jpg",
//                 "authorName": "MAX GOODBOYE"
//             },
//             {
//                 "headline": "Quantum Computing: Where we Are Now, and Where We Will Be Very Soon",
//                 "authorPhoto": "./assets/max.jpg",
//                 "authorName": "MAX GOODBOYE"
//             }
//         ],
//         "jquery": [ //? jqArray
//             {
//                 "headline": "History of Javascript Libraries: from jQuery to React",
//                 "authorPhoto": "./assets/puppers.jpg",
//                 "authorName": "PUPPER S. DOGGO"
//             },
//             {
//                 "headline": "jQuery Animations: When and Where to Use Them, and Not CSS",
//                 "authorPhoto": "./assets/fido.jpg",
//                 "authorName": "FIDO WALKSALOT"
//             },
//             {
//                 "headline": "Why I Use jQuery in Every Application I Create and Why You Should Too",
//                 "authorPhoto": "./assets/fido.jpg",
//                 "authorName": "FIDO WALKSALOT"
//             }
//         ],
//         "node": [ //? nodeArray
//             {
//                 "headline": "Node.js in 2018: Which Framework? Express, Sails, Hapi?",
//                 "authorPhoto": "./assets/sir.jpg",
//                 "authorName": "SIR RUFF'N'STUF"
//             },
//             {
//                 "headline": "MongoDB: NoSQL vs. SQL, the Debate Continues..",
//                 "authorPhoto": "./assets/bones.jpg",
//                 "authorName": "BONES R. LIFE"
//             }
//         ]
//     }
// }
