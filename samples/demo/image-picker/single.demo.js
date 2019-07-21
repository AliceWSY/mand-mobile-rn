import * as React from 'react'
import ImageBox from './image-box.demo'

export default class SingelImagePickerDemo extends React.Component {
  render() {
    return (
      <ImageBox
        options={{
          imageCount: 1,
        }}
      />
    )
  }
}
