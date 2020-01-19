document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
})


function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            document.write(`Hello ${user.displayName}, you have successfully signed in with Google.`);
            console.log(user)
        })
        .catch(console.log)
}  

function facebookLogin(){
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            var token = result.credential.getAccessToken('https://hackdavis-2020-265518.firebaseapp.com/__/auth/handler');
            const user = result.user;
            document.write(`Hello ${user.displayName}, you have successfully signed in with Facebook.`)
            console.log(user)
        })
        .catch(console.log)
}

function phoneLogin(){
    firebase.auth().languageCode = 'it';
    var phoneNumber = getPhoneNumberFromUserInput();
    var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        }).catch(function (error) {
         // Error; SMS not sent
        // ...
        });
        grecaptcha.reset(window.recaptchaWidgetId);

    var code = getCodeFromUserInput();
    confirmationResult.confirm(code).then(function (result) {
      // User signed in successfully.
      var user = result.user;
      // ...
    }).catch(function (error) {
      // User couldn't sign in (bad verification code?)
      // ...
    });
}