import "isomorphic-fetch";

export const SET_TEXT_INPUT = "SET_TEXT_INPUT";
export const ADD_FETCH_COUNT = "ADD_FETCH_COUNT";
export const MINUS_FETCH_COUNT = "MINUS_FETCH_COUNT";
export const SET_SERVER_RESPONSE = "SET_SERVER_RESPONSE";

export const setTextInput = textInput => ({type: SET_TEXT_INPUT, textInput});
export const addFetchCount = () => ({type: ADD_FETCH_COUNT});
export const minusFetchCount = () => ({type: MINUS_FETCH_COUNT});
export const setServerResponse = serverResponse => ({type: SET_SERVER_RESPONSE, serverResponse});

//eslint-disable-next-line
export const reverseThisWord = async word => {
    const unresolved = await fetch(`http://matthewjcrowder.com/reverse/${word}`, {
        method: "GET"
    });
    return unresolved.json();
};


export const hitServer = () => {
    return async (dispatch, getState) => {
        dispatch(addFetchCount());
        const {textInput} = getState();
        const reversed = await reverseThisWord(textInput);
        dispatch(setServerResponse(reversed));
        dispatch(minusFetchCount());
    };
};