import { all, takeEvery, put, fork,call } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';
import actions from './actions';
import axios from 'axios';
const fileUrl = 'http://localhost:3001/video/filemanager';

const getFile = (payload) =>{
    const path = payload.path

   const mydata = {
        "location": path
      };
      
      var config = {
        method: 'post',
        url: fileUrl,
        data : mydata
      };
      
      return axios(config).then(res=>{
        return ({
            "files": res.data.path
        })
    }).catch(err=>{
        return({fileError:err})
    })
}

export function* fileFetchRequest() {
  yield takeEvery('FILE_FETCH_START', function*({ payload }) {
    const {files,fileError} = yield call(getFile,payload)
    if(fileError==null){
        yield put({
            type:actions.FILE_FETCH_SUCCESS,
            files: files
        })
    }else{
        yield put({
            type:actions.FILE_FETCH_ERROR,
            error: fileError
        })
    }
  });
}


export default function* rootSaga() {
  yield all([
    
    fork(fileFetchRequest),
   
  ]);
}
