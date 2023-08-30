import classnames from 'classnames'
import React, { ReactNode } from 'react'

function H1({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <h1 className={classnames('text-4xl font-bold', className)}>{children}</h1>
    )
}

export default H1