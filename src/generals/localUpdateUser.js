const localUpdateUserSetter = (data) => {
    console.log(data);
    localStorage.setItem("surname", data.surname);
    localStorage.setItem("name", data.name);
    localStorage.setItem("phone", data.phoneNumber);
    localStorage.setItem("email", data.email);
    localStorage.setItem("country", data.country);
    if(data.companyName){
        localStorage.setItem("companyName", data.companyName);
    }
    
    localStorage.setItem("tradeRole", data.tradeRole);
}
export default localUpdateUserSetter;