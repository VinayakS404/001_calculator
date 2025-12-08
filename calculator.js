  const calcJs = document.querySelector('.calculation-p');
  const ansJs = document.querySelector('.answer-p');

  const answers = {
    calcaltionText : '',
    currentAns : ''
  }  

  function inputNumber(text){
    answers.calcaltionText += text
    console.log(answers.calcaltionText)
    try{
      answers.currentAns = eval(x)
    }
    catch(e){
    }

    console.log(answers.currentAns)
    calcJs.innerText = answers.calcaltionText;

    try{
      ansJs.innerText = eval(answers.calcaltionText);
    }
    catch(e){
    }
    
  }
  function calculationBtn(){
    console.log(answers.calcaltionText)
    calcJs.innerText = eval(answers.calcaltionText);
    answers.calcaltionText = ''
    ansJs.innerText = '';
  }

  function clearScreen(){
    ansJs.innerText = '';
    calcJs.innerText = '';
    answers.calcaltionText = '';
    answers.calcaltionText = '';

  }