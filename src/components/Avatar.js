import React from 'react';
import c from 'concat-js';

import 'primer-css/build/build.css';

export default function Avatar({
    src,
    size = 72,
    className,
    ...props
}) {
    const ourProps = {
        className: c(className, size < 48 ? 'avatar-small' : 'avatar'),
        width: size,
        height: size,
        src
    };

    return <img {...props} {...ourProps} />;
}
