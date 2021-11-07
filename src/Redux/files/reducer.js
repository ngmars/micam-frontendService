import FileActions  from './actions';

const initState = { 
    files: null, 
    fileLoading:null,
    fileError:null
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case FileActions.FILE_FETCH_START:
      return {
        fileLoading:true,
      };
    case FileActions.FILE_FETCH_SUCCESS:
        return {
            files: action.files,
            fileLoading:false,
        };
    case FileActions.FILE_FETCH_START:
        return {
            fileError: action.error,
            fileLoading:false,
        };
    default:
      return state;
  }
}