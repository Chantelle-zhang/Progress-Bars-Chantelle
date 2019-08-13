import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'


const ButtonGroup = ({buttons, onClick}) =>
    <div>
        <Row>
            {buttons.map((button)=>
                <Button
                    data-test='button'
                    key={button}
                    variant="info"
                    onClick={()=>onClick(button)}>{button}
                </Button>)}
        </Row>
    </div>;

ButtonGroup.propTypes = {
    onClick: PropTypes.func,
    buttons: PropTypes.array

};

export default ButtonGroup;


