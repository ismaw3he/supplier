const localSetter = (data) => {
    localStorage.setItem("accessToken", data.access_token.token);
    localStorage.setItem("refreshToken", data.access_token.refreshToken);
    localStorage.setItem("expiration", data.access_token.expiration);
    localStorage.setItem("surname", data.surname);
    localStorage.setItem("name", data.name);
    localStorage.setItem("phone", data.phone? data.phone : data.phoneNumber);
    localStorage.setItem("email", data.email);
    localStorage.setItem("country", data.country);
    localStorage.setItem("companyName", data.companyName);
    localStorage.setItem("tradeRole", data.tradeRole);
}
export default localSetter;
