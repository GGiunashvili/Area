var firebaseConfig = {
    apiKey: "AIzaSyAnRighy-MMOjgpZIVGNgSQoc9IbEEcvYw",
    authDomain: "extra-database-3a9f4.firebaseapp.com",
    databaseURL: "https://extra-database-3a9f4.firebaseio.com",
    projectId: "extra-database-3a9f4",
    storageBucket: "extra-database-3a9f4.appspot.com",
    messagingSenderId: "143667953139",
    appId: "1:143667953139:web:241c9040e70843341da686",
    measurementId: "G-B1XM45ZMBM"
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
    


    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';

    },5000);
    setTimeout(function(){
        window.location.href = "https://extra.ge/";

    },5000);

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