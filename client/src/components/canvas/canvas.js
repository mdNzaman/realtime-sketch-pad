window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  //Resizing
//   window.addEventListener("resize, ")
  canvas.height = 700;
  canvas.width = 1200;

  //variable
  let painting = false;
   
  function startPosition(){
    painting = true;
    draw(e);
  }

  function finishedPosition(){
    painting = false;
    ctx.beginPath();
  }

  function draw(e){
    if(!painting) return;
    ctx.lineWidth = 5; //line thickness
    ctx.lineCap = "round";
    ctx.strokeStyle = "blue";  //line color

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  //EventListeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove",draw);

});
// window.addEventListener("resize, ")
console.log("hello");
