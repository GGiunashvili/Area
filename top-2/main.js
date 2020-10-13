var firebaseConfig = {
    apiKey: "AIzaSyCpzpusyikiO6VBVLjFBX9VsWqkNUXkwvI",
    authDomain: "top2-c3b92.firebaseapp.com",
    databaseURL: "https://top2-c3b92.firebaseio.com",
    projectId: "top2-c3b92",
    storageBucket: "top2-c3b92.appspot.com",
    messagingSenderId: "843871534787",
    appId: "1:843871534787:web:0c9ce9c616021cf58fac76",
    measurementId: "G-Z1JQ5W1RR8"
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