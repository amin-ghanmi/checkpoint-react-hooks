import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ Movies }) => {
    return (
        <div className="col-md-4 m-top 10px">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Movies.Poster} />
                <Card.Body>
                    <Card.Title>{Movies.Title}</Card.Title>
                    <Card.Text>
                        {Movies.Description}
                    </Card.Text>
                    <Card.Text className='gold'>
                        {"".padStart(Movies.Rate, '☆')}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
