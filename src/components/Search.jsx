import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
    <section class="buscador">
        <h2 class="buscador__title">¿Qu&eacute; quieres ver hoy?</h2>
        <input class="input" type="text" placeholder="Buscar..." />
    </section> 
);

export default Search;