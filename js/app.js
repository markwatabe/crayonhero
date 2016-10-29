import 'babel-polyfill';

import App from './components/App';
import AppHomeRoute from './routes/AppHomeRoute';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

var config = {
  apiKey: "AIzaSyAgfp9axG6Z8ZQB-tIA0SDHTqhvCa08mvI",
  authDomain: "potli-b977a.firebaseapp.com",
  databaseURL: "https://potli-b977a.firebaseio.com",
  storageBucket: "potli-b977a.appspot.com",
};
firebase.initializeApp(config);
const gameNumber = 101;

var gameRef = firebase.database().ref('games/' + gameNumber);
const self = this;
gameRef.on('value', function(snapshot) {
  console.log("BOOO", snapshot.val());
  if(!snapshot.val()) {
    console.log("no val")
    //firebase.database().ref('games/' + gameNumber).set(getGame());
  } else {
    /*self.setState({
      gameRef: snapshot.val(),
    })*/
  }
});
console.log("hrmm")

ReactDOM.render(
  <Relay.Renderer
    environment={Relay.Store}
    Container={App}
    queryConfig={new AppHomeRoute()}
  />,
  document.getElementById('root')
);