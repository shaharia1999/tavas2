import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/css/style.css'

// firebase
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { onAuthStateChanged } from 'firebase/auth'
import 'firebase/compat/auth';
import PanjabiProducts from'./pages/panjabi_products/PanjabiProducts.js'

// components
const TopNotificationBar = lazy(() => import('./components/top_notification_bar/NotificationBar.js'));
const Footer = lazy(() => import('./components/footer/Footer.js'));

// pages
const HomePage = lazy(() => import('./pages/home_page/Home.js'));
const SignIn = lazy(() => import('./pages/authentication/PhoneAuth.js'));
// const PanjabiProducts = lazy(() => import('./pages/panjabi_products/PanjabiProducts.js'));
const SinglePanjabiProduct = lazy(() => import('./pages/single_punjabi_product/SinglePanjabiProduct.js'));
const AboutUs = lazy(() => import('./pages/about_us/AboutUs.js'));
const ContactUs = lazy(() => import("./pages/contact_us/Contact.js"));
const IntellectualProperty = lazy(() => import('./pages/intellectual_property/IntellectualProperty.js'));
const PaymentPolicy = lazy(() => import("./pages/payment_policy/PaymentPolicy.js"));
const ShippingPolicy = lazy(() => import("./pages/shipping_policy/ShippingPolicy.js"));
const TermsConditions = lazy(() => import("./pages/terms_and_conditions/TermsConditions.js"));
const Cart = lazy(() => import("./pages/cart/Cart.js"));
const Checkout = lazy(() => import("./pages/checkout/Checkout.js"));
const MyAccount = lazy(() => import("./pages/my_account/MyAccount.js"));

const App = () => {
  // firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAIrHtmNgs-PXBg0-EsHQz8kFlTdKvgYqo",
    authDomain: "tavaas-updated.firebaseapp.com",
    projectId: "tavaas-updated",
    storageBucket: "tavaas-updated.appspot.com",
    messagingSenderId: "943476666495",
    appId: "1:943476666495:web:a7e91fdfd247a472230f4a",
    measurementId: "G-KHV9H85VNY"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unRegistered = onAuthStateChanged(firebase.auth(), (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    })
    return () => unRegistered();
  })

  return (
    <Suspense fallback={
      <div>
        <div className="tavaas-preloader-wrapper">
          <div className="tavaas-preloader">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    }>
      <Fragment>
        <TopNotificationBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={
            <SignIn auth={firebase.auth()} />
          } />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/panjabis' element={<PanjabiProducts />} />
          <Route path='/panjabis/:id' element={<SinglePanjabiProduct />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/intellectual-property' element={<IntellectualProperty />} />
          <Route path='/payment-policy' element={<PaymentPolicy />} />
          <Route path='/shipping-policy' element={<ShippingPolicy />} />
          <Route path='/terms-conditions' element={<TermsConditions />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/my-account' element={<MyAccount />} />
        </Routes>
        <Footer />
      </Fragment>
    </Suspense>
  );
};

export default App;