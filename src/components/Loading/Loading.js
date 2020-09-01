import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import loading from '../../asset/images/loading.svg'

class Loading extends Component {
    render() {
        return (
            <>
                <Container className="text-center">
                    <img className="loader" src={loading}/>
                </Container>

            </>
        );
    }
}

export default Loading;
