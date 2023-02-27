import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios'

import LoginPage from '../components/LoginPage'
import SignInPage from '../components/SignInPage'
import ListBarsPage from '../components/ListBarsPage'
import MapBarsPage from '../components/MapBarsPage'
import { NoMatch } from '../components/NoMatchPage'
import BarBarasBacke from '../components/BarPages/BarasBacke'
import BarGeneric from '../components/BarPages/BarGenericPage'
import MyFavoriteBars from '../components/MyFavoritePage';
import { AuthProvider } from '../utils/authentification';
import PopUpForm from '../components/BarPages/BarPopUpForm'
import Admin from '../components/AdminPage';

function App() {

    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<LoginPage></LoginPage>}> </Route>
                <Route path='/login' element={<LoginPage></LoginPage>}> </Route>
                <Route path='/SignIn' element={<SignInPage></SignInPage>}> </Route>
                <Route path='/ListBars' element={<ListBarsPage></ListBarsPage>}>
                </Route>
                <Route path='/Bar'>
                    {/* Nested Routes */}
                    <Route path='BarasBacke' element={<BarBarasBacke></BarBarasBacke>}> </Route>
                    <Route path=':barId' element={<BarGeneric></BarGeneric>}> </Route>
                </Route>
                <Route path='NewSuggestionForm' element={<PopUpForm></PopUpForm>}></Route>
                <Route path='/MapBars' element={<MapBarsPage></MapBarsPage>}> </Route>
                <Route path='/MyFavorites' element={<MyFavoriteBars></MyFavoriteBars>}> </Route>
                <Route path='/Admin' element={<Admin></Admin>}> </Route>
                <Route path='*' element={<NoMatch></NoMatch>} ></Route>

                {/* <Route path='/ListBar/BarasBacke' element={<BarBarasBacke></BarBarasBacke>}> </Route> */}
            </Routes>
        </AuthProvider>
    )
}

export default App
