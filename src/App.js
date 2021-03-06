import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppForm from './AppForm.js'
import AppFooter from './AppFooter.js'
import  AppList from './AppList.js'

class App extends Component {
    state = {
        choosevalue : 1,
        data: this.props.data
    }

    ChooseValue (id){
        this.setState({choosevalue:id});
    }

    AllChangeComplete (id){
        let newdata = this.state.data.map((item,index) => {
            if(item.id === id){
                item.complete = !item.complete;
            }
            return item;
        })
        this.setState({data : newdata});
    }

    AllOnDeleteItem (id) {
        console.log(id);
        let newdata = this.state.data.map(function (item) {
            console.log(item);
            if (item.id == id) {
                console.log('删除找到了')
                item.deleteFlag = true
            }
            return item
        })
        this.setState({ data: newdata })
    }

    OnAddTodoItem (newItem) {
        let newdata = this.state.data.concat(newItem);
        this.setState({data : newdata});
    }

  render() {
    return (
      <div className="ui comments">
          <AppForm AddTodoItem={this.OnAddTodoItem.bind(this)}/>
          <AppList  data={this.state.data}
          choosevalue={this.state.choosevalue}
          ChangeCompleteTop={this.AllChangeComplete.bind(this)}
          DeleteItemTop={this.AllOnDeleteItem.bind(this)} />
          <AppFooter SubmitChooseValue={this.ChooseValue.bind(this)}/>

      </div>
    );
  }
}

export default App;
