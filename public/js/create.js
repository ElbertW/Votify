

// Initialize Firebase
var config = {
  apiKey: firebaseKeys.API_KEY,
  authDomain: firebaseKeys.AUTH_DOMAIN,
  databaseURL: firebaseKeys.DATABASE_URL,
  projectId: firebaseKeys.PROJECT_ID,
  storageBucket: firebaseKeys.STORAGE_BUCKET,
  messagingSenderId: firebaseKeys.MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
console.log(firebase);


// Get the Database service for a specific app
var database = firebase.database();


function setup(){

}



function createRoom(){

	// Room data
	var rName = document.getElementById("roomName").value;
	var rPass = document.getElementById("roomPass").value;
	console.log("[debug]: read name and pass")

	var roomRef = database.ref("rooms");
	console.log("[debug]: room ref success");

	roomRef.push({
		hostName: "Elbert",
		members: {
			Elbert: true
		},
		roomName: rName
	});


}
