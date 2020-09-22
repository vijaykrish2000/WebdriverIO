const homePage = require("../sampletestiused/homepage")

describe("Verification of Fresh Works Home Page UI Elements",function(){

    it("verification of Home Page Verification ? ", function(){
        browser.url("https://www.freshworks.com/");
        let txt_Header = homePage.pageHeader.getText();
        console.log(txt_Header);
        console.log(homePage.pageSubHeader.getText());
        console.log(homePage.platformLnk.isDisplayed());
        console.log(homePage.productLnk.isDisplayed());
        console.log(homePage.resourcesLnk.isDisplayed());
        console.log(homePage.companyLnk.isDisplayed());
        console.log(homePage.supportLnk.isDisplayed());
        if (homePage.customersLnk.isDisplayed()) {
            console.log("Customer Link is Visible");
        }
        else{
            console.log("Customer Link is NotVisible");
        }


      


    });

    
});

