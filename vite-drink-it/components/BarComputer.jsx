import { PinMapFill, ListUl } from 'react-bootstrap-icons';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';

export const BarComputer = () => {
    return (
        <div>
            <Row>
                <NavLink to='/MapBars'> <PinMapFill /> Map </NavLink>
            </Row>
            <Row>
                <NavLink to='/ListBars'> <ListUl /> List </NavLink>
            </Row>
        </div>
    )
}