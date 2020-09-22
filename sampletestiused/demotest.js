describe("interaction with web element", function(){
    
    it ("enter value in a field", function(){
        browser.url('/');
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple mac book');
        browser.pause(5000);

        const label = $('span.a-size-base.a-color-base');
        let varTxt = label.getText();
        console.log(varTxt);

    });

    it ("enter value in a field", function(){
        browser.url('/');
        const label = $('span.a-size-base.a-color-base');
        let varTxt = label.getText();
        console.log(varTxt);

    });

    it ("Clicking Sing in Link", function(){
        browser.url('/');
        const lnk_Signin = $('div>span.nav-line-1');
        lnk_Signin.click();
        
    });

    it ("Clicking Sing in Link", function(){
        browser.url('https://www.freshworks.com');
        const txt_Header = $('h1');
        let var_txt_Header=txt_Header.getText();
        console.log(var_txt_Header);

        
    });



});