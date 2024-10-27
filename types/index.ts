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