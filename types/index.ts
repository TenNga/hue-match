import { ReactElement } from "react"

export interface StepProps {
    step: {
        icon: {
            src: string,
            width: number,
            height: number,
            alt: string
        },
        label: string
    }
}

export interface ChildrenType  {
    children: React.ReactNode
}

export interface ButtonProps extends ChildrenType {
    type: string,
}


export interface FileProps {
    files: File[] | null;
  }

export interface FirstStepProps {
    onUpload: React.Dispatch<React.SetStateAction<File[] | null>>,
    upload: File[] | null
}
  
export interface ColorProps {
    label: string,
    color: string
}

export interface ColorPickerProps {
        image:File,
        onPicked: (color: string) => void
}

export interface PickedColorsProps {
    firstColor: string,
    secondColor: string,
    thirdColor: string,
}

export interface ShareContextType {
    currentColor:string,
    setCurrentColor:React.Dispatch<React.SetStateAction<string>>,
    skinColor:string,
    setSkinColor:React.Dispatch<React.SetStateAction<string>>,
    skinTwoColor:string, 
    setSkinTwoColor:React.Dispatch<React.SetStateAction<string>>,
    hairColor:string,
    setHairColor:React.Dispatch<React.SetStateAction<string>>,
    count:number,
    setCount:React.Dispatch<React.SetStateAction<number>>,
}