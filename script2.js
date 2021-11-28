setTimeout(function(){
  let color = confirm('Want to swith background to azure?');

  if (color) {
    document.body.style.backgroundColor = "azure";
  }

  setTimeout(function(){
    let myColor = prompt('A different color; which color?');
  
    document.body.style.backgroundColor = `${myColor}`;
  }, 2000);

}, 1500);