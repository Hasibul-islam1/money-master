// make utlty funcation 
function inputValueGetbyId(idname) {
    const boxElement=document.getElementById(idname);
    const boxElementString=boxElement.value;
    const boxElementNuber=parseInt(boxElementString);
    return boxElementNuber;
}
function satValue(idname,value){
    const setElement=document.getElementById(idname)
    setElement.innerText=value
}
document.getElementById("Calculate-btn").addEventListener("click",function(){
   const income=inputValueGetbyId("income");
   const food=inputValueGetbyId("food") ;
   const rent=inputValueGetbyId("rent");
   const clothes=inputValueGetbyId("clothes");
   console.log(typeof clothes)
   if (income>=0&&food>=0&&rent>=0&&clothes>=0) {
    const fullExpenses=food+rent+clothes;
    const totalEXpenses=satValue("expenses",fullExpenses)
    const balance=income-fullExpenses;
    const totalBalance=satValue("balance",balance)
   }
   else{
    alert("negative value not allow and try to add value all box you well be no cost add 0")
   }
    
    
//    console.log(balance);
})
document.getElementById("save-btn").addEventListener("click",function(){
    const balanceElement=document.getElementById("balance");
    const balanceElementString=balanceElement.innerText;
    const balanceElementNumber=parseInt(balanceElementString);
    if (balanceElementNumber>=0) {
    const persentisGet=inputValueGetbyId("persentis")
    if (persentisGet<=100) {
        const persentis=balanceElementNumber*persentisGet/100;
        satValue("save-amount",persentis)
        const nowBalnce=balanceElementNumber-persentis;
        satValue("now-balance",nowBalnce)
    // console.log(balanceElementNumber,persentis);
    }
   else{
    alert("you are can't save upper then 100")
   }
    }
    else{
        alert("you have a no saveing meony")
    }
})