const changecolor = document.getElementById("changeColor")
const bodydiv = document.querySelector("body")
const allDiv = Array.from(document.querySelectorAll(".all"))





// function onchange(ele){
    // console.log(ele.target.value)
    // console.log(bodydiv.style.backgroundColor=ele.target.value)
    
// }

const onchange = (ele)=>{
    let getClass =  `.${ele.target.value}`
    // console.log(getClass)
    allDiv.forEach(div => {
        div.classList.add('d-none');
    });
    let selectedDiv = Array.from(document.querySelectorAll(getClass))
    selectedDiv.forEach(div=>{
        div.classList.remove('d-none')
    })
}







changecolor.addEventListener('change', onchange)