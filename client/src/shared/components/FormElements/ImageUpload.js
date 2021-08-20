import React from 'react';

const ImageUpload = (props) => {
  return (
    <div>
      <input
        id={props.id}
        style={{ display: 'none' }}
        type='file'
        accept='.jpg,.png,.jpeg'
      ></input>
    </div>
  );
};

export default ImageUpload;
