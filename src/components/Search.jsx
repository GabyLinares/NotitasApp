import React from "react";
import { MdSearch } from "react-icons/md";

export const Search = () => {
    return(
        <div className="search">
            <MdSearch className="search-icons" size='1.3rem' />
            <input type="text" placeholder="Busca tu notita aquí..."/>
        </div>
    )
}