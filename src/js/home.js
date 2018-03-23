
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
    goToByScroll('aboutme', 500);
    var db = firebase.firestore();
    console.log(userId);
    $.getJSON('//freegeoip.net/json/?callback=?', function (data) {
        var user = {
            id: userId,
            userAgent: navigator.userAgent,
            language: navigator.language,
            address: data
        };
        var text = $('input').val();
        // move this to server... ^^
        $.ajax({
            type: "POST",
            url: 'https://hooks.slack.com/services/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',
            data: '{"text": "' + text + '" }',
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

