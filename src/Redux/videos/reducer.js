import videoActions  from './actions';

const initState = { 
    videos: null, 
    videoLoading:null,
    videoError:null
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case videoActions.VIDEO_FETCH_START:
      return {
        videoLoading:true,
      };
    case videoActions.VIDEO_FETCH_SUCCESS:
        return {
            videos: action.videos,
            videoLoading:false,
        };
    case videoActions.VIDEO_FETCH_START:
        return {
            videoError: action.error,
            videoLoading:false,
        };
    default:
      return state;
  }
}