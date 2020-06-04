import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLinks = (props) => (
    <div>
        {this.props.links.map(link => 
            <Link to={link.route}>{link.label}</Link>
        )}
    </div>
);

export default NavbarLinks;