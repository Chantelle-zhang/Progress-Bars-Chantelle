import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'


const ButtonGroup = ({buttons, onClick}) =>
    <div>
        <Row>
            {buttons.map((button) =>
                <Col key={button}>
                    <Button
                        data-test='button'
                        variant="info"
                        onClick={() => onClick(button)}>{button}
                    </Button>
                </Col>)}
        </Row>
    </div>;

ButtonGroup.propTypes = {
    onClick: PropTypes.func,
    buttons: PropTypes.array

};

export default ButtonGroup;


