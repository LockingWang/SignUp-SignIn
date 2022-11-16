//註冊帳號區
const signUpAccount = document.querySelector(".signUpAccount");
const signUpPassword = document.querySelector(".signUpPassword");
const signUpSend = document.querySelector(".signUpSend");


signUpSend.addEventListener("click",function(e){
    callSignUp();
});


function callSignUp(){
    if (signUpAccount.value =="" || signUpPassword.value ==""){
        alert("請確實填寫資料。");
        return;
    }
    
    let obj = {};
    obj.email = signUpAccount.value;
    obj.password = signUpPassword.value;
    
    axios.post('https://hexschool-tutorial.herokuapp.com/api/signup', obj)
      .then(function (response) {
        if(response.data.message =="帳號註冊成功"){
            alert("帳號註冊成功~ 歡迎新用戶!");
        }else{
            alert("此帳號已被註冊過!")

        };
        signUpAccount.value = "";
        signUpPassword.value = "";
      })
      .catch(function (error) {
        console.log(error);
      });
}

//帳號登入區

const signInAccount = document.querySelector(".signInAccount");
const signInPassword = document.querySelector(".signInPassword");
const signInSend = document.querySelector(".signInSend");


signInSend.addEventListener("click",function(e){
    callSignIn();
});



function callSignIn(){
    if (signInAccount.value =="" || signInPassword.value ==""){
        alert("請確實填寫資料。");
        return;
    }
    
    let obj = {};
    obj.email = signInAccount.value;
    obj.password = signInPassword.value;
    
    axios.post('https://hexschool-tutorial.herokuapp.com/api/signin', obj)
      .then(function (response) {
        if(response.data.message =="登入成功"){
            alert("登入成功! 歡迎回來~");
        }else{
            alert("此帳號不存在或帳號密碼錯")
        };
        signInAccount.value = "";
        signInPassword.value = "";
      })
      .catch(function (error) {
        console.log(error);
      });
}