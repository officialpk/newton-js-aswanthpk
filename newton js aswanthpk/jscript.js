var form = document.querySelectorAll("form");
var dataArray= [];

form[0].addEventListener('submit',(e)=>{
    var register_data = document.querySelectorAll("input[type=text]");
    var gende = document.querySelector("input[type=radio]:checked").value;
// 
        var obj = {
            username:`${register_data[0].value}`,
            password:`${register_data[2].value}`,
            email:`${register_data[1].value}`,
            gender:`${gende}`,
            college:`${register_data[3].value}`,
            language:`${register_data[4].value}`,
        };
        dataArray.push(obj);
        
    // }
    console.log(dataArray);
    e.preventDefault();
})
form[1].addEventListener('submit',(e)=>{
    var login_data = document.querySelector("input[id=login]").value;
    var pass = document.querySelector("input[id=pass]").value;
    // alert(login_data);
    for(i of dataArray){
        if(i.username == login_data && i.password == pass){
            document.querySelector(".container1").style.display="none   ";
            document.querySelector(".main-container").style.display="flex";
            document.querySelector("label[name=Name]").innerHTML=`${i.username}`;
            document.querySelector("label[name=Email]").innerHTML=`${i.email}`;
            document.querySelector("label[name=College]").innerHTML=`${i.college}`;
            document.querySelector("label[name=Language]").innerHTML=`${i.language}`;
            // document.querySelector("label[name=Name]").innerHTML=`${i.username}`;

        }
        else
            alert("No Such User");
    }
    
        
    e.preventDefault();
})
    







    // var email = document.querySelector("input[type='email']");
    // var password = document.querySelector("input[type='password']");
    // if(name.value==''){
    //     alert("Enter Name");
    //     return;
    // }
    // if(email.value==''){
    //     alert("Enter Email");
    //     return;
    // }
    // if(password.value==''){
    //     alert("Enter password");
    //     return;
    // }
    // else{