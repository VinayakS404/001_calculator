  const calcJsElt = document.querySelector('.js-calculation-p');
  const ansJsElt = document.querySelector('.js-answer-p');

  const answers = {
    calcaltionText : '',
    currentAns : ''
  }  

  let bracketAry = [];
  let noBrackets = 0;
  const numAry = ['0','1','2','3','4','5','6','7','8','9'];

  function inputNumber(text){
    if(answers.calcaltionText.length < 15){
      if(text === '*' && answers.calcaltionText.at(-1) === '('){
        return
      }
      else if (numAry.includes(text) && answers.calcaltionText.at(-1) === ')'){
        addChar('*'+text);
      }
      else{
        addChar(text);
      }
    }
//    answers.calcaltionText = '123.123.123.123'
//    console.log(answers.calcaltionText)
/*
    try{
      answers.currentAns = eval(x)
    }
    catch(e){
    }
*/
    
    if( answers.calcaltionText.length > 12){
      calcJsElt.classList.remove('calculation-p');
      calcJsElt.classList.remove('calculation-p-change-9');
      calcJsElt.classList.add('calculation-p-change-12');
    }
    else if( answers.calcaltionText.length > 9){
      calcJsElt.classList.remove('calculation-p');
      calcJsElt.classList.add('calculation-p-change-9');
    }
    else{
      calcJsElt.classList.add('calculation-p');
      calcJsElt.classList.remove('calculation-p-change-9');
      calcJsElt.classList.remove('calculation-p-change-12');
    }
    calcJsElt.innerText = answers.calcaltionText.replaceAll('*','x');

    answersCalcPrint();
  }

  function calculationBtn(){
//    console.log(answers.calcaltionText)
    calcJsElt.innerText = eval(answers.calcaltionText);
    answers.calcaltionText = '';
    ansJsElt.innerText = '';
 //    calcJsElt.innerText = '123,123,123,123,123'
 //    ansJsElt.innerText = '123,123,123,123,123'
  }

  function clearScreen(){
    ansJsElt.innerText = '';
    calcJsElt.innerText = '';
    answers.calcaltionText = '';
    answers.calcaltionText = '';
    noBrackets = 0;
    bracketAry.length = 0;
  }

  function deleteChar(){
    answers.calcaltionText = answers.calcaltionText.slice(0,answers.calcaltionText.length-1);
    //console.log(answers.calcaltionText);
    calcJsElt.innerText = answers.calcaltionText.replaceAll('*','x');
    answersCalcPrint();
  }

  function changeUndefined(){
    if(answers.calcaltionText === ''){
      ansJsElt.innerText = ' ';
    }
    else{
      ansJsElt.innerText = eval(answers.calcaltionText);
    }
  }

  function addChar(text){
    const signAry = ['/','*','-','+'];
    const withSign = ['/','*'];

    if(((answers.calcaltionText === '' || 
      answers.calcaltionText === '-' || 
      answers.calcaltionText === '+') && withSign.includes(text))){
      return;
      //nothing :)
    }
    else{
      if(signAry.includes(answers.calcaltionText.at(-1)) && signAry.includes(text)){
        answers.calcaltionText = answers.calcaltionText.slice(0,answers.calcaltionText.length-1)+text;
        //  avoid <-+/x> together
      }
      else if(answers.calcaltionText.at(-1) === '.' && text === '.'){
        return;
      }
      else{
        answers.calcaltionText += text;
        //add char
      }
    }
    
  }
function BracketsOnclick() {
  const lastChar = answers.calcaltionText.at(-1);

  
/* if(lastChar === ')' || numAry.includes(lastChar)){
    addChar('*');
  }
*/
  if (
    noBrackets === 0 ||
    lastChar === '(' ||
    ['+','-','*','/'].includes(lastChar)
  ) {
    if(lastChar === ')'){
      addChar('*');
    }
    if(numAry.includes(lastChar)){
      addChar('*');
    }
    addChar('(');
    noBrackets++;
  }
  else if (numAry.includes(lastChar) && noBrackets > 0) {

    addChar(')');
    noBrackets--;
  }

  console.log(noBrackets)

  calcJsElt.innerText = answers.calcaltionText.replaceAll('*','x');
  ansJsElt.innerText = eval(answers.calcaltionText);
}

  function answersCalcPrint(){   
      
    try{
      changeUndefined();
    }
    catch(e){
      return;
    }
  }

  function signChanger(){
    if(answers.calcaltionText.slice(0,2) === '-('){
      answers.calcaltionText = answers.calcaltionText.slice(2,-1);
      calcJsElt.innerText = answers.calcaltionText.replaceAll('*','x');
      answersCalcPrint();
    }
    else{
    answers.calcaltionText  = '-(' + answers.calcaltionText + ')';
    calcJsElt.innerText = answers.calcaltionText.replaceAll('*','x');
    answersCalcPrint();
    }
  }