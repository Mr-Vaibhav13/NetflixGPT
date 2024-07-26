import React from 'react'
import VideoBg from './VideoBg'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainCnt = () => {

    const inMovies = useSelector((store)=>store.inMovies?.indiaMovies)
    if(!inMovies) return;
    const mainInMovies = inMovies[15];
    if(!mainInMovies) return;
    const {originalTitle, showType, overview} = mainInMovies;


    return (
    <div>
        {/* {console.log(originalTitle)} */}

        <VideoTitle title={originalTitle} type={showType} overview={overview}/>
        <VideoBg />
    </div>
  )
}

export default MainCnt