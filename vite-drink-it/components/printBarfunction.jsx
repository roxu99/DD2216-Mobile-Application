import './css/ListBarPage.css'
import { barNames, barIds, barLiked, barCheapestPrice, correspondVolume, barAddress } from './Data'
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import React, {useState}from 'react'


export default function printBar(id) {
    const [liked, ChangeLike] = useState(barLiked[id])

    function LikeBar() {
        barLiked[id] = 1 - barLiked[id]
        ChangeLike(barLiked[id])
    }
    const name = barNames.at(id)
    return (
        <div className="indiv-bar-box">
            <h2><Link to={'../Bar/' + id}>{name}</Link>
                {
                    liked == 1 ? <HeartFill id="fav" onClick={LikeBar}></HeartFill> : <Heart id="fav" onClick={LikeBar}></Heart>
                }
            </h2>

            <Table id="table-generic" className="table">
                <tbody className="borderless">
                    <tr>
                        <th scope="row">100m</th>
                        <td className="red-price">{barCheapestPrice[id]} kr/ {correspondVolume[id]}cl</td>
                    </tr>
                    <tr>
                        <th scope="row">2min walk</th>
                        <td>{barCheapestPrice[id] / correspondVolume[id] * 100} kr/L</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
