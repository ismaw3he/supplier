const localSetter = (data) => {
    console.log("1");
    localStorage.setItem("accessToken", data.access_token && data.access_token.token? data.access_token.token : data.accessToken);
    console.log("2");
    localStorage.setItem("refreshToken", data.access_token &&data.access_token.refreshToken? data.access_token.refreshToken : data.refreshToken);
    console.log("3");
    localStorage.setItem("expiration", data.access_token &&data.access_token.expiration? data.access_token.expiration : data.expiration);
    console.log("4");
    localStorage.setItem("surname", data.surname);
    localStorage.setItem("name", data.name);
    localStorage.setItem("phone", data.phone? data.phone : data.phoneNumber);
    localStorage.setItem("email", data.email);
    localStorage.setItem("country", data.country);
    localStorage.setItem("companyName", data.companyName);
    localStorage.setItem("tradeRole", data.tradeRole);
}
export default localSetter;
