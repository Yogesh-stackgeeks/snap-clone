import React from 'react';
import {Text , View , TouchableOpacity , Image } from 'react-native';
import imagePath from '../constants/imagePath';



const ImageList = (props)=>{
    console.log(props)

const onSelectImage = props.onSelectImage
const prop = props.item

const onClickImage = (index)=>{
onSelectImage(index)
}

    return(
<TouchableOpacity onPress = {()=>onClickImage(prop.index)} style = {{justifyContent : 'center', alignItems : 'center' , marginVertical : 10}}>
<Image source = {prop.item.image} style ={{height : 90 , width : 90}}  />
</TouchableOpacity>
    )
}
export default ImageList;