const num_list = [];
let result_btn = document.getElementsByClassName("result")[0];  

//when all the buttons are clicked
const btn_selected = document.querySelectorAll(".nums");
console.log(btn_selected)

btn_selected.forEach(button => {
    button.addEventListener('click', () =>{
        result_btn.textContent= result_btn.textContent + button.value
    });  
    
});

// when "=" button is clicked
const equal_btn = document.querySelector(".equalto");
equal_btn.addEventListener('click',() =>{
    const result = eval(result_btn.textContent);
    result_btn.textContent = result;
})


//when AC button is clicked

const ac_btn = document.querySelector(".ac");
ac_btn.addEventListener("click", () =>{
    result_btn.textContent = " "
})

//when DEL button is clicked
const del_btn = document.querySelector(".del");
del_btn.addEventListener("click", () =>{
    const arr = Array.from(result_btn.textContent);
    console.log(arr)
    //const size = arr.length()
    const split_val = arr.pop()
    console.log(split_val)
    result_btn.textContent = arr.join('')
})


