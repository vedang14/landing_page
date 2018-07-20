
(function()
{
var config = {
    apiKey: "AIzaSyAbDDIvWa2tk9nNvOb47ocRojazox5_n2w",
    authDomain: "research-pixie-2018.firebaseapp.com",
    databaseURL: "https://research-pixie-2018.firebaseio.com",
    projectId: "research-pixie-2018",
    storageBucket: "research-pixie-2018.appspot.com",
    messagingSenderId: "220578178332"
};
// Initialize your Firebase app
firebase.initializeApp(config);

//get elements
var uploader = document.getElementById("uploader");
var fileButton= document.getElementById("fileButton");

fileButton.addEventListener('change',function(e){

    var file = e.target.files[0];
// var metadata = {
//   contentType: 'docs/pdf',
// };

    var storageRef =  firebase.storage().ref(file.name);
    var task = storageRef.put(file);
    console.log('Filename', file.name);


var details;


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(user.uid);
             details = firebase.database().ref("Uploads "+user.uid);
        }
        else {
            details = firebase.database().ref("Uploads");
        }
    });

    //console.log("user id: " + firebase.auth().currentUser.uid);
    // Save a new recommendation to the database, using the input in the form
    function upload () {

        // Get input values from each of the form elements
        var name = file.name;
        console.log('File', name);


        // Push a new recommendation to the database using those values
        details.push({
            "name": name,

        });
    };




    task.on('state_changed',
        function progress (snapshot)
        {
            var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            uploader.value = percentage;

        },

        function error(err){
            switch (err.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;



                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },

        function complete(){

            // Task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            //   console.log('File available at', downloadURL);
            // });
            upload();

        }
    );
});
}());
