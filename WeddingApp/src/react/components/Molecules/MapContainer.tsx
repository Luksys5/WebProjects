import React from 'react';
import { Map, Marker, GoogleApiWrapper, MapProps } from 'google-maps-react';

export const LatLng = {
  lat: 54.682564,
  lng: 25.281937
};

const MapContainer: React.StatelessComponent<MapProps> = (props) => {

  const {google} = props;
  return (
    <div className='m-map-container'>
      <Map google={google} zoom={14} initialCenter={{...LatLng}}>
        <Marker title=" baznycia test" mapCenter={ new google.maps.LatLng(LatLng.lat, LatLng.lng, true) } />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAKRXuVfaPQp_csiVerD4Xs1O89kpIBH7Y',
  LoadingContainer: () => <div>Loading Map</div>
})(MapContainer);