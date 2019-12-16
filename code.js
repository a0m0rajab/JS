function setColour() {
  let x = Result.style.backgroundColor = `RGB(${Rc.value},${Gc.value},${Bc.value})`;
  console.log(x);
}
function setColourHSL() {
  ResultHSL.style.backgroundColor = `hsl(${Hc.value},${Sc.value}%,${Lc.value}%)`;
}
function getColour(target) {
  let bc = target.style.backgroundColor;
  let numArr = bc.slice(4, -1).split(",");
  numArr = numArr.map(function (x) { 
    return parseInt(x, 10); 
  });
  return numArr;
}

function compare(source,target,hata=50) {
    let s = getColour(source)
    let t = getColour(target)
    let result =[];
    let biRes=[];
    for (let i = 0; i < s.length; i++) {
        if(s[i] < t[i]-hata){
            result.push("up")
            biRes.push(false)
        }
        else if(s[i] > t[i]+hata){
            result.push("down")
            biRes.push(false)
        }
        else{
          biRes.push(true)
          result.push(true)
        }
        
    }
    // TODO move to JSon, better to understand.
    return [result,biRes]
}

function greenKey(){
    
}