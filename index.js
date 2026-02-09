const buttons = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const clear1 = document.getElementById("clear1");
const clear = document.getElementById("clear");
const equal = document.querySelector('.equal');
const signe  = document.querySelector('.signe');

clear.addEventListener("click", () => {
  result.textContent = "0";
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    result.textContent === "0"
      ? (result.textContent = button.id)
      : (result.textContent += button.id);

    const tableau = [...result.textContent];
    if(tableau.length > 13){
        alert('Limite de caractères atteinte');
        result.textContent = result.textContent.slice(0, -1);
    }
   
  });
});


clear1.addEventListener("click", () => {
  result.textContent = result.textContent.slice(0, -1);
});

equal.addEventListener("click", () => {
    try {
        result.textContent = eval(result.textContent);
    } catch (error) { 
        alert('Expression invalide');
    }
     const resultString = parseFloat(result.textContent).toFixed(2);
     result.textContent = resultString;

})

signe.addEventListener('click', () =>{
    if( parseInt(result.textContent) > 0){
        result.textContent = -parseFloat(result.textContent);
    } else {
         result.textContent = Math.abs(parseFloat(result.textContent));
    }
})





