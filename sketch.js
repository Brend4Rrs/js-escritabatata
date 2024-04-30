function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background('white');
    fill('black');
    textSize(30);
    textAlign(CENTER, CENTER);
    
    let maximo = width;
    let minimo = 0;
    //mouseX, 0, width ==> 0,palavra.length
    let palavra = 'batata';
    let quantidade = map( mouseX, 0, width, 0, palavra.length);
    console.log(quantidade);
    let parcial = palavra.substring(0,quantidade);
    text(parcial,200,200);
    
    // if(mouseX < 50) {
    //  let palavra = 'a'
    //   text(palavra, 200, 200);
    // } else if(mouseX<100) { 
    //  let palavra = 'am';
    //  text(palavra, 200, 200);
    //  } else {
    //   let palavra = "amor";
    //   text(palavra, 200, 200);
    // }
    
  }