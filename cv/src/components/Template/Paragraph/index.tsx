import classnames from 'classnames'
import React, { ReactNode } from 'react'

function Paragraph({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <p className={classnames('', className)}>{children}</p>
    )
}

export default Paragraph