import Data from '../Data/Data.json'
class MyAccountPage{
    get myAccountElement(){
        return $("//h1[text()='My account']");
    }
}
export default new MyAccountPage