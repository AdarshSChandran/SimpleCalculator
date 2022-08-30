function displayNum(num){
    result.value+=num
}
function allClear(){
    result.value=""
}
function evaluateExp(){
    // exp=result.value
    // out=eval(exp)
    // result.value=out
    result.value=eval(result.value)
}
// slice method for string
 // s="luminar"
// s.slice(0,-1) -- the output will be "lumina"
function removeElement(){
    curExp=result.value
    result.value=curExp.slice(0,-1)
}