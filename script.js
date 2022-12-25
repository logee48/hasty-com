// const apiconfig = {
//   apiKey: "",
//   authDomain: "",
//   databaseURL: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: ""
// };
const apiconfig = {
  apiKey: "AIzaSyCL8pUOlAL8i-gyWFW6jhjd2wYqyiQUKZA",
  authDomain: "twoo-77302.firebaseapp.com",
  databaseURL: "https://twoo-77302-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "twoo-77302",
  storageBucket: "twoo-77302.appspot.com",
  messagingSenderId: "135447477359",
  appId: "1:135447477359:web:8acc4c56ab1e7714c4e19a",
  measurementId: "G-WKRKWCHRWH"
};


firebase.initializeApp(apiconfig);
const db = firebase.database();
const a = window.location.search;

function send_message()
{
  const timestamp = Date.now();
  const message_val = document.getElementById('message_referance');
  const mes = message_val.value;
  db.ref("/quick_chat/"+a+"/"+timestamp).set({mes
  });
  message_val.value = "";
}

const fetchChat = db.ref("/quick_chat/"+a);
fetchChat.on("child_added", function (snapshot) {
    const messagesa = snapshot.val();
    var aaa = messagesa.time;
    var messs = `<ul>${messagesa.mes}</ul>`;
    document.getElementById("message_display_area").innerHTML += messs;
});
