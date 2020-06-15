import React from 'react';
import { Link } from 'react-router-dom';

class NavbarLinks extends React.Component {
    render() {
        return (
            <div
                className={'navbar-list'}
                style={{ padding: 10 }}
            >
                {this.props.links.map((link, index) => 
                    <Link
                        style={{
                            order: index,
                            paddingLeft: 10
                        }}
                        to={link.route}
                    >
                        {link.label}
                    </Link>
                )}
            </div>
        );
    }
};

export default NavbarLinks;