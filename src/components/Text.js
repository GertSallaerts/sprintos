import React from 'react';
import c from 'concat-js';
import octicons from 'octicons';

import 'primer-css/build/build.css';

const sizeMap = { small: 12, normal: 14, large: 16 };
const weightMap = { normal: 'normal', strong: 600 };
const colorMap = {
    faded: 'text-gray-light', muted: 'text-gray', normal: 'text-gray-dark',
    success: 'text-green', warning: 'text-orange', danger: 'text-red',
    merged: 'text-purple'
};

export default function Text({
    size = '1em',
    weight = 'inherit',
    color = 'currentColor',
    children,
    className,
    ...props
}) {
    const style = {};

    if (size) style.fontSize = sizeMap[size] || size;
    if (weight) style.fontWeight = weightMap[weight] || weight;
    if (color && colorMap[color]) className = c(className, colorMap[color]);
    if (color && !colorMap[color]) style.color = color;

    return <span className={className} style={style}>{children}</span>;
}
