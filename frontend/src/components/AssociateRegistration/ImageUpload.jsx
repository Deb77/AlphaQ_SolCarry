import React,{useState} from 'react';
import Modal from '@material-ui/core/Modal';

//import Modal from 'react-modal';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ImageUploader from 'react-images-upload';

import {ReactComponent as CloseButton} from '../../Assets/close-black-18dp.svg';
import {ReactComponent as Upload} from '../../Assets/cloud_upload-black-18dp.svg';
import { Button } from '@material-ui/core';

const cloudinaryURL = 'https://api.cloudinary.com/v1_1/dtww61ulg/upload';

const useStyle= makeStyles({
    modal:{
        width: '700px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'relative',
        backgroundColor: '#fff',
        border: '0',
        outline: '0',
        top      : '10%',
        left     : '50%',
        right    : 'auto',
        bottom   : 'auto',
        marginRight: '-50%',
        transform: 'translateX(-50%)'  
    },
    closeButton:{
      '&.MuiIconButton-root':{
        left: '10px',
        top: '10px',
        width: '45px',
        height:'45px'
      }
    },
    openButton:{
      width: '55px',
      height: '55px',
      backgroundColor: '#fff',
    }

});

const ImageUpload = ({setImgageUrl}) => {
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

    const handleSubmit=()=>{
      let formData= new FormData();
      formData.append("file",pictures[pictures.length-1][0]);
      formData.append("upload_preset","fqsi6lze");
      axios.post(cloudinaryURL,formData)
      .then((response)=>{
        setImgageUrl(response.data.url)
        console.log(response.data.url);
        alert('Uploaded');
        closeModal();
      })
      .catch(()=>{
        alert("Please Try Again")
      })
    }

    const styles= useStyle();
    return (
        <>
        <IconButton onClick={openModal} className={styles.openButton}>
          <Upload  />
        </IconButton>
        <Modal  //style={customStyles}
          open={modalIsOpen}
        >
          <div className={styles.modal}>
            <IconButton onClick={closeModal} className={styles.closeButton}>
                <CloseButton  />
            </IconButton>
          
            <ImageUploader
            singleImage={true}
            withPreview={true}
            withIcon={true}
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
            />
            <Button onClick={handleSubmit}>
              Submit
            </Button>
            </div>
        </Modal>
        </>
    );
}

export default ImageUpload;