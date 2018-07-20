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

//Get elements

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnLogout = document.getElementById('btnLogout');

// add login event
    btnLogin.addEventListener('click',e=>{

//Get Email and password

        const email=txtEmail.value;
        const pass= txtPassword.value;
        const auth = firebase.auth();
//sign in

        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e=> console.log(e.message));
    });




//add a realtime listener
    var name, email, photoUrl, uid;
    firebase.auth().onAuthStateChanged(firebaseUser=>{
        if(firebaseUser)
        {
            window.location.href = "indexdash.html";
            name = firebaseUser.displayName;
            email = firebaseUser.email;
            photoUrl = firebaseUser.photoURL;
            uid = firebaseUser.uid;  // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            //firebase.auth().signOut() ;
            //window.close();
            console.log(name,email,photoUrl,uid);
            //btnLogout.classList.remove('hide');
        }else{
            console.log('not logged in');
            //btnLogout.classList.add('hide');
        }
    });
    //
    btnLogout.addEventListener('click',e=>
    {
        firebase.auth().signOut() ;
        window.location.href = "index.html";


    })

}());

// function windowClose() {
//     window.open('indexdash.html','_parent','');
//     window.close();
// }
