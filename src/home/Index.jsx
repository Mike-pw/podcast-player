import React from 'react';
import { Search } from './Search'
import { accountService } from '@/_services';

function Home() {
    const user = accountService.userValue;

    return (
        <div className="p-4">
            <div className="container">
                <h2>Hi {user.email}!</h2>
                <p>Use the form below to search for a podcast</p>
                <Search />
            </div>
        </div>
    );
}

export { Home };