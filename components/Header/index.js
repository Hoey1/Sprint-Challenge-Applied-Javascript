// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(header, date, temp) {
  // create
  const headerContainer = document.createElement("div");
  const spanDate = document.createElement("span");
  const headerText = document.createElement("h1");
  const spanTemp = document.createElement("span");

  // append
  headerContainer.appendChild(spanDate);
  headerContainer.appendChild(headerText);
  headerContainer.appendChild(spanTemp);

  // class
  headerContainer.classList.add("header");
  spanDate.classList.add("date");
  spanTemp.classList.add("temp");

  // content
  headerText.textContent = header;
  spanDate.textContent = date;
  spanTemp.textContent = temp;

  // return
  return headerContainer;
}

let headerParent = document.querySelector("div.header-container");
let newHeaderObj = Header("Lambda Times", "SMARCH 28, 2019", "98°");
headerParent.appendChild(newHeaderObj);
