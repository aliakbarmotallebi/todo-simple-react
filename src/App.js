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
        showTasks : true
    };

    handleShowTask = () =>{
        this.setState( {showTasks : !this.state.showTasks});
    }

    handleDeleteTask = id => {
        console.log(id);
        const tasks = [...this.state.tasks];
        const removedTaskbById = tasks.filter( p=> p.id !== id);

        this.setState( { tasks: removedTaskbById });
    }

    render() {

        const { tasks, showTasks } = this.state;

        return (
            <div className="bg-gray-200 h-screen flex justify-center overflow-hidden items-center font-thin shadow-lg">
                <div className='lg:w-1/4 sm:w-1/2 md:w-1/3'>
                    <div className='rounded-lg overflow-hidden mb-2 bg-white'>
                        <div className='p-2 shadow bg-white'>
                            <div className='flex gap-2'>
                                <button className='px-2 py-1 border border-gray-300 text-gray-900 rounded-md'>
                                    Add Task
                                </button>
                                <input className='border flex-1 bg-gray-200 border-gray-300 text-gray-900 rounded flex-auto' type="text" value=""/>
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
