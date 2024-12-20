'use client'

import Image from 'next/image'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

type FileUploaderProps = {
    upload: File[] | null,
    onChange: (files: File[]) => void
}

const FileUploader = ({upload, onChange} : FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles : File[]) => {
   onChange(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className={`file-upload ${upload ? 'hidden' : ''} `}>
      <input {...getInputProps()} />
        <>
        <Image src="/assets/icons/upload.svg" width={40} height={40} alt='upload' />
        <div className='file-upload_label'>
            <p className='text-14-regular'>
                <span className='text-green-500'>Click to upload</span> or drag and drop
            </p>
            <p>
              SVG, PNG, JPG or GIF (max 800x400)  
            </p>
        </div>
        </>
    </div>
  )
}

export default FileUploader;