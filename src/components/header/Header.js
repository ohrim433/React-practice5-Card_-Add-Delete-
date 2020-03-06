import React from 'react';

function Header({authorSort, citySort, count}) {
    const sa = () => {
        authorSort()
    };

    const sc = () => {
        citySort()
    };

    return (

        <nav className="navbar navbar-dark bg-primary">
            <h1>Busket</h1>
            <span>{count}</span>
            <button className="btn btn-primary" onClick={sa}>byAuthorName</button>
            <button className="btn btn-primary" onClick={sc}>byCity</button>
            <button className="btn btn-primary">Go somewhere</button>
        </nav>
    );
}

export default Header;

// rsf - shortcut for functional component