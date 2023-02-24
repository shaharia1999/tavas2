import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/css/style.css'

// firebase
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { onAuthStateChanged } from 'firebase/auth'
import 'firebase/compat/auth';
import PanjabiProducts from'./pages/panjabi_products/PanjabiProducts.js'
import Sale from './components/Sale/Sale';
import MyAccountNew from './components/MyAccount/MyAccountNew';
import PrivetPolicy from './pages/privetPolicy/PrivetPolicy';
import SizeGide from './pages/SizeGide/SizeGide';
import LotaraliProgram from './pages/LotaraliProgram/LotaraliProgram';
import ShoppingPolicy from './pages/ShoppingPolicy/ShoppingPolicy';
import Return from './pages/Return/Return';
import OpeningpopUp from './components/OpeningPopUp/OpeningpopUp';
import PusNotification from './components/PusNotification/PusNotification';
import NewCard from './components/NewCard/NewCard';
import NewChackout from './components/NewChackout/NewChackout';
import E404 from './components/404/E404';
import Sing_upFirst from './components/SingUpandLogin/Sing_upFirst';
import SingUpsecond from './components/SingUpandLogin/SingUpsecond';
import Login from './components/SingUpandLogin/Login';
import ForgetPassword from './components/SingUpandLogin/ForgetPassword';

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
          <Route path='/sale' element={<Sale/>} />
          <Route path='/panjabis/:id' element={<SinglePanjabiProduct />} />
          <Route path='/privacy-policy' element={<PrivetPolicy/>} />
          <Route path='/shipping-policy' element={<ShoppingPolicy/>} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/intellectual-property' element={<IntellectualProperty />} />
          <Route path='/error' element={<E404 />} />
          <Route path='/loyalty-program' element={<LotaraliProgram></LotaraliProgram>} />

          <Route path='/exchange-return' element={<Return/>} />
          <Route path='/payment-policy' element={<PaymentPolicy />} />
          <Route path='/payment-policy' element={<PaymentPolicy />} />
          <Route path='/size-guide' element={<SizeGide/>} />
          <Route path='/terms-conditions' element={<TermsConditions />} />
          {/* <Route path='/cart' element={<Cart />} /> */}
          <Route path='/pusnotification' element={<PusNotification/>} />
          {/* <Route path='/checkout' element={<Checkout />} /> */}
          <Route path='/opening-pop' element={<OpeningpopUp/>} />
          <Route path='/opening-pop' element={<OpeningpopUp/>} />
          <Route path='/newCard' element={<NewCard></NewCard>} />
          <Route path='/newCheckout' element={<NewChackout></NewChackout>} />
          <Route path='/myAccount' element={<MyAccountNew/>} />
          <Route path='/sing_upFirst' element={<Sing_upFirst/>} />
          <Route path='/sing_upSecend' element={<SingUpsecond/>} />
          <Route path='/login' element={<Login></Login>} />
          <Route path='/forgetPass' element={<ForgetPassword></ForgetPassword>} />

        </Routes>
        <Footer />
      </Fragment>
    </Suspense>
  );
};

export default App;