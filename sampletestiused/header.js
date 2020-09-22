describe("Verification of Freshworks", function(){

it ("Verification of Header", function(){
    browser.url('https://www.freshworks.com');
    const txt_Header = $('h1');
    let var_txt_Header=txt_Header.getText();
    console.log(var_txt_Header);

    
});



});
