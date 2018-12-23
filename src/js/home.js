
$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDoB94VtmmUPIS84cHPuFcKHPCT1LjXLpc",
        authDomain: "blogpersonal-2e02f.firebaseapp.com",
        databaseURL: "https://blogpersonal-2e02f.firebaseio.com",
        projectId: "blogpersonal-2e02f",
        storageBucket: "blogpersonal-2e02f.appspot.com",
        messagingSenderId: "998042698906"
    };
    firebase.initializeApp(config);
    firebase.auth().signInAnonymously().catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
    var userId = null;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var isAnonymous = user.isAnonymous;
            userId = user.uid;
        } else {
        }
    });
    if ($('#home').length > 0) {
        window.scrollTo(0, 0);
        var inputText = document.getElementById("text");
        if (inputText) {
            inputText.addEventListener("keyup", function (event) {
                event.preventDefault();
                if (event.keyCode === 13) {
                    showSectionHome(userId, 'enter');
                }
            });
        }
        var inputButton1 = document.getElementById("buscar");
        if (inputButton1) {
            inputButton1.addEventListener("click", function (event) {
                showSectionHome(userId, 'buscar');
            });
        }
        var inputButton2 = document.getElementById("suerte");
        if (inputButton2) {
            inputButton2.addEventListener("click", function (event) {
                showSectionHome(userId, 'suerte');
            });
        }
    }
});


var showSectionHome = function (userId, type) {
    $('body').removeClass('no-overflow');
    $('#aboutme').addClass('show');
    var id = 'aboutme';
    id = id.replace("link", "");
    $('html,body').animate({ scrollTop: $("#" + id).offset().top -100 }, 500);
    var db = firebase.firestore();
    console.log(userId);
    $.getJSON('https://api.ipgeolocation.io/ipgeo?apiKey=784cf4adcd644eda8dff65726f653dda', function (data) {
        var user = {
            id: userId,
            userAgent: navigator.userAgent,
            language: navigator.language,
            address: data
        };
        var text = $('input').val();
        // to move this to server side you need to pay... ^^
        $.ajax({
            type: "POST",
            url: 'https://hooks.slack.com/services/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',
            data: '{"text": "' + text + ' | '+  data.city + '" }',
            dataType: 'application/json'
        });

        db.collection("busquedas").add({
            text: $('input').val(),
            user: user,
            trigger: type
        }).then(function (docRef) {

            console.log("Document written with ID: ", docRef.id);
        }).catch(function (error) {
            console.error("Error adding document: ", error);
        });

    });
};

