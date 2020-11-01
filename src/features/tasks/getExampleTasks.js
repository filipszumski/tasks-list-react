import axios from "axios";

export const getExampleTasks = async () => {
    const response = await axios.get("/tasks-list-react/exampleTasks.json")
    console.log(response.data);

    return await response.data;
};

