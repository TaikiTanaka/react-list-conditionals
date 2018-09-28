import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent'
import ValidationComponent from './ValidationComponent/ValidationComponent'

//App inherits from a Component class which is imported form the React library
class App extends Component {
    state = {
        charList:[],
        showChars:true,
        inputText:'',
        valid:''
    }

    inputChangeHandler = (event)=>{
        //console.log(inputText.length);
        this.setState({inputText:event.target.value});
        this.validateHandler();
        this.updateChar(event.target.value);
    }

    validateHandler = ()=>{
        //console.log('In validate handler')
        let str='';
        if(this.state.inputText.length<5)
            str = 'inputText too short!'
        else
            str = 'inputText long enough'
        //console.log(str);
        this.setState({valid:str});
    }

    //Updates the charList with any new changes
    //Called when deleting and creating index
    updateChar(str){
        //console.log('In updateChar, string is: ' + str);
        let charList=[], temp={};
        for(let i=0;i<str.length;i++){
            //The key will be assigned a value according to index when rendering
            temp = {char:str[i],key:null}
            charList.push(temp);
        }
        this.setState({
            charList:charList
        })
    }

    //Creates the character components based on current val of charList
    createCharComponent(){
        return(
            <div>
                {this.state.charList.map((char,index)=>{
                    return(
                        <CharComponent
                            key={index}
                            char={char.char}
                            click = {this.deleteCharHandler.bind(this,index)}
                        />
                    );
                })}
            </div>
        )
    }

    deleteCharHandler(index){
        //newText is not a string, it's an array
        let newText = this.state.inputText;
        let newArr = newText.split('');
        newArr.splice(index,1);
        newText = newArr.join('');
        //console.log(newText)
        this.updateChar(newText);
        this.setState({inputText:newText});
    }

    render() {
        const style = {
            backgroundColor:'white',
            font: 'inherit',
            border: '1px solid blue',
            padding:'8px',
            cursor:'pointer'
        } 
        let charList=null;
        if(this.state.showChars){
            charList=this.createCharComponent();
        };
        return (
            <div className="App">
                <input 
                    type='text' 
                    value={this.state.inputText}
                    onChange={this.inputChangeHandler}>
                </input>
                <ValidationComponent 
                    onChange={this.validateHandler}
                    valid={this.state.valid}>
                </ValidationComponent>
                {charList}
            </div>
        );
    }
}

//This command says that if you IMPORT 'App', then you import this class
export default App;
