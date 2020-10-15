var firebaseConfig = {
    apiKey: "AIzaSyDlcplUCGP0nbDAFY3XCSwt6IGwVf6r6ww",
    authDomain: "top4-395a3.firebaseapp.com",
    databaseURL: "https://top4-395a3.firebaseio.com",
    projectId: "top4-395a3",
    storageBucket: "top4-395a3.appspot.com",
    messagingSenderId: "374811023181",
    appId: "1:374811023181:web:f77ca4ced4f2e69329c904",
    measurementId: "G-V581FF8SNX"
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