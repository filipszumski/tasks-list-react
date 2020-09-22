import {useLocalStorageState} from "./useLocalStorageState";

export const useTasks = () => {
    const [tasks, setTasks] = useLocalStorageState("tasks", [])

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done,
                };
            }
            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                content: newTaskContent,
                done: false,
            }
        ]);
    };

    return [
        tasks,
        addNewTask,
        setAllDone,
        removeTask,
        toggleTaskDone
    ];
}