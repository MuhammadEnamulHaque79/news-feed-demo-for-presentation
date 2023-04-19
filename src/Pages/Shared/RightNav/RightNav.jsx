import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <h4 className='mb-3'>Login With</h4>
            <Button className='mb-2' variant="outline-secondary"><FaGoogle className='me-2'></FaGoogle>Login With Google</Button>
            <Button variant="outline-success"><FaGithub className='me-2'></FaGithub>Login With Github</Button>
            <div>
                <h4 className='mt-3'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='me-2'></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='me-2'></FaTwitter>Twitter </ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='me-2'></FaInstagram>Instagram</ListGroup.Item>
                    
                </ListGroup>

            </div>
            <QZone></QZone>
            <img src={bg} alt="" />
        </div>
    );
};

export default RightNav;