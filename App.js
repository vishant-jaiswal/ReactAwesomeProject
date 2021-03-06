/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Deck from './src/Deck';
import {Card , Button} from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const DATA = [
  {id: 0, text: 'Card #1', uri:'https://newsyard-test.s3.amazonaws.com/news-yard-media-v1/story/story-2/xyz.png'},
  {id: 1, text: 'Card #2', uri:'https://newsyard-test.s3.amazonaws.com/news-yard-media-v1/story/story-2/xyz.png'},
  {id: 2, text: 'Card #3', uri:'https://newsyard-test.s3.amazonaws.com/news-yard-media-v1/story/story-2/xyz.png'},
  {id: 3, text: 'Card #4', uri:'https://newsyard-test.s3.amazonaws.com/news-yard-media-v1/story/story-2/xyz.png'},
  {id: 4, text: 'Card #5', uri:'https://newsyard-test.s3.amazonaws.com/news-yard-media-v1/story/story-2/xyz.png'},
  {id: 5, text: 'Card #6', uri:'https://newsyard-test.s3.amazonaws.com/news-yard-media-v1/story/story-2/xyz.png'},
  {id: 6, text: 'Card #7', uri:'https://newsyard-test.s3.amazonaws.com/news-yard-media-v1/story/story-2/xyz.png'},
  {id: 7, text: 'Card #8', uri:'https://newsyard-test.s3.amazonaws.com/news-yard-media-v1/story/story-2/xyz.png'},
];

export default class App extends Component<{}> {
  renderCard(item){
    return(
      <Card
        key = {item.id}
        image = {{uri : item.uri}}
        title = {item.text}
      >
        <Text style = {{ marginBottom:10 }}>
          I can customise the card further
        </Text>

        <Button 
          icon = {{name : 'home'}}
          backgroundColor = "#03A9F4"
          title = "Follow"
        />


      </Card>
    );
  }

  renderNoMoreCards(){
    return(
      <Card title = "All Card Done!">
        <Text style = {{ marginBottom:10 }}>
          No More Content Available
        </Text>
        <Button
          backgroundColor = "#03A9F4"
          title = "Get More!"
        />
      </Card>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <Deck 
          data = {DATA}
          renderCard = {this.renderCard}
          renderNoMoreCards = {this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
