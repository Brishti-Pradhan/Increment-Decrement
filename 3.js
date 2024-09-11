const input = document.getElementById("inp");
const output=document.getElementById("out");
let result=0;
function reset(){
    result=0;
    output.value=result;
    input.value=0;

}
function increment(){
    if(input.value !=0){
        result=result + Number(input.value);
    }
    else{
        result +=1;
    }
    
    output.value=result;
}
function decrement(){
    if(result==0){
        result=0;
        alert("You can't decrease!");
    }
    else{
        result -=1;
    }
    output.value=result;

}