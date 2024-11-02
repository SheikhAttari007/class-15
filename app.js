// function foo(){
//     console.log(foo)
// }
// function foo(img){
//     // console.log(flag,ele)
//     var img = document.getElementById("img")
//     console.log(img)
//     img.src = "./images/image2.gif"
//     img.src = "./images/carImage.jfif"
//     // console.log(img.src)

// }
function inputFocus(inputEle){
    // var input = document.getElementById("input")
    // console.log(input.value)
    inputEle.style.outline = "none"
    inputEle.style.border = "1px solid blue"
    
}
function inputValidate(inputEle){
    // var input = document.getElementById("input")
    // console.log(input)
    var nameError = document.getElementById("nameError")
    if(inputEle.value.length < 3){
       inputEle.style.outline = "none"
       inputEle.style.border = "1px solid red"
       nameError.style.display = "block"
       nameError.style.color = "red"

       nameError.innerHTML = "Enter Correct Name"

    // }else{
    //     inputEle.style.border ="1px solid green"
    //     nameError.style.display ="none"
    }
}
 function formSubmit(){
    var input = document.getElementById("input")
    var nameError = document.getElementById("nameError"  )
    if(input.value.length < 3){
       input.style.outline = "none"
       input.style.border = "1px solid red"
       nameError.style.display = "block"
       nameError.innerHTML = "Enter Correct Name!"
    }else{
        nameError.innerHTML = "FORM SUBMITTED"
        nameError.style.color = "white"
        nameError.style.display = "block"  
    }
 }

 function bigImg(){
    var carImage = document.getElementById("carImage")
    console.log(carImage)
    carImage.className +=  "bigImg"
 }

 var paras = document.getElementsByTagName("p")
    for(var i=0;i< paras.length; i++){
     if((i + 1) % 2 === 0){
      paras[i].style.color = "red"
     }else{
        paras[i].style.color = "green";
     }
    }
 