import { all, takeEvery, put, fork,call } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';
import actions from './actions';
import axios from 'axios';
const videoUrl = 'http://localhost:3001/video/videos';

const getVideo = (payload) =>{
    console.log('what is payload',payload)
    const location = payload.location;
    const file = payload.file

   const mydata = {
        "location": location,
        "file":file
      };
      
      var config = {
        method: 'post',
        url: videoUrl,
        data : mydata
      };
      
      return axios(config).then(res=>{
        return ({
            "videos": res.data.path
        })
    }).catch(err=>{
        return({videoError:err})
    })
}

export function* videoFetchRequest() {
  yield takeEvery('VIDEO_FETCH_START', function*({ payload }) {
      console.log('video redux start',payload);
    const {videos,videoError} = yield call(getVideo,payload)
    if(videoError==null){
        yield put({
            type:actions.VIDEO_FETCH_SUCCESS,
            videos: videos
        })
    }else{
        yield put({
            type:actions.VIDEO_FETCH_ERROR,
            error: videoError
        })
    }
  });
}


export default function* rootSaga() {
  yield all([
    
    fork(videoFetchRequest),
   
  ]);
}
