import { ICat } from '../models/ICat';
import Card from 'react-bootstrap/Card';
import React from 'react'

interface ICatsProps {
    cats: ICat[];
}

export const Cats = ({ cats }: ICatsProps): JSX.Element => (
    <>
        {
            cats.map(({ id, created_at, tags }) => (
                <Card className='mb-5' key={id}>
                    <Card.Header><b>Cat id:</b> {id}</Card.Header>
                    <Card.Body>
                        <ul>
                            <li><b>Created At:</b> {created_at}</li>
                            <li><b>Tags:</b> {tags.join(' ')}</li>
                        </ul>
                    </Card.Body>
                </Card>
            ))
        }
    </>
)   