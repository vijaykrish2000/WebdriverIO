// updating comments

var msg = 'Hello World';
var result = 0;
var testCases = [];
var testCase ={
    businessFlowId:'',
    testCaseId:'',
    testCaseName:'',
    actualResult:'',
    status:'',
}
//console.log(msg);
module.exports = {
  

    getbusinessFlowId:function(){
        return testCase.businessFlowId;
    },
    setbusinessFlowId:function(businessFlowIdValue){
        testCase.businessFlowId = businessFlowIdValue;
    },
    gettestCaseId:function(){
        return testCase.testCaseId;
    },
    settestCaseId:function(testCaseIdValue){
        testCase.testCaseId=testCaseIdValue;
    },
    gettestCaseName:function(){
        return testCase.testCaseName;
    },
    settestCaseName:function(testCaseNameValue){
        testCase.testCaseName = testCaseNameValue;
    },
    getactualResult:function(){
        return testCase.actualResult;
    },
    setactualResult:function(actualResultValue){
        testCase.actualResult = actualResultValue;
    },
    getstatus:function(){
        return testCase.status;
    },
    setstatus:function(statusValue){
        testCase.status = statusValue;
    },
    addModelsToList:function(){
        
        testCases.push(testCase);
        testCase ={
            businessFlowId:'',
            testCaseId:'',
            testCaseName:'',
            actualResult:'',
            status:'',
        }
    }, 
    getResult:function(){
        var json = JSON.stringify(testCases);
        return json;
    } 
};



