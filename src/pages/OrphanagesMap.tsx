import React from 'react';
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer } from 'react-leaflet'

import mapMarker from '../images/map.svg';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';

import 'leaflet/dist/leaflet.css'

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>Santana de Parnaiba</span>
                </footer>
            </aside>

            <MapContainer 
                center={[-23.3918204,-46.8737419]}
                zoom={15}
                style={{ width:'100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {/*<TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?acess_token=${process.env.REACT_APP_MAP_TOKEN}`}/>*/}
            </MapContainer>
            <Link to="" className="create-orphanages">
                <FiPlus size={32} color="#FFF"/>
            </Link>

        </div>
    )
};

export default OrphanagesMap;