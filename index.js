let main = document.querySelector('main');
let input = document.getElementById('st');

let but = document.querySelector("button.add-h1s");
but.addEventListener('click', () => {
  let h1Tag = document.createElement("h1");
  let text = input.value.toString();

  input.value = '';  
  h1Tag.textContent = text;
  main.appendChild(h1Tag);
});

let but2 = document.querySelector("button.clear-h1s");
but2.addEventListener('click', () => {
  let h1Tag = document.querySelector('h1');

  main.removeChild(h1Tag);
});