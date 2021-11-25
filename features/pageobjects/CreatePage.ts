import Data from "../Data/Data.json";
class CreatePage{

    get createPageHeading(){
        return $("//h1[text()='Create an account']")
    }

    get genderElement(){
        return $("//input[@value='1' and @id ='id_gender1']")
    }
    get firstNameElement(){
        return $("#customer_firstname");
    }
    async firstName(){
       await  this.firstNameElement.setValue(Data.firstName);
    }
    get lastNameElement(){
        return $("#customer_lastname")
    }
    async lastName(){
       await this.lastNameElement.setValue(Data.lastName);
    }
    get f_emailElement(){
        return $("//input[@id='email']")
    }
    async f_email(){
      await this.f_emailElement.setValue(Data.email);
    }
    get passwordElement(){
        return $("//input[@id='passwd']");
    }
    async password(){
      await  this.passwordElement.setValue(Data.password);
    }
    get  daysElement(){
        return $("//select[@id='days']")
    }
    async days(){
       await this.daysElement.selectByAttribute("value",Data.DateOfBirth.Day);
    }
    get  monthsElement(){
        return $("//select[@id='months']")
    }
    async months(){
        await this.monthsElement.selectByAttribute("value",Data.DateOfBirth.month)
    }
    get yearsElement(){
        return $("//select[@id='years']")
    }
    async years(){
        await this.yearsElement.selectByAttribute("value",Data.DateOfBirth.years)
    }
    get newsLetterCheckBoxElement(){
        return $("//input[@type='checkbox' and @id='newsletter']")
    }
    async clickLetterCheckBox(){
        await this.newsLetterCheckBoxElement.click();
        //await expect(this.newsLetterCheckBoxElement).toBeSelected();
    }

    get CheckBox2Element(){
        return $("//input[@type='checkbox' and @id='optin']")
    }
    async CheckBox2(){
        await this.CheckBox2Element.click();
        //await expect(this.CheckBox2).toBeSelected();
    }

    //========================================================================================================

    get address_FirstNameElement(){
        return $("[id='firstname']")
    }
    async address_firstName(){
        await this.address_FirstNameElement.setValue(Data.firstName)
    }
    get address_LastNameElement(){
        return $("[id='lastname']")
    }
    async address_lastName(){
        await this.address_LastNameElement.setValue(Data.lastName)
    }

    get companyElement(){
        return $("[id='company']")
    }
    async company(){
        await this.companyElement.setValue(Data.company)
    }
    get addressElement(){
        return $("[id='address1']")
    }
    async address(){
        await this.addressElement.setValue(Data.Address)
    }
    get address2Element(){
        return $("[id='address2']")
    }
    async address2(){
        await this.address2Element.setValue(Data.Address);
    }

    get cityElement(){
        return $("[id='city']")
    }
    async city(){
        await this.cityElement.setValue(Data.City)
    }
    get stateElement(){
        return $("//select[@id='id_state']");
    }
    async state(){
        await this.stateElement.selectByVisibleText(Data.state)
    }

    get postalCodeElement(){
        return $("[id='postcode']");
    }
    async postalCode(){
        await this.postalCodeElement.setValue(Data.PostalCode)
    }
    get countryElement(){
        return $("[id='id_country']")
    }
    async country(){
        await this.countryElement.selectByVisibleText("United States")
    }

    get additionalElement(){
        return $("//textarea[@name='other']") ;   
    }
    async additional(){
        await this.additionalElement.setValue(Data.AdditionalInfo)
    }

    get homePhoneElement(){
        return $("//input[@name='phone']")
    }
    async homePhone(){
        await this.homePhoneElement.setValue(Data.PhoneNumber)
    }

    get mobilePhoneElement(){
        return $("//input[@name='phone_mobile']")
    }
    async mobilePhone(){
        await this.mobilePhoneElement.setValue(Data.PhoneNumber)
    }
    get assignAddressElement(){
        return $("//input[@name='alias']")
    }

    async assignAddress(){
        await this.assignAddressElement.setValue(Data.AliasAddress)
    }

    get registerElement(){
        return $("//button[@name='submitAccount']")
    }

    async register(){
        await this.registerElement.click();
    }

}
export default new CreatePage