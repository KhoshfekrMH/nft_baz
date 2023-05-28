import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div id="footer">
            <footer>
                <Container fluid="md">
                    <Row>
                        <Col>
                            <p>Copyright ⓒ {year}</p>
                            <p>Developed by Khoshfekr with ☕ & ❤️</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};