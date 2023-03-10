import { React, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarMobile, NavBarComputer } from './NavBar';
import { MapContainer, TileLayer, Marker, CircleMarker, SVGOverlay, Tooltip } from 'react-leaflet';
import './css/MapBarsPage.css'
import MarkerClusterGroup from "react-leaflet-markercluster";
import { barNames, barPosition, barIds, barCheapestPrice } from './Data'
import { useAuth } from '../utils/authentification';

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