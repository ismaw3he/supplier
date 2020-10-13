const localGetter = () => {
    let data= {
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken"),
        surname: localStorage.getItem("surname"),
        name: localStorage.getItem("name"),
        phone: localStorage.getItem("phone"),
        email: localStorage.getItem("email"),
        country: localStorage.getItem("country"),
        companyName: localStorage.getItem("companyName"),
        tradeRole: localStorage.getItem("tradeRole"),
        expiration: localStorage.getItem("expiration")
    }
    if(data.accessToken){
        return data;
    }
    else{
        return null;
    }
}
export default localGetter;