import React from 'react';
import PreLoader from "./application/components/PreLoader";
import GuestNavigation from './application/navigations/guest';
import firebaseConfig from './application/utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);


export default class App extends React.Component {
  render() {
    return (
        <GuestNavigation/>
    );
  }
}
