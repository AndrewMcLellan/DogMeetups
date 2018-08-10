import React, { Component } from 'react'

class MapContainer extends Component {
  constructor(props) {
    super(props);


  }


  componentDidMount() {
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDkM_s3tnT3D0afumdd74ebSJoeF3r42Dw&callback=initMap');
  }

  initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: 42.3611, lng: -71.0570}
    })
  }
  render() {
    return(
      <div>
        <div id="map" style={{height: '300px', width: '300px'}}></div>
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
