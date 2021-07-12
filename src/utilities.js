export function isAuth(){
    const assignmentUser = localStorage.getItem('assignmentUser');
    console.log(assignmentUser,"assignmentUser")
    // alert(typeof(user));
    if(assignmentUser){
  
    
        return true;
      
    }
    else{
      return false;
    }
  //  return user ? user : false;
  }