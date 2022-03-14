function saturdayFun(activity = "roller-skate"){

    console.log(activity);

    return `This Saturday, I want to ${activity}!`

}

function mondayWork(activity = "go to the office"){

    return `This Monday, I will ${activity}.`;

}

function wrapAdjective(asterick = "*") {
    

 
    return function (today = "special") {

    return `You are ${asterick}${today}${asterick}!`;

}

  
}
