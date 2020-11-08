export const saveDataInLocaleStorage = (data, storageKey) => {
    localStorage.setItem(storageKey, JSON.stringify(data));
};

export const getDataFromLocaleStorage = (storageKey, initialValue) => JSON.parse(localStorage.getItem(storageKey)) || initialValue;