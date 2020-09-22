const blazePage = require("../pages/blazemeter");

describe("Verification of menu items in blaze page", function() {

    it("Display all Li items", function(){
        console.log("Invoking Browser");
        browser.url("https://www.blazemeter.com/");
        browser.pause(1000);
       blazePage.getTextForLi;
       console.log("after get");


    });



});