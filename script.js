var input=document.getElementById('question');
var res=document.getElementById('result');
let questions=['Why trees are green?','what is CSS satnds for?','Is java is a programming language?','what is html?','what is css?']

function check(){
    if(input.value=="" || input.value==null){
        alert("Input is not given");
        return false;
    }
for(i=0;i<questions.length;i++){
    if(input.value==questions[i]){
        return accept();
    }
}
return decline();
}

function accept(){
    var para=document.createElement('p');
    para.textContent=input.value;
    res.appendChild(para);
    input.value="";
}

function decline(){
    if(input.value=="" || input.value==null){
        alert("Input is not given");
        return false;
    }
    else{
    input.value="";
    }
}