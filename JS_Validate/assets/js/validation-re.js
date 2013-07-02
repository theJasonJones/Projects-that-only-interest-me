$(function(){     
    var firstName = $("#first-name");
    var lastName = $("#last-name");
    var email = $("#email");
             
    var phone = $("#phone");
    var age = $("#age");
    var gender = $("#gender");
 
 
    firstName.blur(validateFirstName);
    firstName.keyup(validateFirstName);
 
    lastName.blur(validateLastName);
    lastName.keyup(validateLastName);
 
    email.blur(validateEmail);
    email.keyup(validateEmail);
                
    phone.blur(validatePhone);
    phone.keyup(validatePhone);
 
    age.blur(validateAge);
    age.keyup(validateAge);
 
    gender.blur(validateGender);
    gender.keyup(validateGender);
 
	function validateFirstName(){ 
	           
	    $(this).closest('.randomError').find('.error-class').remove();
 
	    var s = firstName.val();                     
	    var fnameFilter = /^([A-Za-z ]+)$/;                    
	    
        if(s==''){           
	        firstName.addClass("error");
	        firstName.each(function() {
	            $(this).closest('.randomError').append("<div class='myInter abc error-class' style='color:red;font-size:1.6em;padding-left:1px;'>Please Enter Name</div>");
	        });
	        return false;
	        
	    } else if ( !fnameFilter.test(s) ) {
 
	        firstName.addClass("error");
	        firstName.each(function() {
	            $(this).closest('.randomError').append("<div class='myInter abc error-class' style='color:red;font-size:1.6em;padding-left:1px;'>Enter Valid Name</div>");
	        });         
	        return false;
 
        } else {
            firstName.removeClass("error");
            return true;
	    }
	}
 
		function validateLastName(){ 
	              
	    $(this).closest('.randomError').find('.error-class').remove();
 
	    var s = lastName.val();                     
	    var lnameFilter = /^([A-Za-z ]+)$/;                    
	    if(s==''){           
	        lastName.addClass("error");
	        lastName.each(function() {
	            $(this).parent('.randomError').append("<div class='myInter abc error-class' style='color:red;font-size:1.6em;padding-left:1px;'>Please Enter Name</div>");
	        });
	        return false;
	        
	    } else if(lnameFilter.test(s)){                   
	        lastName.removeClass("error");
	        return true;
	    } else {
	        lastName.addClass("error");
	        lastName.each(function() {
	            $(this).parent('.randomError').append("<div class='myInter abc error-class' style='color:red;font-size:1.6em;padding-left:1px;'>Enter Valid Name</div>");
	        });         
	        return false;
	    }
	}
 
	function validateEmail(){ 
        $(this).closest('.randomError').find('.error-class').remove();
 
        var e = email.val();       
        var filtertemail = /^[A-Za-z0-9_]+(\.[A-Za-z0-9_]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,3})$/;
        if(e=='') {
            email.addClass("error");
            email.each(function() {
                $(this).parent('.randomError').append("<div class='myInter1 error-class abc1' style='color:red;font-size:1.6em;padding-left:1px;'>Please Enter Email</div>");
            });
            return false;
        }
        else if(filtertemail.test(e)){       
            email.removeClass("error");
            return true;		
        } else {                 
            email.addClass("error");
            email.each(function() {
                $(this).parent('.randomError').append("<div class='myInter1 error-class abc1' style='color:red;font-size:1.6em;padding-left:1px;'>Enter Valid Email</div>");
            });
            return false;
        }              
    }
 
    function validatePhone(){ 
           
        $(this).closest('.randomError').find('.error-class').remove();
 
        var b = phone.val();   
                         
        var filter = /^([0-9-+() ]{1,16})$/; 
        if(b=='') {           
            phone.addClass("error");
            phone.each(function() {
                $(this).parent(".randomError").append("<div class='myInter2 error-class abc2' style='color:red;font-size:1.6em;padding-left:1px;'>Enter Phone Number</div>");
            });
            return false;
        } else if(filter.test(b)){                   
            phone.removeClass("error");
            return true;
        } else {
            phone.addClass("error");
            phone.each(function() {
                $(this).parent(".randomError").append("<div class='myInter2 error-class abc2' style='color:red;font-size:1.6em;padding-left:1px;'>Enter Valid Phone Number</div>");
            });
            return false;
        }
    }
 
    function validateAge(){ 
               
        $(this).closest('.randomError').find('.error-class').remove();
 
        var s = age.val();   
                         
        var filter = /^([0-9]{1,3})$/; 
        if(s=='' || parseInt(s < 0)) {           
            age.addClass("error");
            age.each(function() {
                $(this).parent(".randomError").append("<div class='myInter3 error-class abc3' style='color:red;font-size:1.6em;padding-left:1px;'>Please Enter Your Age</div>");
            });
            return false;
        } else if(s > 110){
        	age.addClass("error");
            age.each(function() {
                $(this).parent(".randomError").append("<div class='myInter3 error-class abc3' style='color:red;font-size:1.6em;padding-left:1px;'>Please Enter a valid Age Number.</div>");
            });
            return false;
        } else if(filter.test(s)){                   
            age.removeClass("error");
            return true;
        } else {
            age.addClass("error");
            age.each(function() {
                $(this).parent(".randomError").append("<div class='myInter3 error-class abc3' style='color:red;font-size:1.6em;padding-left:1px;'>Enter valid Age Number</div>");
            });
            return false;
        }
    }
    
    function validateGender(){ 
                  
        $(this).closest('.randomError').find('.error-class').remove();
        
        var s = gender.val();                     
        var filter = /^([A-Za-z ]+)$/;                    
        if(s==''){           
            gender.addClass("error");
            gender.each(function() {
                $(this).parent('.randomError').append("<div class='myInter9 error-class abc9' style='color:red;font-size:1.6em;padding-left:1px;'>Please Enter Your Gender</div>");
            });
            return false;
            
        } else if(filter.test(s)){                   
            gender.removeClass("error");
            return true;
        } else {
            gender.addClass("error");
            gender.each(function() {
                $(this).parent('.randomError').append("<div class='myInter9 error-class abc9' style='color:red;font-size:1.6em;padding-left:1px;'>Enter Valid Profession Name</div>");
            });         
            return false;
        }
    }
});