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

    handlerNameChng = ({target: {value}}) => {
        this.setState({ name: value });
    };

    handlerUsernameChng = ({target: {value}}) => {
        this.setState({ username: value });
    };

    handlerPhoneChng = ({target: {value}}) => {
        this.setState({ phone: value });
    };

    handlerCityChng = ({target: {value}}) => {
        // debugger
        const {address} = this.state;
        address.city = value;
        this.setState(() => { return {address} });
        // console.log("address");
        // console.log(address);
    };

    onAddBtnClick = (e) => {
        e.preventDefault();
        const {id, name, username, phone, address} = this.state;
        this.props.onAddBtnClickHandler({id, name, username, phone, address});
        this.setState(() => { return {id: '', name: '', username: '', phone: '', address: {city: ''}}});
       console.log(this.state);
    };

    render () {
        // const {name, username, phone, address:{city}} = this.state;
        return (
            <div className="card" style={{width: '18rem', float: 'left', height: '20rem', padding: '5px'}}>
                <form>
                    <input type="text" placeholder="name" className="card-title"
                    onChange={this.handlerNameChng}/>
                    <br/>
                    <input type="text" placeholder="username" className="card-title"
                    onChange={this.handlerUsernameChng}/>
                    <br/>
                    <input type="text" placeholder="phone" className="card-title"
                    onChange={this.handlerPhoneChng}/>
                    <br/>
                    <input type="text" placeholder="city" className="card-title"
                    onChange={this.handlerCityChng}/>
                    <br/>
                    <button className="btn btn-primary" onClick={this.onAddBtnClick}>Add Card</button>
                </form>
            </div>

        )
    }

}

export default Addcard;