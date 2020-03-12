import React, {useState} from 'react';

function Card({user, countHandler, handleDeleteCard, handleEditCard, editUser}) {
    const [isHidden, setIsHidden] = useState(false);

    if (editUser.id === user.id) {
        user.name = editUser.name;
        user.username = editUser.username;
        user.phone = editUser.phone;
        user.address.city = editUser.address.city;
    }

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

    const onEditButtonClick = (val) => {
        handleEditCard(val);
    };

    return (
        <div key={user.id} className="card">
            { !isHidden ? <div className="card-top">
                <h3 className="card-body">{user.name}</h3>
                <h4 className="card-title">{user.username}</h4>
                <h5 className="card-title">{user.phone}</h5>
                <h5 className="card-title">{user.address.city}</h5>
            </div> : <div className="card-top"></div>}
            <div>
            <button className="btn btn-primary" onClick={ onHideButtonClick } >{isHidden ? "Show" : "Hide"}</button>
            <button className="btn btn-primary" onClick={ onAddButtonClick } >{!isAdded ? "Add" : "Remove"}</button>
            <button className="btn btn-primary"  onClick={ onEditButtonClick.bind(null, user) }> Edit Card </button>
            <button className="btn btn-primary" onClick={ onDeleteButtonClick.bind(null, user.id) } > Delete Card </button>
            </div>
        </div>
    );
}

export default Card;