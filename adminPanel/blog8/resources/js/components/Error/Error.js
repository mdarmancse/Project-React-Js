import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import error from '../../../images/error.svg';

class Error extends Component {
    render() {
        return (
            <>
                <Container className="text-center">
                    <img className="loader" src={error}/>
                </Container>

            </>
        );
    }
}

export default Error;
