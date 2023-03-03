import React, {useCallback, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function PopUpForm() {
    const navigate = useNavigate();
    // const handleOnClick = useCallback( () => navigate('/ListBars'))
    const handleOnClick = useCallback( () => window.close())
    
    return (
        <Container fluid className="modal-background">
            <div className="modalContainer">
                <div className="title"></div>
                    <h1>Cheaper price found</h1>
                <div className="body"></div>
                    <form>
                        <p>
                            <label>
                                Cheapest Price<br/>
                                <input type="text" name="price" onChange={(e) => setUser(e.target.value)}/>
                            </label>
                        </p>
                        <p>
                            <label>
                                For how many cL?<br/>
                                <input type="text" name="volume" onChange={(e) => setUser(e.target.value)}/>
                            </label>
                        </p>
                    </form>
                <div className="footer"></div>
                    <button onClick={handleOnClick}>
                        Cancel
                    </button>
                    <button onClick={handleOnClick}>
                        Save
                    </button>
            </div>
        </Container>
    )
}
