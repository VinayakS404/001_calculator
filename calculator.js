  const calcJsElt = document.querySelector('.js-calculation-p');
  const ansJsElt = document.querySelector('.js-answer-p');

  const answers = {
    calcaltionText : '',
    currentAns : ''
  }  

  function inputNumber(text){
    if(answers.calcaltionText.length < 15){
      answers.calcaltionText += text
    }
//      answers.calcaltionText = '123.123.123.123'
//    console.log(answers.calcaltionText)
/*
    try{
      answers.currentAns = eval(x)
    }
    catch(e){
    }
*/
    
    if( answers.calcaltionText.length > 12){
      calcJsElt.classList.remove('calculation-p')
      calcJsElt.classList.remove('calculation-p-change-9')
      calcJsElt.classList.add('calculation-p-change-12')
    }
    else if( answers.calcaltionText.length > 9){
      calcJsElt.classList.remove('calculation-p')
      calcJsElt.classList.add('calculation-p-change-9')
    }
    else{
      calcJsElt.classList.add('calculation-p')
      calcJsElt.classList.remove('calculation-p-change-9')
      calcJsElt.classList.remove('calculation-p-change-12')
    }
    calcJsElt.innerText = answers.calcaltionText.replaceAll('*','x');

    try{
      ansJsElt.innerText = eval(answers.calcaltionText);
    }
    catch(e){}
  }

  function calculationBtn(){
//    console.log(answers.calcaltionText)
    calcJsElt.innerText = eval(answers.calcaltionText);
    answers.calcaltionText = ''
    ansJsElt.innerText = '';
 //    calcJsElt.innerText = '123,123,123,123,123'
 //    ansJsElt.innerText = '123,123,123,123,123'
  }

  function clearScreen(){
    ansJsElt.innerText = '';
    calcJsElt.innerText = '';
    answers.calcaltionText = '';
    answers.calcaltionText = '';

  }
