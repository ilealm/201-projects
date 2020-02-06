'use strict';


  var guestName;
  var askSoccer, askCats, askTDK, askRun, askKids;
  var msgValidation, answerMsg, answerMsgDoc;
  var userScore;
  
  // asking user´s name
  guestName = prompt('Hi there!\nWhat\'s your name?');
  
  alert('Great to have you here ' + guestName + 
       '! \n\nLet\'s play a game! I will ask you 5 yes/no questions about me and at the end we will see how you correct you was :-D');
  
  // asking 5 questions
  userScore =0;
  askSoccer = prompt('1. Do you think I love soccer?\nyes/no');
  askCats = prompt('2. What do you thing I would preffer dog over cats?');
  askTDK = prompt('3. Do you believe I enjoy TDK matches?');
  askRun = prompt('4. Do you think I\'m a long distance runner?');
  askKids = prompt('5. Do you believe I have 4 kids?');
  
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
    // TODO create a function for the next part of the questions
  }
  else{
    // alert the user answers
    answerMsg = 'Let\'s see how correct you are ' + guestName + '\n';
    answerMsgDoc = 'Let\'s see how correct you are <b>' + guestName + '!!</b>';
    
    if ((askSoccer.trim().toLowerCase()=== 'yes') || (askSoccer.trim().toLowerCase()=== 'y')){ 
      answerMsg = answerMsg + "\nAbout soccer, you said YES. Sorry! I don\'t like soccer..."; 
      answerMsgDoc = answerMsgDoc + "<br>1. About soccer, you said <b>YES</b>. Sorry! I don\'t like soccer..."; 
    }
    else {
      answerMsg = answerMsg + "\nAbout soccer, You said NO. That\s right! I don\'t like soccer..."; 
      answerMsgDoc = answerMsgDoc + "<br>1. About soccer, You said <b>NO</b>. That\s right! I don\'t like soccer..."; 
      userScore++;
    }
  
    if ((askCats.trim().toLowerCase()=== 'yes') || (askCats.trim().toLowerCase()=== 'y')){ 
      answerMsg = answerMsg + "\nAbout pets, you said YES. Nope! I prefer cats..."; 
      answerMsgDoc = answerMsgDoc + "<br>2. About pets, you said <b>YES</b>. Nope! I prefer cats..."; 
    }
    else {
      answerMsg = answerMsg + "\nAbout pets, you said NO. That\'s correct! I prefer cats..."; 
      answerMsgDoc = answerMsgDoc + "<br>2. About pets, you said <b>NO</b>. That\'s correct! I prefer cats..."; 
      userScore++;
    }
  
    if ((askTDK.trim().toLowerCase()=== 'yes') || (askTDK.trim().toLowerCase()=== 'y')){ 
      answerMsg = answerMsg + "\nAbout TDK, you said YES. Rigth! I love TDK, I\'m a black belt..."; 
      answerMsgDoc = answerMsgDoc + "<br>3. About TDK, you said <b>YES</b>. Right! I love TDK, I\'m a black belt..."; 
      userScore++;
    }
    else {
      answerMsg = answerMsg + "\nAbout TDK, you said NO... I reality love it and I\'m a black belt..."; 
      answerMsgDoc = answerMsgDoc + "<br>3. About TDK, you said <b>NO</b>... I reality love it and I\'m a black belt..."; 
    }
   
    if ((askRun.trim().toLowerCase()=== 'yes') || (askRun.trim().toLowerCase()=== 'y')){ 
      answerMsg = answerMsg + "\nAbout running, you said YES. I\'m not, so far I ran a 21k..."; 
      answerMsgDoc = answerMsgDoc + "<br>4. About running, you said <b>YES</b>. I\'m not, so far I ran a 21k..."; 
    }
    else {
      answerMsg = answerMsg + "\nAbout runnning, you said NO... You\'re right! my longest distance is 21k..."; 
      answerMsgDoc = answerMsgDoc + "<br>4. About runnning, you said <b>NO</b>... You\'re right! my longest distance is 21k..."; 
      userScore++;
    }
  
    if ((askKids.trim().toLowerCase()=== 'yes') || (askKids.trim().toLowerCase()=== 'y')){ 
      answerMsg = answerMsg + "\nAbout kids, you said YES. God no! I only have two..."; 
      answerMsgDoc = answerMsgDoc + "<br>5. About kids, you said <b>YES</b>. God no! I only have two..."; 
    }
    else {
      answerMsg = answerMsg + "\nAbout kids, you said NO... Right answer! I have two kids..."; 
      answerMsgDoc = answerMsgDoc + "<br>5. About kids, you said <b>NO</b>... Right answer! I have two kids..."; 
      userScore++;
    }
  
    answerMsg = answerMsg + '\n\nThanks for playing! Now you know more about me. '+ guestName;
    console.log(answerMsg);
    alert(answerMsg)

    ///////////////////////////////////////////////////////////////////////////////////////////
    // This is the part of the Lab03
    var myNumber, userNumber, attempts;

    ///////////////////////////
    // QUESTION 6. asking to guess a number, giving 4 attempts to do it
    myNumber=40;
    attempts=0;
    //userNumber=0;

    console.log('myNumber ' + myNumber);

    do 
    {
      attempts++;
      userNumber = prompt('6. Guess which is my favorite number? (Tip: Is lower than 100)\n Attempt # ' + attempts + '/4');
      
      if (isNaN(userNumber))
        {
          alert('Please insert a number.');
        }
      else
      {
        if (myNumber==userNumber)
          {
            alert ('Wow! you are correct! ' + userNumber + ' is my favorite number! You got it at attempt # ' + attempts);
            answerMsgDoc = answerMsgDoc + '<br>6. About my favorite number... wow! <b>You guess it</b> at attempt # ' + attempts; 
            userScore++;
          }
        else // the guessed number is incorrect
          {
            if (userNumber>=51)  // switch DOES NOT SUPPORTS BOOLEANS !! therefore I will use if...
            {
              alert('No, that number is to high');
              console.log('No, that number is to high: ' + userNumber);
            }
            else if ((userNumber<51) && (userNumber>=31))
                {
                  alert('You are close!');
                  console.log('You are close!: ' + userNumber);
                }
                else
                {
                  alert('No, that number is to low');
                  console.log('No, that number is to low: ' + userNumber);
                }
              if (attempts===4)
              {
                alert('Sorry! you did\'t guess, my favorite number is ' + myNumber);
                answerMsgDoc = answerMsgDoc + '<br>6. About my favorite number... sorry, <b>You didn\'t</b> guess it'; 
              }
          }
        }  //if (isNaN(userNumber)){
      console.log('Attempt: ' + attempts + ' The user guessing name is: ' + userNumber);
    }
    while ((attempts<4) && (myNumber!=userNumber));
  } // if (msgValidation!==''). If the user responds the first 5 questions


    ///////////////////////////
    // QUESTION 7. asking to guess a number, giving 4 attempts to do it
    var myHobbies, userHobbies, hobbieFound, i, myHobbiesList; 

    attempts=0;
    hobbieFound=false;
    myHobbies=['reading','yoga','movies','road trip'];
    myHobbiesList='';

    do 
    {
      attempts++;
      i=0;
      userHobbies = prompt('7. Can you guess one of my favorite hobbie?\n Attempt # ' + attempts + '/6');
      
      // check if the value the user entered is in the array
      while (i < myHobbies.length) // i used a while because a for is not efficient is I already found the value
      {
        if (myHobbies[i] == userHobbies)
        {
          alert('Yei! you found in attempt ' + attempts + '/6 one of my hobbies: ' + userHobbies.toUpperCase());
          // TODO show here the hobbies also.
          hobbieFound = true;
          userScore++;
          answerMsgDoc = answerMsgDoc + '<br>7. About my hobbies <b>You find one:</b> ' + userHobbies +'!'; 
        }
        i++;
      }

      // tell the user my hobbies if he is out of attempts. This is the list to shoew ir
      if (attempts===6)
      {
        for (i = 0; i < myHobbies.length; i++) // to concatenate the hobbies lists.
        {
          if (i+1 === myHobbies.length)
            {
              myHobbiesList = myHobbiesList + myHobbies[i];  // to eliminate the last ' , '
            }
          else
          {
            myHobbiesList = myHobbiesList + myHobbies[i] + ', ' ; 
          }            
        }
        alert ('Sorry! you didn\'t guessed. This are my hobbies:\n' + myHobbiesList); 
        answerMsgDoc = answerMsgDoc + '<br>7. About my hobbies <b>You did\'t found one...</b> '; 
      }
      console.log('Attempt: ' + attempts + ' The user guessing hobbie is: ' + userHobbies);
    }
    while ((attempts<6) && (!hobbieFound));


////////////  FINAL PART

  if (answerMsgDoc.valueOf() !== 'undefined') {
    document.write(answerMsgDoc);
    document.write('<br> <br><b>' + guestName + '</b> you guessed <b>' + userScore + '</b> questions correct!!!');
  }
 









