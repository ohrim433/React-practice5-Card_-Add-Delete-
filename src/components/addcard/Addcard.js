import React from 'react';

class Addcard extends React.Component {
    constructor(props) {
        super(props);
        // const {onAddBtnClickHandler, data} = props;

        this.state = {
            // id: "",
            // name: "",
            // username: "",
            // phone: "",
            // address: {city: ""}
            id: this.props.editUser.id || "",
            name: this.props.editUser.name ,
            username: this.props.editUser.username || "",
            phone: this.props.editUser.phone || "",
            address: {city: this.props.editUser.address.city || ""}
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            this.setState({
                id: this.props.editUser.id || "",
                name: this.props.editUser.name ,
                username: this.props.editUser.username || "",
                phone: this.props.editUser.phone || "",
                address: {city: this.props.editUser.address.city || ""}
            })
        }
    }

    handlerNameChng = ({target: {value}}) => {
        this.setState({name: value});
    };

    handlerUsernameChng = ({target: {value}}) => {
        this.setState({username: value});
    };

    handlerPhoneChng = ({target: {value}}) => {
        this.setState({phone: value});
    };

    handlerCityChng = ({target: {value}}) => {
        // debugger
        const {address} = this.state;
        address.city = value;
        this.setState(() => {
            return {address}
        });
        // console.log("address");
        // console.log(address);
    };

    onAddBtnClick = (e) => {
        e.preventDefault();
        const {id, name, username, phone, address} = this.state;
        this.props.onAddBtnClickHandler({id, name, username, phone, address});
        this.setState(() => {
            return {id: '', name: '', username: '', phone: '', address: {city: ''}}
        });
        console.log(this.state);
    };

    onSaveBtnClick = (e) => {
        e.preventDefault();
        console.log('onSaveBtnClick');
        console.log(this.state);
        const {id, name, username, phone, address} = this.state;
        this.props.handleSaveEditedCard({id, name, username, phone, address});
    };

    render() {
        // console.log("this.props.editUser.phone ", this.props.editUser.phone);
        console.log(this.state);
        // const {name, username, phone, address:{city}} = this.state;
        const {name, username, phone, address: {city}} = this.state;
        return (
            <div className="card">
                {/*{this.props.editUser.phone ? <form>*/}
                {/*        <input type="text" placeholder="name" className="card-title"*/}
                {/*               onChange={this.handlerNameChng} value={this.props.editUser.name}/>*/}
                {/*        <br/>*/}
                {/*        <input type="text" placeholder="username" className="card-title"*/}
                {/*               onChange={this.handlerUsernameChng} value={this.props.editUser.username}/>*/}
                {/*        <br/>*/}
                {/*        <input type="text" placeholder="phone" className="card-title"*/}
                {/*               onChange={this.handlerPhoneChng} value={this.props.editUser.phone}/>*/}
                {/*        <br/>*/}
                {/*        <input type="text" placeholder="city" className="card-title"*/}
                {/*               onChange={this.handlerCityChng} value={this.props.editUser.address.city}/>*/}
                {/*        <br/>*/}
                {/*        <button className="btn btn-primary" onClick={this.onAddBtnClick}>Add Card</button>*/}
                {/*        <button className="btn btn-primary">Save Changes</button>*/}
                {/*    </form> :*/}
                    <div>
                        <input type="text" placeholder="name" className="card-title"
                               onChange={this.handlerNameChng} value={name || ""}/>
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
                        <button className="btn btn-primary" onClick={this.onSaveBtnClick}>Save Changes</button>
                    </div>
                {/*}*/}
            </div>

        )
    }

}

export default Addcard;