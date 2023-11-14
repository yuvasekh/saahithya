import React from 'react'
import ReactAudioPlayer from 'react-audio-player';


const AudioPlayer = (props) => {
  console.log(props,"audioprops")
  let sourceplay=`https://saahithyapdffiles.blob.core.windows.net/uploadfilessaahithya/${props.value.FileId}${props.value.extension}?sp=r&st=2023-08-28T11:42:38Z&se=2023-12-30T19:42:38Z&spr=https&sv=2022-11-02&sr=c&sig=fvbUPQhstqAT7OaFy7XS7LuERdDsNu6U8uACd72XLmA%3D`
  console.log(sourceplay,"check")
  return (
    <div >
        <ReactAudioPlayer
  src={sourceplay}
  autoPlay
  controls
/>
    </div>
  )
}
export default AudioPlayer;