import React, {useEffect, useState, useRef} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import { BACKEND_URL } from './config';
import 'leaflet/dist/leaflet.css';

// Fix default icon issues in some bundlers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function MapComp(){
  const [reports, setReports] = useState([]);
  const mapRef = useRef();

  useEffect(()=>{
    axios.get(`${BACKEND_URL}/potholes`).then(res=>{
      setReports(res.data.reports || []);
    }).catch(e=>console.error(e));
  },[]);

  return (
    <MapContainer center={[26.9124,75.7873]} zoom={12} style={{height:'80vh', width:'100%'}}> 
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {reports.map(r => (
        <Marker key={r._id} position={[r.lat, r.lon]}> 
          <Popup>
            <div style={{width:220}}>
              <img src={r.image_url} alt='pothole' style={{width:'100%'}} />
              <p>Severity: {r.severity}</p>
              <p>Status: {r.status}</p>
              <p>{new Date(r.timestamp).toLocaleString()}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
