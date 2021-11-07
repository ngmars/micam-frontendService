const FileActions = {
    FILE_FETCH_START: 'FILE_FETCH_START',
    FILE_FETCH_SUCCESS: 'FILE_FETCH_SUCCESS',
    FILE_FETCH_ERROR: 'FILE_FETCH_ERROR',
   
    fileFetch: (path=null) => ({
      type: FileActions.FILE_FETCH_START,
      payload: { path },
    })
  };
  export default FileActions;
  