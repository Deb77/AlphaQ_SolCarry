import React,{useState} from 'react';
import Modal from 'react-modal';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ImageUploader from 'react-images-upload';

import {ReactComponent as CloseButton} from '../../Assets/close-black-18dp.svg';
import FileUploader from './FileUploader';

const useStyle= makeStyles({
    modal:{
        width: '700px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    }
});

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

const ImageUpload = () => {
    var subtitle;
    const [modalIsOpen,setIsOpen] = useState(false);
    const [pictures, setPictures] = useState([]);

    function openModal() {
      setIsOpen(true);
    }
   
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
   
    function closeModal(){
      setIsOpen(false);
    }

    const onDrop = picture => {
        setPictures([...pictures, picture]);
    };

    const styles= useStyle();
    return (
        <>
        <button onClick={openModal}>Open Modal</button>
        <Modal //style={customStyles}
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
            <IconButton onClick={closeModal}>
                <CloseButton />
            </IconButton>
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Upload Images</h2>
            <ImageUploader
            withPreview={true}
            withIcon={true}
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
            />
        </Modal>
        </>
    );
}

export default ImageUpload;