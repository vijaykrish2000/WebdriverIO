class BlazePage{

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



}

module.exports = new BlazePage();


