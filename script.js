var reqpara=document.getElementsByClassName("req_para");
var reqparaValues=Object.values(reqpara);
reqparaValues.forEach((para)=>{
    para.style.display='none';
})
var allInp=document.getElementsByClassName("inp");
var radios=document.getElementsByName("radio");
var message=document.getElementById("message_inp");
var checkbox=document.getElementById("check_2");
var inpValues=Object.values(allInp);
var radiovalues=Object.values(radios);
function getValues(){
    event.preventDefault();
    for(let i=0;i<radiovalues.length;i++){
        if(radiovalues[i].checked && radiovalues[i].value=="General Enquiry"){
            reqparaValues[3].style.display="none";
            break;
        }   
        else if(radiovalues[i].checked && radiovalues[i].value=="SupportRequest"){
            reqparaValues[3].style.display="none";
            break;
        }
        else{
            reqparaValues[3].style.display="block";
        }
    }
    if(message.value){
        reqparaValues[4].style.display="none";
    }
    else{
        reqparaValues[4].style.display="block";
    }
    if(checkbox.checked){
        reqparaValues[5].style.display="none";
    }
    else{
        reqparaValues[5].style.display="block";
    }

    inpValues.map(function(item,index){
        if(item.value){
            reqparaValues[index].style.display="none";
        }
        else{
            reqparaValues[index].style.display="block";
        }
    })
}
