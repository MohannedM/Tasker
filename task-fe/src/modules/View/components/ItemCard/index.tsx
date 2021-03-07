import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import './index.css'
import { ItemCardProps } from './types';

const ItemCard: React.FC<ItemCardProps> = ({ title, src, link, handleDelete }) => {
    return (
        <Card>
            <Link to={link}>
                <Card.Img src={src} width={'100%'} height="200" alt="any" />
            </Link>
            <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <div className="row">
                    <div className="col-xs-6 mr-auto ml-3">
                        <Link to={link}>
                            <FontAwesomeIcon icon={faSearch} size={'lg'} color={'#ff7675'} />
                        </Link>
                    </div>
                    <div className="col-xs-6 ml-auto mr-3">
                        <FontAwesomeIcon icon={faTrash} size={'lg'} color={'#d63031'} onClick={handleDelete} style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ItemCard