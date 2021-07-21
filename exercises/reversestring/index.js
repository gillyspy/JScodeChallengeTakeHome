// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {

  const backwardStr = [...str].reverse().join('');
  return backwardStr;
}

function reverse2(str){
  const backwardStr =  [...str].reduce( (reduction,value)=>{
    return value + reduction;
  });

  return backwardStr;
}

function reverse3(str){

}

const reverse = reverse2;



module.exports = reverse;
