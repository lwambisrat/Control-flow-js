const getStrockNumbers= (inventory)=>{
    for(let i=0;i<inventory.length;i++){
        if(inventory[i]==0){
            console.log("item is not available");
        }
        else{
            console.log("item is available");
        }
    }
    };
    let inventory=[39,30,40,0,90,];
    getStrockNumbers(inventory);
    // console.log(getStrockNumbers(inventory));
    function grade(score){
        for(let i=0;i<score.length;i++){
            if (score[i]>=85){
                console.log(`You have score of ${score[i]} and your grade is A`);
            }
            else if (score[i]>=70  && score[i]<85){
                console.log(`You have score of ${score[i]} and your grade is B`);
            }
            else if(score[i]>=60 && score[i]<70){
                console.log(`You have score of ${score[i]} and your grade is C`);
            }
            else if(score[i]>=50 && score[i]<60 ){
                console.log(`You have score of ${score[i]} and your grade is D`);
            }
             else{
                console.log(`You have score of ${score[i]} and your grade is E`);
             }   
         
        }
    };
    
    let score=[34,67,89,89,67,34,90,100,95,89,73];
    grade(score);
    
            //  oR
    // function grade(score){
    //     let value;
    //     for(let i=0;i<score.length;i++){
    //         if (score[i]>=85){
    //             value="A";
    //         }
    //         else if (score[i]>=70  && score[i]<85){
    //             value="B";
        
    //         }
    //         else if(score[i]>=60 && score[i]<70){
    //             value="C";
    //         }
    //         else if(score[i]>=50 && score[i]<60 ){
    //             value="D";
            
    //         }
    //         else{
    //             value="E";
    
    //         }
    //         console.log(`Your have score of ${score[i]} and your grade is ${value}`)
    //     }
    // }
    // score=[34,67,89,89,67,34,90,100,95,89,73];
    // grade(score);
    
    
    
    
    // OR
    
    // function grade(score){
    //     let value;
    //     score.forEach(item=>{
    //         if (item>=85){
    //             value="A";
    //         }
    //         else if (item>=70 && item<85){
    //             value="B";
    //         }
    //         else if (item>=60 && item<70){
    //             value="C";
    //         }
    //         else if (item>=50 && item<60){
    //             value="D";
    //         }
    //         else{
    //             value="E";
    //         }
    //         console.log(`Your have score of ${item} and your grade is ${value}`);
    //     });
    
    // }
    // score=[34,67,89,89,67,34,90,100,95,89,73];
    //  grade(score);
    // const loginAttempts=()=>{
    //     let loginAttempts=1;
    //     while(loginAttempts<=3){
    //         console.log(`Login attempt ${loginAttempts}`);
    //         loginAttempts+=1;
    
    //     }
    // };
    // loginAttempts();
    
           //OR
    function loginAttempts(attempt){
        let loginAttempts=1;
         while(loginAttempts<=3){
             console.log(`Login attempt ${loginAttempts}`);
             loginAttempts+=1;
             
         }
    };
    loginAttempts();
    
    const loginAttemptsUsingDoWhile=()=>{
        let loginAttempt=1;
    
        do{
            console.log(`Login attempt using do ...while ${loginAttempt}`);
            loginAttempt+=1;
        }
        while(loginAttempt<=3);
    };
    loginAttemptsUsingDoWhile();
    
    
    const notifications=(notificationTypes)=>{
        notificationTypes.map(notification=>{
            switch(notification){
              case 'email':
                console.log("Send email");
                break;
              case "sms":
              case "text":
                console.log("Send sms");
                break;
              case "push":
                console.log("Send push notification");
                break;
              default:
                console.log("Notifications type not supported");
                break;
            }
        });
    };
    let notificationTypes=['email','sms','push','text','file'];
    notifications(notificationTypes);
    
    function roleType(roles){
        roles.forEach(role=>{
            switch(role){
              case 'admin':
                console.log("Admin access");
                break;
              case 'viewer':
                console.log("Viewer access");
                break;
              case 'editor':
                console.log("Editor access");
                break;
              case 'commentor':
                console.log("Commentor access");
                break;
              default:
                console.log("No access")
                break;
            }
        });
    }; 
    let roles=['viewer','commentor','admin','editor','observe'];
    roleType(roles);
    
    // function userVoting(vote){
    //   for(let input=0;input<vote.length;input++){
    //     do{
    //         console.log(`user vote ${input}`);
    //         input+=1;
    //     }
    //     while(input===vote.length);
    // }
    // };
    // vote=[1,2,4,5,3];
    // userVoting(vote);
       //3
    function matchDay(days){
      days.forEach(day=>{
          switch(day){
            case 1:
              console.log(`Day ${day} is Monday`);
              break;
            case 2:
              console.log(`Day ${day} is Tuesday`);
              break;
            case 3:
              console.log(`Day ${day} is Wednesday`);
              break;
            case 4:
              console.log(`Day ${day} is Thursday`);
              break;
            case 5:
              console.log(`Day ${day} is Friday`);
              break;
            case 6:
              console.log(`Day ${day} is Saturday`);
              break;
            case 7:
              console.log(`Day ${day} is Sunday`);
              break;
            default:
              console.log("No match");
              break;
          }
      });
    }; 
    let days=[1,2,3,4,5,8,7,6,9,0];
    matchDay(days);
    
    //4
    function identifyStrength(passwordStrings){
      passwordStrings.forEach(password=>{
        if (password.length>=8){
          console.log("Strong password");
        }
        else{
          console.log("Weak password");
        }
      })
    };
    let passwordStrings=["lwa23445m","waass","rewrite"];
    identifyStrength(passwordStrings);
    
    //5
    
    function multilingualSite(greetings){
                greetings.forEach(greeting=>{
              switch(greeting){
                case 'en':
                  console.log(`Greeting in ${greeting} language is Hello.`);
                  break;
                case 'fr':
                  console.log(`Greeting in ${greeting} language is Bonjour`);
                  break;
                case 'sw':
                  console.log(`Greeting in ${greeting} language is Habari`);
                  break;
                default:
                  console.log("  Selam dyu ");
                  break;
              }
    
    })
    };
     let greetings=['hi','en','tg'];
     multilingualSite(greetings);


    //7 CHECK DEGREE OF  TEMPERATURE
    
    function weatherInCelsius(temperature){
      temperature.forEach(temprate=>{
        if (temprate>30){
          console.log(`${temprate} degree -High Heat alert. `);
        }
        else if(temprate<15 ){
          console.log(`${temprate} degree -cold heat alert.`);
        }
        else{
          console.log(`${temprate} degree-Normal condition`);
        
        }
      })
    };
    
    let temperature=[23,45,67,29];
    weatherInCelsius(temperature);


    /// CHECKING WHEATHER THE NUMBER IS FACTORIAL
    function isPrime(number){
      if(number == 2){
          return true;
      }
      let x = Math.ceil(number**0.5);
      let count = 0;
      while(x>=2){
          if(number % x == 0){
              count = count + 1;
          }
          x--;
      }
      if (count == 0){
          return true;
      }
      else{
          return false;
      }
    }
    console.log(isPrime(7));
    console.log(isPrime(10));
    console.log(isPrime(34));
    console.log(isPrime(3));
    console.log(isPrime(2));
    console.log(isPrime(6));
    
    // OR

// check if the number is prime
function checkPrime(n) {
  if (n <= 1)
     return false;
   // Check from 2 to n-1
   for (let i = 2; i < n; i++)
     if (n % i == 0)
       return false;
   return true;
 }
 // isPrime(21) ? console.log("true") : console.log("false"); or
 
 const l=7;
 console.log(checkPrime(l));
    
    
    
    ///CALCULATE FACTORIAL
    // to calculate factorial
function factorialIterative(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorialIterative(5));

// or
function factorialRecursive(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  if (n === 0) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

    
    
    