const day=prompt("Enter the day");
switch(day){
    case 'monday':{
        console.log("This is monday");
        break;
    }
    case 'tuesday':{
        console.log("This is tuesday");
        break;
    }
    case 'wednesday':{
        console.log("This is wednesday");
        break;
    }
    case 'thursday':{
        console.log("This is thursday");
        break;
    }
    case 'friday':{
        console.log("This is friday");
        break;
    }
    case 'saturday':{
        console.log("This is saturday");
        break;
    }
    case 'sunday':
        case 'holiday':  // we can assign multiple case together to perform same task like this
        {
        console.log("This is sunday");
        break;
    }
    default:{
        console.log("Wrong Entry");
    }
}