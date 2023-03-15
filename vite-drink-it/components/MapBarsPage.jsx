import { React, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarMobile, NavBarComputer } from './NavBar';
import { MapContainer, TileLayer, Marker, CircleMarker, SVGOverlay, Tooltip, useMap } from 'react-leaflet';
import './css/MapBarsPage.css'
import MarkerClusterGroup from "react-leaflet-markercluster";
import { barNames, barPosition, barIds, barCheapestPrice } from './Data'
import { useAuth } from '../utils/authentification';
import { Icon1Circle } from 'react-bootstrap-icons';
import { Icon } from 'leaflet';

export default function MapBarsPage() {
    const context = useAuth()

    if (context.autorisation < 1) {
        const navigate = useNavigate()
        navigate("/login")
    } const position = [59.346, 18.071];
    // const position = [51.505, -0.09]
    return (
        <div className='Page'>
            <NavBarComputer></NavBarComputer>
            <Container fluid className="Map Bar Content">
                <Row>
                    <Col md={10} sm={12} className='Map offset-md-2'>
                        <div id="map">
                            <MapContainer
                                className="markercluster-map"
                                center={position}
                                zoom={13}
                                maxZoom={18}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                />
                                {barIds.map(id => (
                                    <BarPosition key={id} position={barPosition.at(id)} price={barCheapestPrice.at(id)} id={barIds.at(id)} name={barNames.at(id)}></BarPosition>
                                ))
                                }
                                <LocationMarker></LocationMarker>
                            </MapContainer>
                        </div>
                    </Col>
                </Row>
            </Container>
            <NavBarMobile></NavBarMobile>
        </div>
    )
}

function BarPosition(props) {
    let navigate = useNavigate();
    const eventHandlers = useMemo(
        () => ({
            click() {
                let path = "../Bar/" + props.id;
                navigate(path);
            },
        }),
        [],
    )
    return (
        <div>
            {props.price > 0 &&
                <div>
                    <CircleMarker
                        center={props.position}
                        pathOptions={{ color: 'red' }}
                        radius={20}
                        fillOpacity={0.5}
                        eventHandlers={eventHandlers}>
                        <Tooltip direction='top'>{props.name}</Tooltip>
                    </CircleMarker>
                    <CircleMarker
                        center={props.position}
                        pathOptions={{ color: 'red' }}
                        radius={0}
                        fillOpacity={0.5}>
                        <Tooltip permanent direction='center' opacity={1} className='price'><b>{props.price} kr</b></Tooltip>
                    </CircleMarker>
                </div>
            }
            {props.price.length == 0 &&
                <div>
                    <CircleMarker
                        center={props.position}
                        pathOptions={{ color: 'grey' }}
                        radius={20}
                        fillOpacity={0.2}
                        eventHandlers={eventHandlers}>
                        <Tooltip direction='top'>{props.name}</Tooltip>
                    </CircleMarker>
                    <CircleMarker
                        center={props.position}
                        pathOptions={{ color: 'grey' }}
                        radius={0}
                        fillOpacity={0.2}>
                        <Tooltip permanent direction='center' opacity={1} className='price'><b></b></Tooltip>
                    </CircleMarker>
                </div>
            }
        </div>)
}

function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap();

    useEffect(() => {
        map.locate().on("locationfound", function (e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, 15);
            const radius = e.accuracy;
            const circle = L.circle(e.latlng, radius, { fillOpacity: 0.1, stroke:false });
            circle.addTo(map);
            const radius_2 = 5;
            const circle_2 = L.circle(e.latlng, radius_2, { fillOpacity: 1, color:'blue', stroke:false });
            circle_2.addTo(map);
            setBbox(e.bounds.toBBoxString().split(","));
        });
    }, [map]);

    return position === null ? null : (
        <CircleMarker
            center={position}
            pathOptions={{ color: 'blue' }}
            radius={2}
            fillOpacity={1}>
        </CircleMarker>
    );
}