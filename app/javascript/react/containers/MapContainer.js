import React, { Component } from 'react'

class MapContainer extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAHEwmfEgNVYI7-_F2MkyYFHg0ybzcyxxUcallback=initMap');
  }

  initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: this.props.lat, lng: this.props.lng}
    })
  }
  render() {
    return(
      <div>
        <div id="map" style={{height: '500px', width: '500px'}}></div>
      </div>
    )
  }
}

export default MapContainer

function loadJS(src){
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}
