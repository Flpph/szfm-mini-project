const imageFileInput = document.querySelector("#imageFileInput");
const canvas = document.querySelector("#meme");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");

const randomizalo = document.querySelector("#randomizalo");

let image;
const memes = ["images/memealapok/1.jpg", "images/memealapok/2.jpg", "images/memealapok/3.jpg", "images/memealapok/4.jpg", "images/memealapok/5.jpg", "images/memealapok/6.jpg", "images/memealapok/8.jpg", "images/memealapok/9.jpg", "images/memealapok/10.jpg"];

function RandomKep(){
    var rnd = Math.floor((Math.random() * 10)+1);
    return "images/memealapok/"+rnd+".jpg";
}

randomizalo.onclick = function(e){
  const imageDataUrl = RandomKep();

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener(
    "load",
    () => {
      updateMemeCanvas(
        canvas,
        image,
        topTextInput.value,
        bottomTextInput.value
      );
    },
    { once: true }
  );
};

imageFileInput.addEventListener("change", (e) => {
  const imageDataUrl = URL.createObjectURL(e.target.files[0]);

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener(
    "load",
    () => {
      updateMemeCanvas(
        canvas,
        image,
        topTextInput.value,
        bottomTextInput.value
      );
    },
    { once: true }
  );
});



async function DownloadMeme(){
  var username= document.getElementById("username").value;
  
  if(username==""){
    alert("Felhasználónév vagy kép nemtalálható!");
    return;
  }
  var canvas = document.getElementById("meme");
  var img = canvas.toDataURL("image/png");

  let imageBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));

  let formData = new FormData();
  formData.append("username", username);
  formData.append("file", imageBlob, "image.png");

  let response = await fetch('http://95.138.193.85:3000/api/image/generate', {
    method: 'POST',
    body: formData
  });
  let result = await response.json();
  window.open(result.path, "_blank");
}

topTextInput.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

bottomTextInput.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

function updateMemeCanvas(canvas, image, topText, bottomText) {
  const ctx = canvas.getContext("2d");
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 10);
  const yOffset = height / 25;

  // Update canvas background
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);

  // Prepare text
  ctx.strokeStyle = "black";
  ctx.lineWidth = Math.floor(fontSize / 4);
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineJoin = "round";
  ctx.font = `${fontSize}px sans-serif`;

  // Add top text
  ctx.textBaseline = "top";
  ctx.strokeText(topText, width / 2, yOffset);
  ctx.fillText(topText, width / 2, yOffset);

  // Add bottom text
  ctx.textBaseline = "bottom";
  ctx.strokeText(bottomText, width / 2, height - yOffset);
  ctx.fillText(bottomText, width / 2, height - yOffset);
}
