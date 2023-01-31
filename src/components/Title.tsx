import React, { FC, ReactNode } from 'react';

interface Props {
    children?: ReactNode
}

const Title: FC<Props> = ({ children }) => {
   return (
      <h1
         className="text-xl font-bold decoration-4 mb-4 flex justify-center"
      >
         {children}
      </h1>
   )
}

export default Title