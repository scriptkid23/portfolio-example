import React from 'react'
// rfc: react function component
import NavigationBar from '../components/NavigationBar'
import Header from '../components/Header'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
export default function App() {
    return (
        <>
            <NavigationBar/>
            <Header/>
            <Portfolio/>
            <About/>
            <Contact/>
            <Footer/>
            <Copyright owner={"123"}/>
        </>
    )
}
