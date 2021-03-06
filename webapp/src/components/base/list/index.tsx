import React from 'react';
import ListItem from './listItem';

const List = (props: any) => {
    return (
        <ul className="list-group" data-testid="list">
            { props.items.map((item: any) => <ListItem key={item.id} item={item} {...props} />) }
        </ul>
    );
}

export default List;