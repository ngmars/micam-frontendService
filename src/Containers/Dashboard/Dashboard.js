import React, { useEffect, useState } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import FileActions from '../../Redux/files/actions';
import {Button, Breadcrumb} from 'antd';
import { LeftCircleOutlined} from '@ant-design/icons';
const {fileFetch} = FileActions
export default function Dashboard(){
    const dispatch = useDispatch()
    let myFiles = useSelector(state=>state.Files.files)
    const [path, setPath] = useState([]);

    useEffect(()=>{
        dispatch(fileFetch())
    },[])

    useEffect(()=>{
        if(path.length>0){
            console.log('use effect: ',path)
            dispatch(fileFetch(path.join('/')))
        }
    },[path])

    const changePath = (addOn) =>{
        if(addOn.split('.').pop()==='mp4'){
            console.log('video file')
        }else{
            setPath(path=>[...path,addOn]);
        }
    }
    let stack = []

    const undoChange = () =>{
        let newPath = path
        newPath.pop()
        console.log('nre path',newPath);
        setPath(newPath)
        dispatch(fileFetch(path.join('/')))
    }

    let backButton = (<Button style={{float:"left"}} type="primary" onClick={e=>undoChange()} shape="circle" icon={<LeftCircleOutlined />} size={'large'} />)
    if(myFiles && myFiles.length>0){
        myFiles.map((file,index)=>{
            stack.push(<div key={index}><Button value={file} onClick={e=>changePath(file)} key={index} type="text">{file}</Button><br/></div>)
        })
    }

    const breadCrumbClick = (key) =>{
        let newPath=[]
        if(key=='home'){
            setPath([]);
            dispatch(fileFetch());
        }else{
            for(let i=0;i<=key;i++){
                newPath.push(path[i])
            }
            console.log(newPath,key)
            setPath(newPath);
            dispatch(fileFetch(path.join('/')));
        } 
    }
    if(path && path.length>0){
        var breadcrumStack=[]
        path.map((folder,index)=>{
            breadcrumStack.push( <Breadcrumb.Item key={index+1} onClick={e=>breadCrumbClick(index)}>{folder}</Breadcrumb.Item>)  
        })
    }
    
    return (
        <>  
            {backButton}<Breadcrumb separator=">">
                <Breadcrumb.Item onClick={e=>breadCrumbClick('home')}>Home</Breadcrumb.Item>
                {breadcrumStack}
            </Breadcrumb>
            {stack}
        </>
    )
}
