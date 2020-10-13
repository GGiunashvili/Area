var firebaseConfig = {
    apiKey: "AIzaSyDDW2J0k_Xlres4jrbiPC0v1DDybL8uXuA",
    authDomain: "top3-cd754.firebaseapp.com",
    databaseURL: "https://top3-cd754.firebaseio.com",
    projectId: "top3-cd754",
    storageBucket: "top3-cd754.appspot.com",
    messagingSenderId: "620989089979",
    appId: "1:620989089979:web:8e006f26de89d04d0ec19e",
    measurementId: "G-QF62PGHBZJ"
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