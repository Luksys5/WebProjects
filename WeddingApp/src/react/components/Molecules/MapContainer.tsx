import React from 'react';
import { Map, Marker, GoogleApiWrapper, MapProps } from 'google-maps-react';

interface LocationProps {
  title: string;
  location: {
    lat: number;
    lng: number;
  }
}

const MapContainer: React.StatelessComponent<MapProps & LocationProps> = (props) => {

  const {google, title, location} = props;
  return (
    <div className='m-map-container'>
      <Map google={google} zoom={14} initialCenter={location}>
        <Marker title={title} mapCenter={ new google.maps.LatLng(location.lat, location.lng, true) } />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAKRXuVfaPQp_csiVerD4Xs1O89kpIBH7Y',
  LoadingContainer: () => <div>Loading Map</div>
})(MapContainer);