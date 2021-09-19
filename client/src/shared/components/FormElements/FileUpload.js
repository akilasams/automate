import React, { useRef, useEffect } from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Button } from '@material-ui/core';
import { useState } from 'react';

import './FileUpload.css';

const FileUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      const pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.name, pickedFile, fileIsValid);
  };

  const uploadHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div>
      <input
        name={props.name}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type='file'
        accept='.jpg,.png,.jpeg,.pdf'
        onChange={pickedHandler}
      ></input>
      <div className={`image-upload ${props.center && 'center'}`}>
        <div className='image-upload__preview'>
          {previewUrl && <img src={previewUrl} alt='Preview' />}
          {!previewUrl && <p>Please Pick an Image</p>}
        </div>
        <Button
          color='primary'
          variant='outlined'
          onClick={uploadHandler}
          style={{ width: '300px' }}
          startIcon={<CloudUploadIcon />}
        >
          {props.buttonText}
        </Button>
        {!isValid && <p>{props.errorText}</p>}
      </div>
    </div>
  );
};

export default FileUpload;
