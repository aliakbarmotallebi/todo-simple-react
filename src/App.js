import React from 'react';

import Person from "./components/Person";




class App extends React.Component {
    constructor(){
        super();
    }

    state = {
        persons : [
            {firstName:"AliAkabr", lastName:"Motallebi", age:"25"},
            {firstName:"mamad", lastName:"Tahoriyan", age:"23"}
        ]
    };


    handlePersonChange = () =>{
        this.setState({
            persons : [
                {firstName:"alireza", lastName:"Motallebi", age:"25"},
                {firstName:"amir", lastName:"akbari", age:"23"},
                {firstName:"amin", lastName:"akbari2", age:"20"},
            ]
        });
    }


    render() {

        const { persons } = this.state;

        return (
            <div className="bg-gray-200 p-20 h-screen flex justify-center items-start flex-col">
                <h1> Hello World! </h1>
                <hr />
                { persons.map( person => {
                    return <Person firstName={person.firstName} lastName={person.lastName} age={person.age} />
                })}

                <button onClick={this.handlePersonChange}>
                    Change Persons
                </button>
            </div>
        );
    }
}

export default App;
