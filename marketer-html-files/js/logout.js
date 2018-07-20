(function()
{

//
//     var config = {
//         apiKey: "AIzaSyAbDDIvWa2tk9nNvOb47ocRojazox5_n2w",
//         authDomain: "research-pixie-2018.firebaseapp.com",
//         databaseURL: "https://research-pixie-2018.firebaseio.com",
//         projectId: "research-pixie-2018",
//         storageBucket: "research-pixie-2018.appspot.com",
//         messagingSenderId: "220578178332"
//     };
//
// // Initialize your Firebase app
//     firebase.initializeApp(config);

//Get elements

    //const btnLogout = document.getElementById('btnLogout');

// add login event


//add a realtime listener

    firebase.auth().onAuthStateChanged(firebaseUser=>{
        if(firebaseUser)
        {
            console.log(firebaseUser);
            //console.log(name,email,photoUrl,uid);



            //btnLogout.classList.remove('hide');
        }else{
            console.log('not logged in');

            //btnLogout.classList.add('hide');
        }
    });

    btnLogout.addEventListener('click',e=>
    {
        firebase.auth().signOut() ;
        window.location.href = "index.html";
    })

}());
