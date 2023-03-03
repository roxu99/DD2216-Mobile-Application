import { React, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavBarMobile, NavBarComputer } from './NavBar';
import { MapContainer, TileLayer, Marker, CircleMarker, SVGOverlay, Tooltip } from 'react-leaflet';
import './css/MapBarsPage.css'
import MarkerClusterGroup from "react-leaflet-markercluster";
import { barNames, barPosition, barIds, barAddress, barLiked, barCheapestPrice, correspondVolume, suggestion, barIds_wiki } from './Data'
import { usePermissions } from 'react-admin'
import axios from 'axios';
import { CollectionFill } from 'react-bootstrap-icons';
import { useAuth } from '../utils/authentification';

export default function Admin() {
    const context = useAuth()
    const navigate = useNavigate();
    if (context.autorisation < 2) {
        navigate('/ListBars')
    }
    const permission = 'admin'//usePermissions()
    const [research, ChangResearch] = useState('')
    const [id, ChangeID] = useState('')
    const [descrip, ChangeDescrib] = useState('')
    const [bars, ChangeList] = useState([])
    const [text_submit, ChangeText] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault();
        ChangeList([])
        const web_coord = "https://nominatim.openstreetmap.org/search?city=" + encodeURI(research) + "&format=json"
        var test = await axios.get(web_coord)
        if (test.data.length > 0) {
            const query = "[out:json];node[amenity=bar](" + test.data[0]["boundingbox"][0] + "," + test.data[0]["boundingbox"][2] + "," + test.data[0]["boundingbox"][1] + "," + test.data[0]["boundingbox"][3] + ");out;"
            const web = "https://overpass-api.de/api/interpreter?data="
            const res_2 = await axios.get(web + encodeURI(query))
            var text = "We have found " + res_2.data.elements.length.toString() + " in this city :"
            var list = []
            for (var i = 0; i < res_2.data.elements.length; i++) {
                list.push(res_2.data.elements[i]["tags"]["name"])
            }
            ChangeText(text)
            ChangeList(list)
        }
        else {
            ChangeText("City not found")
        }
    }
    const addAll = async (event) => {
        event.preventDefault();
        ChangeList([])
        const web_coord = "https://nominatim.openstreetmap.org/search?city=" + encodeURI(research) + "&format=json"
        var test = await axios.get(web_coord)
        if (test.data.length > 0) {
            const query = "[out:json];node[amenity=bar](" + test.data[0]["boundingbox"][0] + "," + test.data[0]["boundingbox"][2] + "," + test.data[0]["boundingbox"][1] + "," + test.data[0]["boundingbox"][3] + ");out;"
            const web = "https://overpass-api.de/api/interpreter?data="
            const res_2 = await axios.get(web + encodeURI(query))
            for (var i = 0; i < res_2.data.elements.length; i++) {
                var wikiID = res_2.data.elements[i]["id"]
                if (!barIds_wiki.includes(wikiID)) {
                    barIds_wiki.push(wikiID)
                    var Position = [res_2.data.elements[i]["lat"], res_2.data.elements[i]["lon"]]
                    var Name = res_2.data.elements[i]["tags"]["name"]
                    barNames.push(Name)
                    barPosition.push(Position)
                    barAddress.push("")
                    barLiked.push(0)
                    barIds.push(barIds.length)
                    barCheapestPrice.push("")
                    correspondVolume.push("")
                    suggestion.push([])
                }
                //add values somewhere
            }
            ChangeText('')
            ChangeList([])
            navigate("/Admin")
        }

    }
    return (
        <div className="Page">
            <NavBarComputer></NavBarComputer>
            {context.autorisation === 2 &&
                <Container className='justify-center'>
                    {bars.length == 0 &&
                        <form method='post' onSubmit={handleSubmit}>
                            <Row>
                                <Col md={8} sm={12} className="offset-md-3">
                                    <input type={"text"} name="name" onChange={(e) => ChangResearch(e.target.value)} placeholder='City to scan'></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8} sm={12} className="offset-md-3">
                                    <Button type='submit'>Search</Button>
                                </Col>
                            </Row>
                        </form>
                    }
                    <Row>
                        <Col md={8} sm={12} className="offset-md-3">
                            {text_submit}
                        </Col>
                    </Row>
                    {bars.length > 0 &&
                        <Row>
                            <Col md={8} sm={12} className="offset-md-3">
                                <Button onClick={addAll}>
                                    Add all
                                </Button>
                            </Col>
                        </Row>
                    }
                    {bars.map(id => (
                        <Row key={id}>
                            <Col md={8} sm={12} className="offset-md-3">
                                {id}
                            </Col>
                        </Row>
                    ))
                    }
                </Container>
            }
            <NavBarMobile></NavBarMobile>
        </div >
    )
}

