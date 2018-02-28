import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  // set default state
  state = {
    albums: []
  };

  // componentWillMount will be executed as soon as this component is displayed
  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    console.log(this.state);
    return <View>{this.renderAlbums()}</View>;
  }
}
