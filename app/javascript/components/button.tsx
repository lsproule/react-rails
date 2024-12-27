import React from 'react'
import { Button as Btn } from "./ui/button"

interface Props extends React.HTMLAttributes<HTMLButtonElement> {

}

export function Button({children, ...props }: Props) {
  return (
    <Btn {...props}>{children}</Btn>
  )
}
