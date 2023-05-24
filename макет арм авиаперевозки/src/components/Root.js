import React, { useReducer } from 'react'
import { UserContext, UserDispatchContext } from '../store/UserContext'
import Header from './Header'
import { Container } from 'react-bootstrap'
import {
    Outlet
} from "react-router-dom"
import userReducer from '../store/userReducer'

export default function Root() {
    const [user, dispatch] = useReducer(userReducer, JSON.parse(localStorage.getItem('user') || null))
    return (
        <div className="App">
            <UserContext.Provider value={user}>
                <UserDispatchContext.Provider value={dispatch}>
                    <Header />
                    <Container>
                        <Outlet />
                    </Container>
                </UserDispatchContext.Provider>
            </UserContext.Provider>
        </div>
    )
}
