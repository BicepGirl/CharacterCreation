import html2canvas from "html2canvas"
import { saveAs } from "file-saver"
const HandleSaveImage = (refState) => {
  // console.log('handleref: ',refState)
  return html2canvas(refState.current).then((canvas) => {
    canvas.toBlob((blob) => {
      saveAs(blob, "Character_img.jpg")
    })
  })
}

export default HandleSaveImage
