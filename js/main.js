function askQuestions(){

  var firstName = prompt('What is your first name?');
  var lastName = prompt('What is your last name?');

  var fullName = firstName + ' ' + lastName;
  console.log('User is called ' + fullName);

  //this is for changing the subheader to your name
  $('h2').text('Hello ' + fullName);
  //this is for changing the subheader to your name

  var userAge = prompt('How old are you?');
  userAge = parseInt(userAge);

    if (userAge >= 18) {
      console.log('User is an adult');
    } 
    else if (userAge >= 13) {
      console.log ('User is a kid');
    }
    else {
      alert('Go away kid');
    }

  //exercise

  if (firstName == "General" && lastName != "Assembly"){
      console.log ('then great the general!');
  } 

}

//when the page loads 
$ (function()  {

    $('img').on('click',askQuestions);

    //hide all the sections
    $('h3').next().hide();


    //when the user clicks a h3 element
    $('h3').on('click',function(){//on is for if this happens do this

        //hide/toggle the next element
        $(this).next().slideToggle(100);//between the brackets of slideToggle you can add the time you want the animation to take in miliseconds
    
    });


});