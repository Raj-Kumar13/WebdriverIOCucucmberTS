import Data from "../Data/Data.json";
class AuthenticationPage{
    get authenticationHeader(){
        return $("//h1[@class='page-heading']");
    }

    get emailElement(){
        return $("//input[@id='email_create']");
    }
    async emailAddress(){
        
       await this.emailElement.setValue(Data.email);//------------------------------------------------------
    }
    get createAnAccountElement(){
        return $("//button[@id='SubmitCreate']")
    }
}
export default new AuthenticationPage