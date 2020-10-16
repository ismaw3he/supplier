export const validation = (value, rules) =>{
    let isValid = true;
    let messages = [];
    
    if(rules.required && rules.minLength){
        if(value.trim("").length>=rules.minLength){
            if(isValid){
                messages.push({status: "success", message:"Minimum 3 characters"})
            }
        }
        else{
            isValid = false;
            messages.push({status: "error", message:"Minimum "+ rules.minLength+" characters"})
        }
    }
    if(value.trim("") && rules.isEmail && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)){
        isValid = false;
        messages.push({status: "error", message:"Invalid Email"})
    }
    if(rules.required && !value.trim("")){
        isValid = false;
        messages.push({status: "error", message:"This field is required"})
    }
    if(isValid){
        messages= [];
    }
    return {
        isValid: isValid,
        messages: messages
    }
}