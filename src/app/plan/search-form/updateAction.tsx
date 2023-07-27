//TODO: Add types after it's known what will be in the form

const updateAction = (state: any, payload: any) => {
    return {
        ...state,
        ...payload,
    };
};

export default updateAction;
