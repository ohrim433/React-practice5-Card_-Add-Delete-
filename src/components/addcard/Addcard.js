import React from 'react';

class Addcard extends React.Component {
    constructor (props) {
        super(props);
        // const {onAddBtnClickHandler, data} = props;

        this.state = {
            id: "",
            name: "",
            username: "",
            phone: "",
            address: {city: ""}
        }
    }

    handlerNameChng = (e) => {
        this.setState({ name: e.currentTarget.value });
    };

    handlerUsernameChng = (e) => {
        this.setState({ username: e.currentTarget.value });
    };

    handlerPhoneChng = (e) => {
        this.setState({ phone: e.currentTarget.value });
    };

    handlerCityChng = (e) => {
        const {address} = this.state;
        console.log("address");
        console.log(address);
        address.city = e.currentTarget.value;
        this.setState({ address });
    };

    onAddBtnClick = (e) => {
        e.preventDefault();
        const {id, name, username, phone, address} = this.state;
        this.props.onAddBtnClickHandler({id, name, username, phone, address});
       // console.log(this.data);
    };

    render () {
        const {name, username, phone, address:{city}} = this.state;
        return (
            <div className="card" style={{width: '18rem', float: 'left', height: '20rem', padding: '5px'}}>
                <form>
                    <input type="text" placeholder="name" className="card-title"
                    onChange={this.handlerNameChng} value={name}/>
                    <br/>
                    <input type="text" placeholder="username" className="card-title"
                    onChange={this.handlerUsernameChng} value={username}/>
                    <br/>
                    <input type="text" placeholder="phone" className="card-title"
                    onChange={this.handlerPhoneChng} value={phone}/>
                    <br/>
                    <input type="text" placeholder="city" className="card-title"
                    onChange={this.handlerCityChng} value={city}/>
                    <br/>
                    <button className="btn btn-primary" onClick={this.onAddBtnClick}>Add Card</button>
                </form>
            </div>

        )
    }

}

export default Addcard;