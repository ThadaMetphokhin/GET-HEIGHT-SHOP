import { React, useState, useEffect } from 'react';
import './faceloginbutton.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
let access_token = '';
let user_id = '';
let user_email = '';
function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
        fb_login();
    } else {                                 // Not logged into your webpage or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' + 'into this webpage.';
    }
}
window.fbAsyncInit = function () {
    FB.init({
        appId: '1429423900840505',
        cookie: true,
        xfbml: true,
        version: 'v14.0'
    });
    FB.getLoginStatus(function (response) {   // Called after the JS SDK has been initialized.
        statusChangeCallback(response);        // Returns the login status.
    });

};
function fb_login() {

    FB.login(function (response) {

        if (response.authResponse) {
            console.log('ค่าที่ได้มา');
            console.log(response);
            console.log('Welcome!  Fetching your information.... ');
            //console.log(response); // dump complete info
            access_token = response.authResponse.accessToken; //get access token
            user_id = response.authResponse.userID; //get FB UID

            FB.api('/me', function (response) {
                console.log('Successful login for: ' + response.name);
                document.getElementById('status').innerHTML =
                    'Thanks for logging in, ' + response.name + '!';
                user_email = response.email; //get user email
                // you can store this data into your database             
            });

        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');

        }
    }, {
        scope: 'public_profile,email'
    });
}
(function () {
    var e = document.createElement('script');
    e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
    e.async = true;
    document.getElementById('fb-root').appendChild(e);
}());
const Facelogin1 = (response) => {
    if (response) {
        return (
            <>
                <div className='d-grid gap-2'>
                    <Button className="buttonlogin" onClick={fb_login}>
                        <img className='image-icon1' width={'30'} height={'30'} src='https://cdn-icons.flaticon.com/png/512/3670/premium/3670032.png?token=exp=1658440387~hmac=7ea04142f4c5b20ae4acf261ae231a87' />
                        Continue with FaceBook
                    </Button>
                    <div id="status"></div>
                </div>
                <div className='d-grid gap-2'>
                    <Button className="buttonlogin" onClick={fb_login}>
                        <img className='image-icon2' width={'30'} height={'30'} src='https://cdn-icons-png.flaticon.com/512/2702/2702602.png' />
                        Continue with Google
                    </Button>
                    <div id="status"></div>
                </div>
            </>
        )
    }
}
export default Facelogin1;