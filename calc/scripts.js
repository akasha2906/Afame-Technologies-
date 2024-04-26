let firstnum=0;
let secondnum=''
let total=0
let operator=''
let num2;
let display=document.getElementById("display")
function numbers(num){
        secondnum+=num
        // console.log(secondnum);   
        display.innerText=secondnum
}

function operation(sym){
    // console.log("sec="+secondnum);   
    if (secondnum=='') {
        num2=0  
    }
    else {
        num2=parseFloat(secondnum)
        // console.log("num2="+num2);
    }

    if(operator=='+'){
        firstnum+=num2
        // console.log("add="+firstnum);
        secondnum=''
    }

    else if(operator=='-'){
        firstnum-=num2
        // console.log("sub="+firstnum);
        secondnum=''
    }

    else if(operator=='*'){
        firstnum*=num2
        // console.log("mul="+firstnum);
        secondnum=''
    }

    else if(operator=='/'){
        firstnum/=num2
        // console.log("div="+firstnum);
        secondnum=''
    }

    if(firstnum==0)
    {
        firstnum=num2
        secondnum=''

        // console.log("first="+firstnum);
    }
    operator=sym

// console.log(firstnum,secondnum,operator);
display.innerText=firstnum
}

function clearDisplay(){
    firstnum=0;
    secondnum=''
    total=0
    operator=''
    display.innerText=0
}