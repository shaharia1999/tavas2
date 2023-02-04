import React, { Fragment, lazy, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import '../../assets/css/style.css'

const Navbar = lazy(() => import('../../components/menubar_without_transparent_background/Navbar.js'));

const PhoneAuth = (props) => {
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.auth);
        ui.start('.phone-auth-container', {
            signInOptions: [
                {
                    provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                    defaultCountry: "BD"
                },
            ],
            signInSuccessUrl: "https://github.com/Uchchash346/Tavaas-Updated",
            privacyPolicy: "/"
        })
    }

    )
    return (
        <Fragment>
            <Navbar />
            <div className="phone-auth-container my-16">
            </div>
        </Fragment>
    );
};

export default PhoneAuth;