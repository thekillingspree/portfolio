import React, { Component } from 'react'
import styles from './styles/index.module.scss';
import Hero from './components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css'
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Final';


class App extends Component {
    componentDidMount() {
        AOS.init();
    }
    render() {
        return (
            <div className={styles.main}>
                    <Hero offset={0} speed={1}/>
                    <About offset={1} speed={2} />
                    <Projects />
                    <Footer />
                    <Navbar />
            </div>
        )
    }
}

export default App