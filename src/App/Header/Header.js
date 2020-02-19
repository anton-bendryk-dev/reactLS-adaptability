import React from 'react';
import './header.css';
import Logo from './Logo/Logo.js';
import HeaderContacts from './Header contacts/HeaderContacts.js';
import Navigation from './Navigation/Navigation.js';

const Header  = () => {
    return (
        <div className="header">
			<div className="inline-header">
				<div className="col-width-25 logo">
					<Logo/>
				</div>
				<div className="col-width-75">
					<div className="col-height-45">
						<HeaderContacts/>	
					</div>									
                    <div className="col-height-50">
                        <Navigation/>
                    </div>
                </div>
            </div>
        </div>    
    )
}
export default Header