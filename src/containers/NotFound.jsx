import React from 'react';

import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
    <main className="container">
        <section className="error">
            <h1 className="error-title animated pulse">404</h1>
            <p className="error--description">Página no encontrada</p>
        </section>
    </main>
);

export default NotFound;