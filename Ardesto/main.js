var firebaseConfig = {
    apiKey: "AIzaSyAuis55YD_bduXeUeQVzo-DNTgopEzevO4",
    authDomain: "top1-2d99e.firebaseapp.com",
    databaseURL: "https://top1-2d99e.firebaseio.com",
    projectId: "top1-2d99e",
    storageBucket: "top1-2d99e.appspot.com",
    messagingSenderId: "617201736052",
    appId: "1:617201736052:web:07fc21b834849ed15db421",
    measurementId: "G-FVH620Q2L8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var messagesRef = firebase.database().ref('messages');






document.getElementById('contactForm').addEventListener('submit',
submitForm);

function submitForm(e){
    e.preventDefault();



    var name = getInputVal('name');
    // var company = getInputVal('company');
    // var email = getInputVal('email');
    var phone = getInputVal('phone');
    // var message = getInputVal('message');

    saveMessage(name, company, email, phone, message);

    document.querySelector('.alert').style.display = 'block';
    document.querySelector('.own-modal').style.display = 'block';



    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';

    },3000);
    setTimeout(function(){
        window.location.href = "https://extra.ge/";

    },3000);

}


function getInputVal(id){
    return document.getElementById(id).value;
}





function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            company:company,
            email:email,
            phone:phone,
            message:message
        });
        

}




function myXiconclick() {
    document.getElementById("exampleModalCenter").style.display = "none";
  }