import React, {useState} from 'react';

function Card({user, countHandler, handleDeleteCard}) {
    const [isHidden, setIsHidden] = useState(false);

    const onHideButtonClick = () => {
        setIsHidden(!isHidden);
    };

    const [isAdded, setIsAdded] = useState(false);

    const onAddButtonClick = () => {
        isAdded ? countHandler(-1) : countHandler(+1);
        setIsAdded(!isAdded);
    };

    const onDeleteButtonClick = (val) => {
        handleDeleteCard(val);
    };

    return (
        <div key={user.id} className="card" style={{width: '18rem', float: 'left', height: '20rem'}}>
            { !isHidden ? <div style={{width: '18rem', float: 'left', height: '17rem'}}>
                <h3 className="card-body">{user.name}</h3>
                <h4 className="card-title">{user.username}</h4>
                <h5 className="card-title">{user.phone}</h5>
                <h5 className="card-title">{user.address.city}</h5>
            </div> : <div style={{width: '18rem', float: 'left', height: '17rem'}}></div>}
            <div>
            <button className="btn btn-primary" onClick={ onHideButtonClick } >{isHidden ? "Show" : "Hide"}</button>
            <button className="btn btn-primary" onClick={ onAddButtonClick } >{!isAdded ? "Add" : "Remove"}</button>
            <button className="btn btn-primary" onClick={ onDeleteButtonClick.bind(null, user.id) } > Delete Card </button>
            </div>
        </div>
    );
}

export default Card;