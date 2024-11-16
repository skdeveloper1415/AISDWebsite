import React from "react";
import { Dialog } from 'primereact/dialog';

export default function View(props) {

  return (
    <>
      <Dialog className="fileviewer" header={props?.FileName} visible={props?.ViewModal} style={{ width: ['mp3'].includes(props?.FileType?.toLowerCase()) ? '40vw' :['avi', 'xls', 'xlsx', 'doc', 'docx', 'ppt', 'pptx'].includes(props?.FileType?.toLowerCase())?'50vw':['pdf'].includes(props?.FileType?.toLowerCase())?'80%': '', height: ['mp3'].includes(props?.FileType?.toLowerCase()) ? '25vh' :['avi', 'xls', 'xlsx', 'doc', 'docx', 'ppt', 'pptx'].includes(props?.FileType?.toLowerCase())?'30vh':['pdf'].includes(props?.FileType?.toLowerCase())?'100%': '' }} onHide={() => props.setViewModal(false)}>
        {['png', 'jpg', 'jpeg', 'img', 'bmp'].includes(props?.FileType?.toLowerCase()) && <img
          className='iframeFullSize'
          title="Image Viewer"
          src={props?.FileURL}
          style={{ objectFit: 'fill', width: '100%', height: '100%' }}
        />}
        {['svg'].includes(props?.FileType?.toLowerCase()) && <img
          className='iframeFullSize'
          title="Image Viewer"
          src={`data:image/svg+xml;base64,${props?.base64Data}`}
          style={{ objectFit: 'fill', width: '100%', height: '100%' }}
        />
        }
        {
          ['pdf'].includes(props?.FileType?.toLowerCase()) && <iframe
            className='iframeFullSize'
            title="PDF Viewer"
            src={props?.FileURL}
            width="100%"
            height="100%"
          />}

        {
          ['mp4'].includes(props?.FileType?.toLowerCase()) &&
          <span className="flex justify-center"><video src={props?.FileURL} controls width="82%">
          </video></span>}

        {
          ['mp3'].includes(props?.FileType?.toLowerCase()) &&
          <span className="flex justify-center"><audio src={props?.FileURL} controls style={{ width: '100%' }}>
          </audio></span>}
      </Dialog>

    </>
  );
}
