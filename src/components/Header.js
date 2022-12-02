import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Header = () => {
    const phones = useLoaderData()
    console.log(phones);
    return (
        <div>
            <h2>Show me all the phones you have</h2>
            <h5>I got users: {phones.length}</h5>
            {
                phones.map( ph => <li><Link to={`/phones/${ph.id}`}>{ph.name}</Link></li> )
            }
        </div>
    );
};

export default Header;