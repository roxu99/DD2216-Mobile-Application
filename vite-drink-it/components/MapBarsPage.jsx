import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarMobile, NavBarComputer } from './NavBar';
import { MapContainer, TileLayer, Marker, CircleMarker, SVGOverlay, Tooltip } from 'react-leaflet';
import './css/MapBarsPage.css'
import MarkerClusterGroup from "react-leaflet-markercluster";

export default function MapBarsPage() {
    const position = [59.346, 18.071];
    // const position = [51.505, -0.09]
    return (
        <div className='Page'>
            <Container fluid className="List Bar Content">
                <Row>
                    <Col md={2} className="d-md-block d-none">
                        <NavBarComputer></NavBarComputer>
                    </Col>
                    <Col md={10} sm={12} className='Map'>
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
                                <BarPosition position={[59.346, 18.071]} price={"50"}></BarPosition>
                                <BarPosition position={[59.3146, 18.0271]} price={"40"}></BarPosition>
                                <BarPosition position={[59.3746, 18.0371]} price={"20"}></BarPosition>
                                <Marker position={[49.8397, 24.0297]} />
                                <Marker position={[52.2297, 21.0122]} />
                                <Marker position={[51.5074, -0.0901]} />
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
    return (
        <CircleMarker
            center={props.position}
            pathOptions={{ color: 'red' }}
            radius={20}
            fillOpacity={0.5}>
            <Tooltip permanent direction='center' opacity={1} className='text'><b>{props.price} kr</b></Tooltip>
        </CircleMarker>)
}