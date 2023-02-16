import  { React,useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
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
            <Container fluid className="Map Bar Content">
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
                                <BarPosition position={[59.346, 18.071]} price={"50"} id={"0"} name={"First Bar"}></BarPosition>
                                <BarPosition position={[59.3146, 18.0271]} price={"40"} id={"1"} name={"Second Bar"}></BarPosition>
                                <BarPosition position={[59.3746, 18.0371]} price={"20"} id={"2"} name={"Third Bar"}></BarPosition>
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
            let path = "../Bar/"+props.id;
            navigate(path);
              },
        }),
        [],
      )
    return (
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
        </div>)
}