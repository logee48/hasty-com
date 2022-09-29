const apiconfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
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
