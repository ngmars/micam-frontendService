const videoActions = {
    VIDEO_FETCH_START: 'VIDEO_FETCH_START',
    VIDEO_FETCH_SUCCESS: 'VIDEO_FETCH_SUCCESS',
    VIDEO_FETCH_ERROR: 'VIDEO_FETCH_ERROR',
   
    videoFetch: (location=null,file) => ({
      type: videoActions.VIDEO_FETCH_START,
      payload: {location,file},
    })
  };
  export default videoActions;
  