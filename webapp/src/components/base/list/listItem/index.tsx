import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (props: any) => {
    return (
        <li className="list-group-item">
            {
                props.withLinks 
                    ? <Link to={`/${props.item.id}`} >{props.item.name}</Link>
                    : props.item.name
            }
        </li>
    );
}

export default ListItem;