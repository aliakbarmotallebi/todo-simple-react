import React from 'react';
import Empty from './components/Empty';

import Tasks from './components/Task/Tasks';

class App extends React.Component {

    state = {
        tasks : [
            { id: 1, item:"Learning Reactjs"},
            { id: 2, item:"Learning Python"},
            { id: 3, item:"Learning PHP Laravel"},
            { id: 4, item:"Add Model user to project"},
            { id: 5, item:"Read the book"},
            { id: 6, item:"write blog post"},
            { id: 7, item:"send email"},
            { id: 8, item:"buy book"},

        ],
        showTasks : true,
        item: ""
    };

    handleShowTask = () =>{
        this.setState( {showTasks : !this.state.showTasks});
    }

    handleDeleteTask = id => {
        //console.log(id);
        const tasks = [...this.state.tasks];
        const removedTaskbById = tasks.filter( p=> p.id !== id);

        this.setState( { tasks: removedTaskbById });
    }


    handleAddTask = () => {
        const tasks = [...this.state.tasks];
        const task = {
            id: Math.floor(Math.random()*1000),
            item: this.state.item
        };

        if(task.item == "" && task.item == ''){
            return null;
        }

        tasks.push(task);
        this.setState({ tasks, item: "" });
    }

    setItem = event => {
        this.setState({ item: event.target.value });
    }

    render() {

        const { tasks, showTasks, item } = this.state;

        return (
            <div className="bg-gray-200 h-screen flex justify-center overflow-hidden items-center font-thin shadow-lg">
                <div className='lg:w-1/4 sm:w-1/2 md:w-1/3'>
                    <div className='rounded-lg overflow-hidden mb-2 bg-white'>
                        <div className='p-2 shadow bg-white'>
                            <div className='flex gap-2'>
                                <input onChange={this.setItem} className='border bg-gray-200 border-gray-300 text-gray-900 rounded flex-1 pl-1' type="text" value={item}/>
                                <button  onClick={this.handleAddTask} disabled={(item.length == 0)} className='flex items-center px-2 py-1 border border-gray-300 text-gray-900 rounded-md disabled:opacity-50'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Add Task
                                </button>
                            </div>
                        </div>
                    {showTasks
                        ? <Tasks
                            tasks={tasks}
                            handleDeleteTask={this.handleDeleteTask}
                            />
                        : <Empty />
                    }
                    <button onClick={this.handleShowTask} className='px-3 py-2 text-sm font-semibold border-t border-gray-300 text-gray-900 hover:bg-gray-700 hover:text-white animate transition-all mt-2 text-center w-full'>
                        {showTasks
                            ? "Hidden All"
                            : "View Tasks"
                        }
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
