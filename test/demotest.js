// updating comments
const models = require('./models.js');
describe("interaction with web element", function(){

    it("Open Myinteract Login Screen", function(){
        browser.url('/');
        models.setbusinessFlowId("BF_0001"); 
        models.settestCaseId("TC_0001");
        models.settestCaseName("Open Login Page");
        models.setactualResult("Opened Login Page");
        models.setstatus("Pass");
        models.addModelsToList()
        
    })
    it("enter the uEmail value", function(){
        const email = $('//*[@id="Email:"]')
        email.setValue('psarang.80@yopmail.com');
       //browser.saveScreenshot('./screenShot/screenshot2.png');
        const next = $('//*[@id="Next"]');
        next.click();
        models.setbusinessFlowId("BF_0001"); 
        models.settestCaseId("TC_0002");
        models.settestCaseName("Enter uEmail");
        models.setactualResult("Entered uEmail");
        models.setstatus("Pass");
        models.addModelsToList()
        browser.pause(1000);
    })
    it("enter the uPassword value and click login", function(){
       
        const pwd = $('//*[@id="Password:"]')
        pwd.setValue('Password1');
        browser.pause(1000);
        const login = $('//*[@id="Login"]')
        login.click();
        models.setbusinessFlowId("BF_0001"); 
        models.settestCaseId("TC_0003");
        models.settestCaseName("Enter uPassword");
        models.setactualResult("Entered uPassword");
        models.setstatus("Pass");
        models.addModelsToList()
    })
    // it("Navigate to nextIneract", function(){

    //     const dashboard = $('//*[@id="gwt-uid-5"]')
    //     let dashBoardLabel =dashboard.getText();
    //     let status = "False";
    //     if(dashBoardLabel == "Dashboard"){
    //         status = "Pass"
    //     } 
    //     dashboard.click();
    //     models.setbusinessFlowId("BF_0002");
    //     models.settestCaseId("TC_0001");
    //     models.settestCaseName("Verify Nav in nextInteract");
    //     models.setactualResult("Verified first tab::"+dashBoardLabel);
    //     models.setstatus(status);
    //     models.addModelsToList()
    //     browser.pause(5000);
       
    //     status = "False"
    //     const users = $('//*[@id="gwt-uid-6"]')
    //     let usersLabel =users.getText();
    //     if(usersLabel == "Users"){
    //         status = "Pass"
    //     } 
    //     models.setbusinessFlowId("BF_0002");
    //     models.settestCaseId("TC_0002");
    //     models.settestCaseName("Verify Nav in nextInteract");
    //     models.setactualResult("Verified second tab::"+usersLabel);
    //     models.setstatus(status);
    //     models.addModelsToList()
    //     users.click();
    //     status = "False"
    //     const asset = $('//*[@id="gwt-uid-7"]')
    //     let assetLabel =asset.getText();
    //     if(assetLabel == "Assets"){
    //         status = "Pass"
    //     } 
    //     models.setbusinessFlowId("BF_0002");
    //     models.settestCaseId("TC_0003");
    //     models.settestCaseName("Verify Nav in nextInteract");
    //     models.setactualResult("Verified third tab::"+assetLabel);
    //     models.setstatus(status);
    //     models.addModelsToList()
    //     asset.click();
    //     status = "False"
    //     const distribution = $('//*[@id="gwt-uid-8"]')
    //     let distributionLabel =distribution.getText();
    //     if(distributionLabel == "Distribution"){
    //         status = "Pass"
    //     } 
    //     models.setbusinessFlowId("BF_0002");
    //     models.settestCaseId("TC_0004");
    //     models.settestCaseName("Verify Nav in nextInteract");
    //     models.setactualResult("Verified fourth tab::"+distributionLabel);
    //     models.setstatus(status);
    //     models.addModelsToList();
    //     distribution.click();
    //     status = "False"
    //     const smartLib = $('//*[@id="gwt-uid-9"]')
    //     let smartLibLabel =smartLib.getText();
    //     if(smartLibLabel == "Smart Libraries"){
    //         status = "Pass"
    //     } 
    //     models.setbusinessFlowId("BF_0002");
    //     models.settestCaseId("TC_0005");
    //     models.settestCaseName("Verify Nav in nextInteract");
    //     models.setactualResult("Verified fifth tab::"+smartLibLabel);
    //     models.setstatus(status);
    //     models.addModelsToList();
    //     smartLib.click();
    //     browser.pause(5000);
    // })
    it("Open to MyInteract", function(){
        const myInteractLink = $('//*[@id="myINTERACT"]/img')
        models.setbusinessFlowId("BF_0003");
        models.settestCaseId("TC_0001");
        models.settestCaseName("Open to MyInteract");
        models.setactualResult("Opened to MyInteract");
        models.setstatus("Pass");
        models.addModelsToList();
        myInteractLink.click();
       
    })
    
    // add User function Start

    it("click Connection Tab",function(){
        const myConnectionTab = $('//*[@id="MyConnections"]/div');
        let myConnectionLabel = myConnectionTab.getText();
        myConnectionTab.click();
       
    })
    it("click Add connection",function(){
        const addIcon = $('//*[@id="Invite"]/span/img');
        console.log("add Icon Element isDisplayed::"+addIcon.isDisplayed())
        addIcon.click();
        browser.pause(1000);
      
    });
    it("click next Button",function(){
        // popup dispalying
        const nextButton = $('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div/div[5]/div/div/div/div/div[2]/div/div/div/div/div/div[3]/div/div/div[5]/div/span/span');    
        nextButton.click();
        browser.pause(1000);
      
    }) 
    it("Enter the user details",function(){
        const inviteEmail = $('//*[@id="InviteEmail:"]');
        inviteEmail.setValue('uiautomationtestuser40@yopmail.com'); // value should change for each execution
        browser.pause(500);
        const firstName = $('//*[@id="FirstName:"]');
        firstName.setValue('firstName'); 
        browser.pause(500);
        const LastName = $('//*[@id="LastName:"]');
        LastName.setValue('lastName'); 
        browser.pause(500);
        const next = $('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div/div[5]/div/div/div/div/div[2]/div/div/div/div/div/div[3]/div/div/div[7]/div')
        next.click();
        browser.pause(5000);
      
    })  

    it("Select team",function(){
       
        //radiobutton
        // this value is changing to dynamic and getting error so gave full path
        const initialTeam = $('/html/body/div[3]/div[5]/div/div/div[5]/div/div/div/div/div[2]/div/div/div/div/div/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div[1]/table/tbody/tr[3]/td/div/span/input')
        console.log("add initialTeam Element isDisplayed"+initialTeam.isDisplayed())
        initialTeam.click();
        browser.pause(1000);
        const next = $('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div/div[5]/div/div/div/div/div[2]/div/div/div/div/div/div[3]/div/div/div[7]/div') 
        console.log("next Button Display:::"+next.isDisplayed());
        next.click();
        
      
    })
    it("Click invite",function(){
        browser.pause(1000);
        const invite =$('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div/div[5]/div/div/div/div/div[2]/div/div/div/div/div/div[3]/div/div/div[7]/div');
        console.log("Invite Button Display:::"+invite.isDisplayed());
        invite.click();
        browser.pause(10000);
        const ok = $('/html/body/div[3]/div[5]/div/div/div[5]/div/div/div[3]/div/div/div[3]'); 
        console.log("Ok Buton:::"+ok.isDisplayed());
          ok.click();
         browser.pause(3000);
         browser.saveScreenshot('reports/html-reports/screenshots/ok.png');

    })

 
     // add User function End

    //smart libraries function Start
    
    it("click smart libraries tab",function(){
        browser.pause(3000);
        const smartLibrariesTab = $('//*[@id="SmartLibraries"]/div');
        let smartLibrariesTabLabel = smartLibrariesTab.getText();
        smartLibrariesTab.click();
        browser.pause(3000);
        browser.saveScreenshot('reports/html-reports/screenshots/smarttab.png');
    });
    it("click Add smartLibraties",function(){
        const addIcon = $('//*[@id="Add Smart Library"]/span/img');
        console.log("add Icon Element isDisplayed::"+addIcon.isDisplayed())
        addIcon.click();
        browser.pause(1000);
    });

    //Details tab start
    it("open the details tab",function(){
        const detailsTab = $('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div/div[5]/div/div/div[1]/div/div[2]/div/div/div/div[1]/table/tbody/tr/td[1]/div')
        console.log("details tab display::"+detailsTab.isDisplayed());
        detailsTab.click();
        browser.pause(500);
        browser.saveScreenshot('reports/html-reports/screenshots/detailstab.png');
    })
    it("Enter Title",function(){
        const title = $('//*[@id="Title:"]')
        title.setValue('UiAutomation Title40');// value should change for each execution
         browser.pause(500);
         const description = $('//*[@id="Description:"]')
         description.setValue('UiAutomation Description40');// value should change for each execution
          browser.pause(1000);  
          browser.saveScreenshot('reports/html-reports/screenshots/detailab1.png');
    });
    it("Click Upload Type", function(){
       
        const uploadType = $('/html/body/div[3]/div[5]/div/div/div[5]/div/div/div[1]/div/div[2]/div/div/div/div[2]/div/div/div/div/div/div/div[3]/div/div[1]/div/div[2]/span[1]/input')
        console.log("Uploda type is available::"+uploadType.isDisplayed())
        uploadType.click();
       
    })
    it("click save Titles",function(){
        browser.pause(5000);
        const save = $('//*[@id="Save"]');
        save.click();  
        browser.saveScreenshot('reports/html-reports/screenshots/detailab2.png');       
    });
    //Details tab End
    //content tab Start

    it("click content tab",function(){
        browser.pause(3000);
        const content = $('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div/div[5]/div/div/div[1]/div/div[2]/div/div/div/div[1]/table/tbody/tr/td[2]/div')
        console.log("content tab disaly::"+content.isDisplayed());
        content.click();    
    }) 

    it("Add content icon",function(){
         browser.pause(1000);
        const addIcon = $('//*[@id="Add Smart Library Content"]/span/img') 
        addIcon.click()
        browser.pause(2000);
        const fileUpload = $('//*[@id="drop-area"]/div/div/div/div[3]/div/div/div/div/div[3]/form/div/input[2]');
        fileUpload.setValue("D:\\myInteract\\logo.PNG")
        browser.pause(5000);
        const save = $('//*[@id="Save"]')
        save.click()
        browser.pause(8000);
    })
   //content tab end
    // folder & order tab start
    it("Open folder tab",function(){
    
        const folderTab = $('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div/div[5]/div/div/div[1]/div/div[2]/div/div/div/div[1]/table/tbody/tr/td[3]/div');
        console.log("folder header Display::;"+folderTab.isDisplayed());
        folderTab.click();
        browser.pause(2000);
        const folderAddIcon = $('//*[@id="Create New Folder"]');
        console.log("create new foleder icon visible::::"+folderAddIcon.isDisplayed())
        folderAddIcon.click();
        browser.pause(2000);
        const folderName = $('//*[@id="FolderName:"]')
        folderName.setValue("uiAutomation FOlder");
        browser.pause(2000);
        const folderSave = $('//*[@id="Save"]');
        console.log("Folder save button display:::"+folderSave.isDisplayed())
        folderSave.click();
         browser.pause(5000);
    })
    it("Re Open to MyInteract", function(){
        const assign = $('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div/div[5]/div/div/div[1]/div/div[2]/div/div/div/div[1]/table/tbody/tr/td[4]');
        console.log("Assign tab dispalay:::"+assign.isDisplayed());
        assign.click();
        browser.pause(2000);
        const addAssign = $('//*[@id="Add Smart Library Assignment"]/span/img');
        console.log("add assignment button  dispalay:::"+addAssign.isDisplayed());
        addAssign.click();
        browser.pause(8000);
        const dropdownBtn = $('//*[@id="ROOT-2521314-window-overlays"]/div[8]/div/div/div[5]/div/div/div/div[1]/div/div[2]/div/div[1]/div/div[2]/div')
        dropdownBtn.click();
        browser.pause(5000);
        const dropdownValue = $('//*[@id="VAADIN_COMBOBOX_OPTIONLIST"]/div/div[2]/table/tbody/tr[5]/td')
        dropdownValue.click();
        browser.pause(2000);
        const uploader = $('/html/body/div[3]/div[8]/div/div/div[5]/div/div/div/div[1]/div/div[2]/div/div[5]/div/div[1]/div/span/input');
        uploader.click();
        browser.pause(5000);
        const assignmentSave = $('//*[@id="Save"]')
        console.log("save assignment button  dispalay:::"+assignmentSave.isDisplayed());
        assignmentSave.click();
        browser.pause(10000);
        const cancel =$('//*[@id="Cancel"]');
        cancel.click();
        browser.pause(2000);
        const myInteractLink = $('//*[@id="myINTERACT"]/img')
        myInteractLink.click();
        browser.pause(2000);
    })
   
    // Click My Asset Start
    it("opepn My Asset",function(){
        const assetTab = $('//*[@id="MyAssets"]/div');
        assetTab.click();
        browser.pause(1000);
        const addbtn = $('//*[@id="Add"]');
        addbtn.click();
        browser.pause(2000);
    })
    it("Enter Asset details",function(){
        const tileHeader = $('//*[@id="TileHeader:"]');
        tileHeader.setValue("Test Header");
        browser.pause(1000);
        const tileBody = $('//*[@id="TileBody:"]')
        tileBody.setValue("Test Body");
        browser.pause(1000);
        const product = $('//*[@id="Product/Category:"]/div');
        product.click();
        browser.pause(1000);
        const productValue = $('//*[@id="VAADIN_COMBOBOX_OPTIONLIST"]/div/div[2]/table/tbody/tr/td');
        productValue.click();
        browser.pause(1000);
        const assetType = $('//*[@id="AssetType:"]/div');
        assetType.click();
        browser.pause(1000);
        const assetTypeValue = $('//*[@id="VAADIN_COMBOBOX_OPTIONLIST"]/div/div[2]/table/tbody/tr[8]/td');
        assetTypeValue.click();
        browser.pause(1000);
       browser.saveScreenshot('reports/html-reports/screenshots/screenshot1.png');
    
    })
   it('Enter Asset version',function(){
    const uploadAssetVersion = $('//*[@id="uploadAssetVersionButton"]');
    uploadAssetVersion.click();
    browser.pause(1000);
    const smartLibrary = $('//*[@id="SmartLibrary"]')
    smartLibrary.click();
    browser.pause(1000);
    const chooseSmartLib = $('//*[@id="SmartLibrary:"]/div');
    chooseSmartLib.click();
    browser.pause(2000);
    const chooseSmartLibValue = $('//*[@id="VAADIN_COMBOBOX_OPTIONLIST"]/div/div[2]/table/tbody/tr[10]/td');
    chooseSmartLibValue.click();
    browser.pause(2000);
    const chooseSmartLibNext = $('//*[@id="Next"]')
    chooseSmartLibNext.click();
    browser.pause(1000);
    const customiseNext = $('//*[@id="Next"]');
    customiseNext.click();
    browser.pause(1000);
    const finish = $('//*[@id="Finish"]');
    finish.click();
    browser.pause(1000);
    browser.saveScreenshot('reports/html-reports/screenshots/screenshot2.png');
   })
   it('Select Tile Image',function(){
    const selectTileFromGallery = $('//*[@id="selectTitleFromGalleryButton"]');
    selectTileFromGallery.click();
    browser.pause(5000);
    const clickImge = $('//*[@id="image-BussinessPartnersLookingAtChartTouchpad.jpg"]');
    clickImge.click();
    browser.pause(1000);
    const selectImage = $('//*[@id="SelectTileImage"]');
    selectImage.click();
    browser.saveScreenshot('reports/html-reports/screenshots/screenshot3.png');
    
   });
   it('save Asset details',function(){
    const saveAssetDetails = $('//*[@id="Save"]');
    saveAssetDetails.click();
    browser.pause(5000);
    browser.saveScreenshot('reports/html-reports/screenshots/screenshot4.png');
   })
   // Click My Asset end
    
 

});
//https://test-my.interact.technology/interact/#/login