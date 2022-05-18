const getSleepHours = day => {
    switch (day){ 
      case 'monday':
      return 9;
      break;
      case 'tuesday':
      return 8;
      break;
      case 'wednesday':
      return 9;
      break;
      case 'thursday':
      return 6;
      break;
      case 'friday':
      return 7;
      break;
      case 'saturday':
      return 8;
      break;
      case 'sunday':
      return 9;
      break;
      default:
      return 'Error message!';
    }
  };
  //console.log(getSleepHours('friday'));
  const getActualSleepHours = () => 
     getSleepHours('monday') + 
     getSleepHours('tuesday') + 
     getSleepHours('wednesday') + 
     getSleepHours('thursday') + 
     getSleepHours('friday') + 
     getSleepHours('saturday') + 
     getSleepHours('sunday');
  
  //console.log(getActualSleepHours());
  const getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours * 7;
  }
  //console.log(getIdealSleepHours());
  const calculateSleepDept = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You got perfect sleep!')
    } else if (actualSleepHours > idealSleepHours) {
      console.log( `You got ${actualSleepHours - idealSleepHours} hours more sleep this week than your ideal routine.`)
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`You got ${idealSleepHours - actualSleepHours} hours less this week than your ideal sleep routine.`)
    } else {
      console.log('What are doing?')
    }
  }
  calculateSleepDept();
    //console.log(calculateSleepDept());
