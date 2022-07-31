const checkbox = document.getElementById("checkbox");
const button = document.querySelector("button[type='submit']");
// console.log(button)
checkbox.disabled = true;
button.disabled = true;

const elements = document.querySelectorAll(".element");
const colorSelect = document.getElementById("select-color");
// console.log(colorSelect);


elements.forEach(function (element){
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.innerHTML = color;
    colorSelect.innerHTML = color;
})

function getRandomColor (){
    const letter = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++){
        color += letter[Math.floor(Math.random()*16)];
    }
    return color;
}
elements.forEach(function(element){
    element.addEventListener('click',function(){
      if(element.innerHTML === colorSelect.innerHTML){
          checkbox.checked = true;
        alert('You are human')
        button.disabled = false;
        button.classList.remove("btn-light")
        button.classList.add("btn-success");
      } else{
        alert("Verify that You are Human !")
        checkbox.checked = false;
        location.reload(true);
      }         
    })
})



