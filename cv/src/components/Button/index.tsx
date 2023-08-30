import classnames from 'classnames'
import React from 'react'

function Button({ className, href, title, short_desc }: { className?: string, href: string, title: string, short_desc: string }) {
    return (
        <a
            href={href}
            className={classnames("flex flex-col justify-center items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30", className)}
            // target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                {title}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {short_desc}
            </p>
        </a>
    )
}

export default Button