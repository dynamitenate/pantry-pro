import React from 'react';
import Link from '../common/Link.jsx';

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
                            marginLeft: 15
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