import {
	GET_QUESTIONS,
    ADD_QUESTION,
	QUESTION_ERROR,
	GET_RESULT,
	RESULT_ERROR
} from '../actions/types';

const initialState = {
	questions: [],
	question: null,
	loading: true,
	result:null,
	error: {}
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_QUESTIONS: 
			return {
				...state,
				questions: payload,
				result : null,
				loading: false
			};
        case ADD_QUESTION:
            return {
				...state,
				questions : [payload, ...state.questions],
				result : null,
				loading: false
			};
		case GET_RESULT:
			return{
				...state,
				result: payload,
				loading: false
			};
		case RESULT_ERROR:
		case QUESTION_ERROR:
			return {
			...state,
			error: payload,
			result : null,
			loading: false
			};
			
		default:
			return state;
	}
}