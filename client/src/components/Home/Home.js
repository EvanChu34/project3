import React, { Component } from 'react';
import Map from '../Map/Map.js';

class Home extends Component {

    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    center={{ lat:-73.945462, lng: 40.830182 }}
                    height='300px'
                    zoom={15}
                />
            </div>
        );
    }
}

export default Home;