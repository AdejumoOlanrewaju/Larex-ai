import FileSaver from "file-saver"
export async function downloadimg (_id, photo){
   FileSaver.saveAs(photo, `download-${_id}.jpg`)
}