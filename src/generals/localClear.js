const localClear = ()=>{
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("surname");
    localStorage.removeItem("name");
    localStorage.removeItem("phone");
    localStorage.removeItem("email");
    localStorage.removeItem("country");
    localStorage.removeItem("companyName");
    localStorage.removeItem("tradeRole");
    localStorage.removeItem("expiration");
}

export default localClear;