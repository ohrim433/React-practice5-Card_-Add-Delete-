import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Addcard from "./components/addcard/Addcard";
import data from "./data"

//class component
class App extends React.Component {
  state = {
    data: null,
    // user: "Vasya",
      count: 0,
      editUser: {
          id: "",
          name: "",
          username: "",
          phone: "",
          address: {city: ""}
      }
  };

  componentDidMount() {
      this.setState({data: data});  // delete when fletch

      // setTimeout(() => {
      // fetch('https://jsonplaceholder.typicode.com/users', {mode: "cors"})
      //   .then(responce => responce.json())
      //   .then(result => {
      //     this.setState({data: result});
      //     console.log(result);
      //   })}, 500)
  }

    handler = () => {
        const {data} = this.state;
        const newData = data.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;}
    );
      this.setState({
          data: newData
      })
  };

    hand2 = () => {
        const {data} = this.state;
        const newData = data.sort((a, b) => {
            if (a.address.city > b.address.city) {
                return 1;
            }
            if (a.address.city < b.address.city) {
                return -1;
            }
            return 0;}
        );
        this.setState({
            data: newData
        })
    };

    countHandler = (num) => {
        this.setState({count: this.state.count + num})
    };

    handleAddCard = (newCard) => {
        newCard.id = this.state.data.length + 1;
        const nextData = [...this.state.data, newCard];
        // console.log("nextData: ", nextData);
        this.setState(() => { return { data: nextData } });
        // console.log(this.state.data);
    };

    handleDeleteCard = delUserId => {
        const updatedUsers = this.state.data.filter(user => user.id !== delUserId);
        this.setState({ data: updatedUsers });
    };

    handleEditCard = editedUser => {
        this.setState({editUser: editedUser});
        // console.log(`${editedUser.name} ${editedUser.username} ${editedUser.phone} ${editedUser.address.city}`);
        console.log(editedUser);
    };

    handleSaveEditedCard = editedUser => {
        console.log('editedUser',editedUser);
        this.setState({editUser: editedUser});
    };

  render() {
      const {data,editUser} = this.state;
      console.log('editUser',editUser);
      return (
        <div className="App">
            <Header authorSort={this.handler} citySort={this.hand2} count={ this.state.count }/>
            <Addcard
                onAddBtnClickHandler={this.handleAddCard}
                // data={this.state.data}
                handleEditCard={this.handleEditCard}
                editUser={editUser}
                handleSaveEditedCard={this.handleSaveEditedCard}
            />
            {data ? data.map(i => {
                // console.log('User');
                // console.log(i);
                return <Card
                    user={i}
                    key={i.id}
                    handleDeleteCard={this.handleDeleteCard}
                    countHandler={this.countHandler}
                    handleEditCard={this.handleEditCard}
                    editUser={editUser}
                />}) : "Loading"}
        </div>
    );
  }
}

export default App;

