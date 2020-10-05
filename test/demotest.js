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

    // it("click Connection Tab",function(){
    //     const myConnectionTab = $('//*[@id="MyConnections"]/div');
    //     let myConnectionLabel = myConnectionTab.getText();
    //     myConnectionTab.click();
       
    // })
    // it("click Add connection",function(){
    //     const addIcon = $('//*[@id="Invite"]/span/img');
    //     console.log("add Icon Element isDisplayed::"+addIcon.isDisplayed())
    //     addIcon.click();
      
    // });
    // it("click next Button",function(){
    //     // popup dispalying
    //     const nextButton = $('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div/div[5]/div/div/div/div/div[2]/div/div/div/div/div/div[3]/div/div/div[5]/div/span/span');    
    //     nextButton.click();
      
    // }) 
    // it("Enter the user details",function(){
    //     const inviteEmail = $('//*[@id="InviteEmail:"]');
    //     inviteEmail.setValue('uiautomationtestuser@yopmail.com');
    //     browser.pause(500);
    //     const firstName = $('//*[@id="FirstName:"]');
    //     firstName.setValue('firstName'); 
    //     browser.pause(500);
    //     const LastName = $('//*[@id="LastName:"]');
    //     LastName.setValue('lastName'); 
    //     browser.pause(500);
    //     const next = $('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div/div[5]/div/div/div/div/div[2]/div/div/div/div/div/div[3]/div/div/div[7]/div')
    //     next.click();
    //     browser.pause(5000);
      
    // })  

    // it("Select team",function(){
       
    //     //radiobutton
    //     // this value is changing to dynamic and getting error
    //     const initialTeam = $('#gwt-uid-43')
    //     console.log("add initialTeam Element isDisplayed"+initialTeam.isDisplayed())
    //     initialTeam.click();
    //     browser.pause(1000);
    //     const next = $('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div/div[5]/div/div/div/div/div[2]/div/div/div/div/div/div[3]/div/div/div[7]/div') 
    //     console.log("next Button Display:::"+next.isDisplayed());
    //     next.click();
        
      
    // })
    // it("Click invite",function(){
    //     browser.pause(1000);
    //     const invite =$('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div/div[5]/div/div/div/div/div[2]/div/div/div/div/div/div[3]/div/div/div[7]/div');
    //     console.log("Invite Button Display:::"+invite.isDisplayed());
    //     invite.click();
    //     browser.pause(1000);
    //      const ok =$('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div')
    //      browser.pause(1000);
    // })

     // add User function End

    // smart libraries function Start
    it("click smart libraries tab",function(){
        const smartLibrariesTab = $('//*[@id="SmartLibraries"]/div');
        let smartLibrariesTabLabel = smartLibrariesTab.getText();
        smartLibrariesTab.click();
        browser.pause(1000);
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
        detailsTab.click();
        browser.pause(500);
        //browser.saveScreenshot('reports/html-reports/screenshots/detailstab.png');
    })
    it("Enter Title",function(){
        const title = $('//*[@id="Title:"]')
        title.setValue('UiAutomation Title15');
         browser.pause(500);
         const description = $('//*[@id="Description:"]')
         description.setValue('UiAutomation Description15');
          browser.pause(1000);
          //browser.saveScreenshot('reports/html-reports/screenshots/enterdetails.png');
      
    });
    it("Click Upload Type", function(){
       
        const uploadType = $('/html/body/div[3]/div[5]/div/div/div[5]/div/div/div[1]/div/div[2]/div/div/div/div[2]/div/div/div/div/div/div/div[3]/div/div[1]/div/div[2]/span[1]/input')
        console.log("Uploda type is available::"+uploadType.isDisplayed())
        uploadType.click();
       
    })
    it("click save Titles",function(){
        browser.pause(5000);
       // browser.saveScreenshot('reports/html-reports/screenshots/save.png');
        const save = $('//*[@id="Save"]');
        save.click();
        
         
    });
    //Details tab End
    //content tab Start

    it("click content tab",function(){
        browser.pause(3000);
        const content = $('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div/div[5]/div/div/div[1]/div/div[2]/div/div/div/div[1]/table/tbody/tr/td[2]/div')
        console.log("content tab disaly::"+content.isDisplayed());
        content.click();
       
       // browser.saveScreenshot('reports/html-reports/screenshots/contenttab.png');
       
    }) 

    it("Add content icon",function(){
         browser.pause(1000);
        const addIcon = $('//*[@id="Add Smart Library Content"]/span/img') 
        addIcon.click()
       
       
    })
    it("upload dummy",function(){
        browser.pause(2000);
        const fileUpload = $('//*[@id="drop-area"]/div/div/div/div[3]/div/div/div/div/div[3]/form/div/input[2]');
        fileUpload.setValue("C:\\Vijay\\butterfly.jpg")
        browser.pause(5000);
       
    })
    // it("upload file",function(){
    //     const path = require('path');
    //     const fileUpload = $('//*[@id="drop-area"]/div/div/div/div[3]/div/div/div/div/div[3]/form/div/input[2]');
    //     console.log("file buoad button visible"+fileUpload.isDisplayed())
    //     const filePath = path.join('documents', 'logo.PNG');
    //     console.log(filePath)
    //     fileUpload.setValue(filePath);
    //     browser.pause(5000);
        
    // })
    it("save file",function(){
        const save = $('//*[@id="Save"]')
         save.click()
         browser.pause(5000);
    })
    //content tab Start
    // upto this ok////***************** */

    //folder creation tab start
    it("click folderOrderings tab",function(){
        browser.pause(3000);
       
        const folder = $('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div/div[5]/div/div/div[1]/div/div[2]/div/div/div/div[1]/table/tbody/tr/td[3]/div')
        console.log("folder tab disaly::"+folder.isDisplayed());
        folder.click();
        
    }) 
    it("Create folder icon",function(){
        
       const addFolderIcon = $('//*[@id="Create New Folder"]') 
       console.log("folder icon:::"+addFolderIcon.isDisplayed());
       addFolderIcon.click()
       browser.pause(1000);
   })
   it("Enter folder name",function(){
    browser.pause(1000);
    const folderName = $('//*[@id="FolderName:"]');
    folderName.setValue("Ui Automation Test");
    browser.pause(500);
   })
   it("save file",function(){
    const save = $('//*[@id="Save"]')
     save.click()
     browser.pause(5000);
    })
    //folder creation tab end
   // assignment tab start 
//    it("click assignment tab",function(){
//     browser.pause(3000);
//     const folder = $('//*[@id="ROOT-2521314-window-overlays"]/div[5]/div/div/div[5]/div/div/div[1]/div/div[2]/div/div/div/div[1]/table/tbody/tr/td[4]/div')
//     console.log("assignment tab disaly::"+folder.isDisplayed());
//     folder.click();
//     browser.pause(1000);
//    })
//    it("click assignment icon",function(){
//     browser.pause(1000);
//    const addIcon = $('//*[@id="Add Smart Library Assignment"]') 
//    addIcon.click()
//    browser.pause(1000);
//     });
//     it("select the drop down value", function(){
//         const dropDownValue = $('//*[@id="gwt-uid-247"]')
//         dropDownValue.setValue("ID: 34072 NAME firstName lastName EMAIL: uiautomationtest1@yopmail.com");
//         browser.pause(500);
//     });
//     it("Select Uploader radio button",function(){
//         const uploader = $('//*[@id="gwt-uid-249"]')
//         uploader.click();
//         browser.pause(500);
//     });
//     it("save file",function(){
//         const save = $('//*[@id="Save"]')
//          save.click()
//          browser.pause(5000);
//         });

   // assignment tab start 

});
//https://test-my.interact.technology/interact/#/login