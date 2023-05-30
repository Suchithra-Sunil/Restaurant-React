import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Restaurant.css'
import { Link } from 'react-router-dom';
import { getRestaurants } from './actions/restAction';
import { useDispatch, useSelector } from 'react-redux';


function Restaurant() {

    // const [restList, setRest] = useState([])

    //api to access data
    // const getData = async () => {
    //     const result = await fetch('/restaurants.json')
    //     result.json().then(data => setRest(data.restaurants))
    // }
    // console.log(restList);

    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(getRestaurants)
    }, [])

    const {restList}=useSelector(state=>state.reducer1)
    console.log(restList);

    return (
        <Row>
            {
                restList.map(rest => (
                    <Col id='c1' className='' lg={4} md={6}>
                        <Link id='l1' to={`/restview/${rest.id}`}>
                            <Card className='mt-2 ms-5' style={{ width: '18rem',height:'550px' }}>
                                <Card.Img variant="top" src={rest.photograph} />
                                <Card.Body>
                                    <Card.Title>{rest.name}</Card.Title>
                                    <Card.Text style={{color:'white'}}>
                                        {rest.address}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))
            }
        </Row>
    )
}

export default Restaurant