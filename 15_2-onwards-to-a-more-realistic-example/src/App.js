import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
    console.log("rendered");
    const [tasks, setTasks] = useState([]);

    //no dependency needed when we are not using anything external and setTasks is state updating function
    const { isLoading, error, sendRequest: fetchTasks } = useHttp();
    //if we add fetchTasks as dependency it will create a dependency
    useEffect(() => {
        const transformTasks = (tasksObj) => {
            const loadedTasks = [];

            for (const taskKey in tasksObj) {
                loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
            }

            setTasks(loadedTasks);
        };
        fetchTasks(
            {
                url: "https://react-practise-c6462-default-rtdb.firebaseio.com/tasks.json",
            },
            transformTasks
        );
    }, [fetchTasks]);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </React.Fragment>
    );
}

export default App;
