import React from 'react';
import {Text} from 'react-native-elements';
import PreLoader from "./application/components/PreLoader";
import GuestNavigation from './application/navigations/guest';
import LoggedNavigation from './application/navigations/logged';
import firebaseConfig from './application/utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);
import RestaurantEmpty from "./application/components/Restaurant/RestaurantEmpty";

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      isLogged: false,
      loaded: false,
      user2: null,
    }

  }

  async  componentDidMount () {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        this.setState({
          isLogged: true,
          loaded: true,
          user2: user,
        });

      } else {
        this.setState({
          isLogged: false,
          loaded: true
      });
    }
  })
}
  render() {
    const {isLogged,loaded} = this.state;
    if (! loaded) {
      return (<PreLoader />);
    }
    if (isLogged) {
      /*return(<Text>Tas loggeado papa</Text>);*/
      //return(<RestaurantEmpty text="piijiiiiiiin"/>)
      return (<LoggedNavigation />)
    } else {
      return (
          <GuestNavigation/>
      );
    }
  }
}
