// your JavaScript file

//select the class you want add elements in
const container = document.querySelector('#container');

//div with some text
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);


// P element
const pElement = document.createElement('p');
container.classList.add('redText');
pElement.textContent = "Hey I'm red!";
pElement.style.cssText = "color: red";
container.appendChild(pElement);


// H3 element
const hElement = document.createElement('p');
container.classList.add('h3Text');
hElement.textContent = "I'm a blue h3!";
hElement.style.cssText = "color: blue";
container.appendChild(hElement);

// Div with black border and pink background
const newDiv = document.createElement('div2');
container.classList.add('div2');
newDiv.setAttribute('style', 'border-color: black; border-style: solid; background-color: pink');
container.appendChild(newDiv);

// H1 inside div2
const div2 = document.querySelector('div2');
const h1Element = document.createElement('h1');
h1Element.textContent = "I'm in a div";
div2.appendChild(h1Element);

// P inside div2
const p2Element = document.createElement('h1');
p2Element.textContent = "MEE TOO!";
div2.appendChild(p2Element);

// second event listener method
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// third event listener method
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

// button but with function call

function alertFunction() {
    alert("YAY! YOU DID IT!");
}
  
  // METHOD 2
  btn.onclick = alertFunction;
  
  // METHOD 3
  btn.addEventListener('click', alertFunction);