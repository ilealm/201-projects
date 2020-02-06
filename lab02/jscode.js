'use strict';


  var guestName;
  var askSoccer, askCats, askTDK, askRun, askKids;
  var msgValidation, answerMsg, answerMsgDoc;
  
  // asking user´s name
  guestName = prompt('Hi there!\nWhat\'s your name?');
  
  alert('Great to have you here ' + guestName + 
       '! \n\nLet\'s play a game! I will ask you 5 yes/no questions about me and at the end we will see how you correct you was :-D');
  
  // asking 5 questions
  
  askSoccer = prompt('Do you think I love soccer?\nyes/no');
  askCats = prompt('What do you thing I would preffer dog over cats?');
  askTDK = prompt('Do you believe I enjoy TDK matches?');
  askRun = prompt('Do you think I\'m a long distance runner?');
  askKids = prompt('Do you believe I have 4 kids?');
  
  // console login aswers
  console.log('User name ' + guestName);
  console.log('Do you think I love soccer? ' + askSoccer);
  console.log('What do you thing I would preffer dog over cats? ' + askCats);
  console.log('Do you believe I enjoy TDK matches? ' + askTDK);
  console.log('Do you think I\'m a long distance runner? ' + askRun);
  console.log('Do you believe I have 4 kids? ' + askKids);
  
  
  // validate the user's inputs
  // TODO: convert this to a function
  msgValidation ='';
  
  
  if (((askSoccer.trim().toLowerCase()!== 'yes') && (askSoccer.trim().toLowerCase()!== 'no')) 
    && ((askSoccer.trim().toLowerCase()!== 'y') && (askSoccer.trim().toLowerCase()!== 'n'))){ 
    msgValidation = msgValidation + "\n- Answer with yes or no to the soccer question."; 
  };
  
  if (((askCats.trim().toLowerCase()!== 'yes') && (askCats.trim().toLowerCase()!== 'no')) 
    && ((askCats.trim().toLowerCase()!== 'y') && (askCats.trim().toLowerCase()!== 'n'))){ 
    msgValidation = msgValidation + "\n- Answer with yes or no to the dog/cat question."; 
  };
  
  if (((askTDK.trim().toLowerCase()!== 'yes') && (askTDK.trim().toLowerCase()!== 'no')) 
    && ((askTDK.trim().toLowerCase()!== 'y') && (askTDK.trim().toLowerCase()!== 'n'))){ 
    msgValidation = msgValidation + "\n- Answer with yes or no to the TDK matches question."; 
  };
  
  if (((askRun.trim().toLowerCase()!== 'yes') && (askRun.trim().toLowerCase()!== 'no')) 
    && ((askRun.trim().toLowerCase()!== 'y') && (askRun.trim().toLowerCase()!== 'n'))){ 
    msgValidation = msgValidation + "\n- Answer with yes or no to the running question."; 
  };
  
  if (((askKids.trim().toLowerCase()!== 'yes') && (askKids.trim().toLowerCase()!== 'no')) 
    && ((askKids.trim().toLowerCase()!== 'y') && (askKids.trim().toLowerCase()!== 'n'))){ 
    msgValidation = msgValidation + "\n- Answer with yes or no to the 4 kids question."; 
  };
  
  console.log(msgValidation);
  
  if (msgValidation!==''){
    msgValidation = 'Oh no! there are some mistakes in the answers:\n' + msgValidation + '\n\nPlease reload the page and try again.'
    alert(msgValidation);
  }
  else{
    // alert the user answers
    answerMsg = 'Let\'s see how correct you are ' + guestName + '\n';
    answerMsgDoc = 'Let\'s see how correct you are <b>' + guestName + '!!</b>';
    
    if ((askSoccer.trim().toLowerCase()=== 'yes') || (askSoccer.trim().toLowerCase()=== 'y')){ 
      answerMsg = answerMsg + "\nAbout soccer, you said YES. Sorry! I don\'t like soccer..."; 
      answerMsgDoc = answerMsgDoc + "<br>About soccer, you said <b>YES</b>. Sorry! I don\'t like soccer..."; 
    }
    else {
      answerMsg = answerMsg + "\nAbout soccer, You said NO. That\s right! I don\'t like soccer..."; 
      answerMsgDoc = answerMsgDoc + "<br>About soccer, You said <b>NO</b>. That\s right! I don\'t like soccer..."; 
    }
  
    if ((askCats.trim().toLowerCase()=== 'yes') || (askCats.trim().toLowerCase()=== 'y')){ 
      answerMsg = answerMsg + "\nAbout pets, you said YES. Nope! I prefer cats..."; 
      answerMsgDoc = answerMsgDoc + "<br>About pets, you said <b>YES</b>. Nope! I prefer cats..."; 
    }
    else {
      answerMsg = answerMsg + "\nAbout pets, you said NO. That\'s correct! I prefer cats..."; 
      answerMsgDoc = answerMsgDoc + "<br>About pets, you said <b>NO</b>. That\'s correct! I prefer cats..."; 
    }
  
    if ((askTDK.trim().toLowerCase()=== 'yes') || (askTDK.trim().toLowerCase()=== 'y')){ 
      answerMsg = answerMsg + "\nAbout TDK, you said YES. Rigth! I love TDK, I\'m a black belt..."; 
      answerMsgDoc = answerMsgDoc + "<br>About TDK, you said <b>YES</b>. Right! I love TDK, I\'m a black belt..."; 
    }
    else {
      answerMsg = answerMsg + "\nAbout TDK, you said NO... I reality love it and I\'m a black belt..."; 
      answerMsgDoc = answerMsgDoc + "<br>About TDK, you said <b>NO</b>... I reality love it and I\'m a black belt..."; 
    }
   
    if ((askRun.trim().toLowerCase()=== 'yes') || (askRun.trim().toLowerCase()=== 'y')){ 
      answerMsg = answerMsg + "\nAbout running, you said YES. I\'m not, so far I ran a 21k..."; 
      answerMsgDoc = answerMsgDoc + "<br>About running, you said <b>YES</b>. I\'m not, so far I ran a 21k..."; 
    }
    else {
      answerMsg = answerMsg + "\nAbout runnning, you said NO... You\'re right! my longest distance is 21k..."; 
      answerMsgDoc = answerMsgDoc + "<br>bout runnning, you said <b>NO</b>... You\'re right! my longest distance is 21k..."; 
    }
  
    if ((askKids.trim().toLowerCase()=== 'yes') || (askKids.trim().toLowerCase()=== 'y')){ 
      answerMsg = answerMsg + "\nAbout kids, you said YES. God no! I only have two..."; 
      answerMsgDoc = answerMsgDoc + "<br>About kids, you said <b>YES</b>. God no! I only have two..."; 
    }
    else {
      answerMsg = answerMsg + "\nAbout kids, you said NO... Right answer! I have two kids..."; 
      answerMsgDoc = answerMsgDoc + "<br>About kids, you said <b>NO</b>... Right answer! I have two kids..."; 
    }
  
    answerMsg = answerMsg + '\n\nThanks for playing '+ guestName;
    console.log(answerMsg);
    alert(answerMsg)
  } // if (msgValidation!=='')

  if (answerMsgDoc.valueOf() !== 'undefined') {
    document.write(answerMsgDoc);
  }
 









