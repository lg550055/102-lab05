function name() {
  let userName = prompt('What is your name? ');
  document. write('Hello ' + userName);
}

function setColor() {

  let myColor = prompt('Which color would you like?');

  const w3c = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
  
  if (!w3c.includes(myColor)) {
    myColor = prompt('Which valid w3c color would you like?');
  } else {
    document.body.style.backgroundColor = `${myColor}`;
  }
}

function restore(){
  document.body.style.backgroundColor = "#10E6C5";
}

function azure() {
  setTimeout(function(){
    let color = confirm('Want to swith background to azure?');
  
    if (color) {
      document.body.style.backgroundColor = "azure";
    }
  }, 1000);
}