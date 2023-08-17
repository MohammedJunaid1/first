let result = document.querySelector('input');
let string="";
let butts=document.querySelectorAll('button');
let arr=Array.from(butts);

arr.forEach((button) => {
    button.addEventListener("click", (e) =>{
        if(e.target.innerHTML== '='){
            string=eval(string);
            result.value=string;
        }
        else if(e.target.innerHTML== 'AC'){
            string="";
            result.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            result.value=string;
        }
        else{
            string=string+e.target.innerHTML;
            result.value=string;
        }
    })    
});






