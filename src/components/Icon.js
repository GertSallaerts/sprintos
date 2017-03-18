import React from 'react';
import octicons from 'octicons';

import 'octicons/build/octicons.css';
import 'primer-css/build/build.css';

const sizeRegex = /([+-.,0-9]+)(.*)/;

function parseSize(sizeStr) {
    const match = sizeRegex.exec(sizeStr);

    if (!match)
        return false;

    const amount = parseFloat(match[1]);
    const unit = match[2] || 'px';

    if (isNaN(amount))
        return false;

    return [ amount, unit ];
}

function stringifySize(amount, unit) {
    return `${amount}${unit}`;
}

export default function Icon({
    name,
    size = '1em',
    square,
    ...props
}) {
    const icon = octicons[name];

    let width, height;
    if (square) {
        width = height = size;
    } else {
        const [ heightAmount, heightUnit ] = parseSize(size);
        const widthAmount = heightAmount / icon.height * icon.width;
        height = size;
        width = stringifySize(widthAmount, heightUnit);
    }

    const path = icon.toSVG({ height, width });

    return <span {...props} dangerouslySetInnerHTML={{ __html: path }} />;
}
