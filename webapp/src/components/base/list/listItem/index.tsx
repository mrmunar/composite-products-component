import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (props: any) => {
    return (
        <li className="list-group-item" data-testid="list-item">
            {
                props.withLinks
                    ? <Link to={`/${props.item.id}`} data-testid="list-item-link">
                        {props.item.name}
                    </Link>
                    : props.item.name
            }
        </li>
    );
}

export default ListItem;