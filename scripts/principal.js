


// ---------------------- SELECCIÓN DE PERSONAJES ---------------------------

  let pButton1 = document.getElementById("duman");
  let pButton2 = document.getElementById("lost_souls");
  let pButton3 = document.getElementById("the_guardian");
  let pButton4 = document.getElementById("nonexistent_souls");


  let imgchange = document.getElementById("imgchange");
  let imgchange2 = document.getElementById("imgchange_2");
  let txtchange = document.getElementById("txtchange");

  pButton1.onclick = function(){
    imgchange.src = 'images/duman.png';
    imgchange2.style.display = 'none';
    txtchange.innerHTML = "<h4> DUMAN </h4> <br><br> <p>Un pescador con ceguera <br> Conoce todos los caminos del bosque </p>"

  }

  pButton2.onclick = function(){
    imgchange.src = 'images/souls.png';
    imgchange2.style.display = 'none';
    txtchange.innerHTML = "<h4> LOST SOULS </h4> <br><br> <p>Almas confundidas por su propia inesperada existencia <br> Perdidos en el bosque sin poder conocer su identidad </p>"
  }

  pButton3.onclick = function(){
    imgchange.src = 'images/the_guardian.png';
    imgchange2.style.display = 'none';
    txtchange.innerHTML = "<h4> THE GUARDIAN </h4> <br><br> <p>Un ser pacífico del bosque <br> Su misión es guiar las almas</p>"

  }

  pButton4.onclick = function(){
    imgchange.src = 'images/la_creatura.png';
    imgchange2.src = 'images/honguito.png';
    imgchange2.style.display = 'block';
    txtchange.innerHTML = "<h4> ??? </h4> <br><br> <p>Cuidado, estas criaturas pueden ser peligrosas...<br> ¿O no?, tú decides</p>"
  }

// ------------------------ COMENTARIOS ---------------------------------

  let container = document.getElementById("container");
  let nameInput = document.getElementById("box_name");
  let commentInput = document.getElementById("box_comment");
  let sButton = document.getElementById("submit");

  sButton.addEventListener('click', function(){
    
    let name = nameInput.value;
    let comment = commentInput.value;

    if(name != "" && comment != ""){

      let commentElement = document.createElement("div");
      commentElement.innerHTML = `${name} comenta: <br> ${comment} <br><br>`;

      container.appendChild(commentElement, container);
      console.log(container.innerHTML);

      localStorage.setItem("box", container.innerHTML);
      console.log(localStorage.getItem("box"));

      nameInput.value = "";
      commentInput.value = "";
    }
  })

  if(localStorage.getItem("box") != null){
  container.innerHTML = localStorage.getItem("box");
  }else{
    console.log("null");
  }

