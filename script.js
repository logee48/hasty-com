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
  // firebase api key
};


firebase.initializeApp(apiconfig);
const db = firebase.database();
const a = window.location.search;

function send_message()
{
  const timestamp = Date.now();
  const timee = new Date();
  var h = timee.getHours();
  var m = timee.getMinutes();
  if(h<10)
  {h="0"+h;}
  if(m<10)
  {m="0"+m;}
  var dateandtime = h+":"+m;
  const message_val = document.getElementById('message_referance');
  const mes = message_val.value;
  db.ref("/quick_chat/"+a+"/"+timestamp).set({mes,dateandtime
  });
  message_val.value = "";
  // auto scrolling thing
  var ele = document.getElementById("message_display_area");
  ele.scrollTop = ele.scrollHeight;
}

const fetchChat = db.ref("/quick_chat/"+a);
fetchChat.on("child_added", function (snapshot) {
    const messagesa = snapshot.val();
    var messs = `<div id="divb">${messagesa.mes}<div>${messagesa.dateandtime}</div></div>`;
    document.getElementById("message_display_area").innerHTML += messs;
});

function test()
{
  console.log("works");
}


var input = document.getElementById("message_referance");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("inputbutton").click();
  }
});

// setInterval(autoscroll, 1000);
//
// function autoscroll()
// {
//   var ele = document.getElementById("message_display_area");
//   ele.scrollTop = ele.scrollHeight;
// }
