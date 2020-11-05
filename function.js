 function getPlatesA(){
    var gP = database.ref('/Bank/location/A')
    gP.on("value",(data)=>{
        gpa = data.val();
    })
}

function updateBankA(add){
    
    database.ref('/Bank/location').update({
        A : add
    });
}

function getPlatesB(){
    var gP = database.ref('/Bank/location/B')
    gP.on("value",(data)=>{
        gpb = data.val();
    })
}

function updateBankB(add){
   
    database.ref('/Bank/location').update({
        B : add
    });
}

function getPlatesC(){
    var gP = database.ref('/Bank/location/C')
    gP.on("value",(data)=>{
        gpc = data.val();
    })
}

function updateBankC(add){
    
    database.ref('/Bank/location').update({
        C : add
    });
}
