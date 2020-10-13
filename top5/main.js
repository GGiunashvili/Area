var firebaseConfig = {
    apiKey: "AIzaSyD4nCFJF7N3LCTH8Dxq6nMaso6_ieN8MBU",
    authDomain: "top5-39398.firebaseapp.com",
    databaseURL: "https://top5-39398.firebaseio.com",
    projectId: "top5-39398",
    storageBucket: "top5-39398.appspot.com",
    messagingSenderId: "439267318494",
    appId: "1:439267318494:web:6fa7f30cff47e4fdc0c04f",
    measurementId: "G-L9M0B5FHJ2"
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