import React,{Component} from 'react';
import {render} from 'react-dom';

class FileInput extends Component{

    getDefaultProps(){
        return{
            multiple: true,
            btnValue: 'Upload Image',
            className: 'upload-button'
        }
    }
    
    _onChange(event){
        event.preventDefault();

        let target = event.target;
        let files = target.files;
        let count = this.props.multiple ? files.length : 1;
        //let i;
        for(i=0;i<count;i++){
            files[i].thumb = URL.createObjectURL(files[i]);
            console.log(files[i].thumb);
        }
        files = Array.prototype.slice.call(files, 0)
        files = files.filter(function (file) {
            return /image/i.test(file.type)
        })
        this.props.onChange(files, event)
    }
}

export default FileInput;