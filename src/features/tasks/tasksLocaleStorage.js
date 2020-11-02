
const storageKey = "tasks"

export const saveTasksInLocaleStorage = (tasks) => {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
}

export const getTasksFromLocaleStorage = () => JSON.parse(localStorage.getItem(storageKey)) || [];
