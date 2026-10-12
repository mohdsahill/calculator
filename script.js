let display=document.getElementById('input')
const displayData=(data)=>{
    display.value+=data
}

const removeLastItem=()=>{
    display.value=display.value.slice(0,-1)
}

const clearAll=()=>{
    display.value=""
}

// const result=()=>{
//     display.value= eval(display.value)
// }

const result=()=>{
    try{
    console.log("inside try");
    display.value=eval(display.value)
}
catch{
    console.log("inside catch");
    display.value="invalid expression"
    
}
finally{
    console.log("action completed");
    
}
}