// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);


// make an unordered list
// add three list items with the words "one, two three" in them
const ul = 
`<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>`;
// put that list into the above wrapper
myDiv.innerHTML = ul;


// create an image
const myImage = document.createElement('img');
// set the source to an image
myImage.src = 'https://picsum.photos/100';
// set the width to 250
myImage.width = 250;
myImage.height = 250;
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(myImage);



// with HTML string, make a div, with two paragraphs inside of it
const myHTML = 
`<div class="newDiv">
<p>paragraph one</p>
<p>paragraph two</p>
</div>`;
// put this div before the unordered list from above...
// First you must grab the ul Element...
const ulElement = myDiv.querySelector('ul');
console.log(ulElement);
// Now that you have a way to access the ul(const ulElement), you can insert the div with the two <p> elements in it(const myHTML) before the ul(ulElement) ...
ulElement.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
const newDiv = myDiv.querySelector('.newDiv');
console.log(newDiv.children[1]);
newDiv.children[1].classList.add('warning');
// remove the first paragraph
newDiv.firstElementChild.remove();



// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height,) {
    const playerCard = document.createElement('div');
    const HTML = 
        `<div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>They are ${height * 2.54} centimeters tall and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
            <button class="delete" type="button">&times; Delete</button>
        </div>`;
    return HTML;
};




// make a new div with a class of cards
//   DIV CREATED FOR CARDS!!!
const cards = document.createElement('div'); 
cards.classList.add('cards');


// Have that function make 4 cards
let cardsHTML = generatePlayerCard('Andrew', 34, 72);
cardsHTML += generatePlayerCard('Dee', 47, 60);
cardsHTML += generatePlayerCard('John', 55, 48);
cardsHTML += generatePlayerCard('Jane', 24, 84);

// put the div into the DOM just before the wrapper element
cards.innerHTML = cardsHTML;
myDiv.insertAdjacentElement('beforebegin', cards);
//  Another Option...
// cards.insertAdjacentHTML('afterbegin', generatePlayerCard('Andrew', 34, 72));
// console.log(cardsHTML);
// append those cards to the div
// document.getElementsByClassName('cards');
// document.body.appendChild(cards);
// 



// Bonus, put a delete Button on each card so when you click it, the whole card is removed

//   Close, but not the correct way to do it...

// const btnDelete = document.createElement('button');
// function addelement(cardsHtml, ) {
//     let p = document.getElementById(cardsHTML);
//     const newElement = document.createElement(elementTag);
//     newElement.setAttribute('id', elementId);
//     newElement.innerHTML = html;
//     p.appendChild(newElement);
// }

// function deleteCard() {
//     addEventListener('click'); 
//     onclick.remove(cardsHTML);
// };

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
console.log(buttons);
// make a delete function
function deleteCard(event) {
    const buttonThatGotClicked = event.currentTarget;
    buttonThatGotClicked.parentElement.remove();
    // console.log(event.currentTarget);
        // Alternative way of deleting the cards...
    // buttonThatGotClicked.closest('.playerCard').remove();
};
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));

