import {useState} from "react";

export const useHideDone = (tasks) => {
    const [hideDone, setHideDone] = useState(false);
    const isAnyTaskDone = tasks.some((task) => task.done);

    const toggleHideDone = () => {

        if(isAnyTaskDone === true) {
           return setHideDone(hideDone => !hideDone);
        }
        return null;
    };

    return [
        hideDone,
        toggleHideDone,
    ];
};