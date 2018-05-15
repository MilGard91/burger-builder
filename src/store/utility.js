export const updateObject = (oldObject, updateProps) => {
    return {
        ...oldObject,
        ...updateProps
    };
};