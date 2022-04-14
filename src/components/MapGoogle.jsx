import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


function MapGoogle() {
  let defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
  }  
  return (
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB8L_9fwQqgfL9g9k3TkaR8_4jPBy6JW5Q" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
  )
}

export default MapGoogle