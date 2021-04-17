//YOUR FIREBASE LINKS
var firebaseConfig = { apiKey: "AIzaSyC89QJzmDUNKIqreIlq2OOkD6rzffitt8A",
 authDomain: "kwitter-6e51f.firebaseapp.com",
  databaseURL: "https://kwitter-6e51f-default-rtdb.firebaseio.com",
   projectId: "kwitter-6e51f",
    storageBucket: "kwitter-6e51f.appspot.com",
     messagingSenderId: "367714092610",
      appId: "1:367714092610:web:4174a5cc02639159524fdb" };
       firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name") ;
room_name = localStorage.getItem("room_name") ;
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name") ;
      localStorage.removeItem("room_name") ;
      window.location="index.html" ;
}

function send(){
       msg=      document.getElementById("msg").value ; 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      }
      );
      document.getElementById("msg").value = "" ;
}