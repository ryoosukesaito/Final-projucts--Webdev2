
// console.log(keys);


var myObj  = {name: "Sakamoto Ryoma", password:"hogehoge"};
console.log("myObj is:" + myObj);
let myString = JSON.stringify(myObj).split('/{/"/\/"/}/').join();
console.log("myString is:" + myString);
keys.push({name: "Sakamoto Ryoma", password:"hogehage"});
keys.push({name: "ryosuke", password:"hogehoge"});

// console.log(keys);
// console.log(keys[1].name);



const submit = document.getElementById('submit');

function getInfo() {
  var username = document.getElementById("username").value;
  var password = document.getElementById('password').value;

  // console.log(username);
  // console.log(password);
  
  for(i=0; i < keys.length; i++) {
    if(username == keys[i].name && password == keys[i].password) {
      alert("Welcom " + ` ${keys[i].name}` + "!!!");
      
      window.location.href="shoppage.html";
      return
    }
  }
  alert("incorrect password");
  console.log("err");
}

// submit.addEventListener('click', ()=>{
//   console.log(username);
//   for(i=0; i< keys.length; i++ ){
//     if(username == keys[i].name) {
//       console.log("Find your account!");
//       // console.log(keys[i].name);
//     }else{
//       console.log("Faild");
//       // console.log(keys[i].name);
//     }
    
//   };
// },false);
// for(const key of keys) {

// }

// keys.push({name:obj1, password:obj2});


