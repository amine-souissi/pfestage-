import client from './connection.js' ;


// this function gets the code and at the same times does the checking of a phone number exists
export async function SelectPhoneNumCode(phonenumber){

	return new Promise(async function(resolve, reject) {
		var select_command = `SELECT phonecode from user_db where phonenumber =  '${phonenumber}'   ;`
		
		
		try {
			const  all_data = await client.query(select_command );
			resolve (all_data) ;
		}
		catch(err){
			console.log(err);
			resolve (false)   ;	
		}


	})

}

export async function updatePhoneCODE(phonenumber , phonecode){

	return new Promise(async function(resolve, reject) {
		var update_command = `update user_db set phonecode = '${phonecode}' where phonenumber =  '${phonenumber}'   ;`
		
		
		try {
			const  all_data = await client.query(update_command );
			resolve (true) ;
		}
		catch(err){
			console.log(err);
			resolve (false)   ;	
		}


	})

}
export async function InsertintoAuser(phonenumber,phonecode){

	return new Promise(async function(resolve, reject) {
		var insert_command = `insert into  user_db values ('${phonenumber}','${phonecode}')  ;`
		
		
		try {
			const  all_data = await client.query(insert_command );
			resolve (true) ;
		}
		catch(err){
			console.log(err);
			resolve (false)   ;	
		}


	})

}

export function Loginfunc(phonenumber , password) {



    var theRealpassword  = SelectPhoneNumCode(phonenumber) ;

    if (theRealpassword.length != 0) {
        console.log("username exist") ;
        if (theRealpassword == password) {
            console.log("correct password") ; 
        }         
    }
    else {
        console.log("username does not exist") ; 
    }

       


    return  0 ; 
}

export function Registerfunc(phonenumber) {



    var theRealpassword  = SelectPhoneNumCode(phonenumber) ;

    if (theRealpassword.length == 0) {
        console.log("username created") ;
        // insert into func
        var phonecode = Math.floor(Math.random() * 900000000) ; 
        var insertUser = InsertintoAuser(phonenumber,phonecode) ; 
            
    }
    else {
        console.log("username already  exist a new password has been sent to your  "+phonenumber.toString()) ; 
        // update function
        var phonecode = Math.floor(Math.random() * 900000000) ; 
        var updatetUser = updatePhoneCODE(phonenumber , phonecode) ;
		
    }

       


    return  0 ; 
}

