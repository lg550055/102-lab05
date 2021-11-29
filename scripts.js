function name() {
  let userName = prompt('What is your name? ');
  document.write('Hello ' + userName);
}

function setColor() {

  let myColor = prompt('Which color would you like?');

  const w3c = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
  
  if (!w3c.includes(myColor)) {
    while (!w3c.includes(myColor)) {
      myColor = prompt('Which valid w3c color would you like?');
    }
    
  } else {
    document.body.style.backgroundColor = `${myColor}`;
  }
}

function original(){
  document.body.style.backgroundColor = "#10E6C5";
}

function azure() {
  let azure = confirm('Want to switch background to azure?');
  
  if (azure) {
    document.body.style.backgroundColor = "azure";
  }
}

function logos() {
  const n = prompt('How many logos: 1-5?')
  for (let i=0; i<n; i++) {
    let img = document.createElement('img');
    img.src = "ghlogo.png";
    img.height = "90";
    document.getElementById("s2").appendChild(img);
  }
}