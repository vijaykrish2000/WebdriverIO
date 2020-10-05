class BlazePage{

    // below methods are called getter methods you can't pass the parmeter it is not allowed

    get MainHeader(){
        return $('h2.home_video__title');
    }

    get BottomHeader(){
        return $('//*[@id="main_c_container"]/div/section[2]/div[1]/div[2]/div[1]/p');
    }
    get parent(){
        return $('ul.list-nav-links');
    }

    get childElements(){
        console.log("Ye started child elementst");
        return this.parent.$$('li');
    }

    get getTextForLi(){
        return this.childElements.filter(element => {
            console.log("Ye started get text");
            console.log(element.getText());
        });
    }

    get useCasesElements(){
        return $$('div#main_b_footer_second_block>ul>li');
    }

    get useCasesElementsText() {
        return this.useCasesElements.filter(element => {
            console.log("Li elements here");
            console.log(element.getText());
        });
    }

    specificChildElement(index) {
        return this.parent.$(`li:nth-child(${index})`);
    }

    // Wrapper function creation check product link is there and then click
    get productLink(){
        //console.log("calling product link");
        //return('ul.list-nav-links li:nth-child(1) a');
        return $('//*[@id="main-nav"]/ul/li[1]/a');
        
    }

    clickOnProductLink(){
        console.log("before verificaiton");
        if(this.productLink.isDisplayed() === true){
            this.productLink.click();
        }
        else{
            console.log("Product Link Not Displayed");
        }
    
    }

    get productPageHead(){
        //console.log("calling product link");
        //return('ul.list-nav-links li:nth-child(1) a');
        return $('//*[@id="gatsby-focus-wrapper"]/div/section[3]/div/div[1]/h3');
        
    }
    

}

module.exports = new BlazePage();


