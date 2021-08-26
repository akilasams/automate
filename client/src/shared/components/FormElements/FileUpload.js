import React, { useRef } from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Button } from '@material-ui/core';
import { useState } from 'react';

const FileUpload = (props) => {
  const [file, setFile] = useState();
  const [isValid, setIsValid] = useState(false);
  let filePickerRef = useRef();

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }

    props.onInput(props.id, pickedFile, fileIsValid);
  };

  const uploadHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div>
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type='file'
        accept='.jpg,.png,.jpeg,.pdf'
        onChange={pickedHandler}
      ></input>
      <div className={`image-upload ${props.center && 'center'}`}>
        {/* <div className='image-upload__preview'>
          <img src='' alt='Preview' />
        </div> */}
        <Button
          color='primary'
          variant='outlined'
          onClick={uploadHandler}
          style={{ width: '300px' }}
          startIcon={<CloudUploadIcon />}
        >
          Upload a Profile Picture
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
