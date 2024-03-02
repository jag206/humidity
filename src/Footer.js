import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Footer() {
    return (
        <Navbar fixed="bottom" className="justify-content-center">
            <p>Copyright © 2024 <a href="https://www.jamesgunn.dev">James Gunn</a></p>
        </Navbar>
    )
}

export default Footer;