import React from 'react';
import c from 'concat-js';
import octicons from 'octicons';

import 'primer-css/build/build.css';

const rgbRegex = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/;

let el, rgbMap = {};
function getRgb(color) {
    if (!el) {
        const body = document.getElementsByTagName('body')[0];
        el = document.createElement('div');
        el.setAttribute('style', 'position:absolute;display:none;');
        body.appendChild(el);
    }

    if (!rgbMap[color]) {
        el.style.backgroundColor = color;
        const rgbString = window.getComputedStyle(el).backgroundColor;
        const rgbMatch = rgbRegex.exec(rgbString);

        if (rgbMatch)
            rgbMap[color] = { r: rgbMatch[1], g: rgbMatch[2], b: rgbMatch[3] };
        else
            rgbMap[color] = { r: 0, g: 0, b: 0 };
    }

    return rgbMap[color];
}

// See: http://stackoverflow.com/a/1855903/186965
function isLightColor(color) {
    // Counting the perceptive luminance
    // human eye favors green color...
    var a = 1 - (0.299 * color.r + 0.587 * color.g + 0.114 * color.b) / 255;
    return (a < 0.5);
}

function getTextClass(backgroundColor) {
    if (isLightColor(getRgb(backgroundColor)))
        return 'text-gray-dark';
    else
        return 'text-white';
}

export default function Tag({
    color = '#959da5',
    size = 'calc(1em - 2px)',
    className,
    children,
    ...props
}) {
    className = c(className, 'state', getTextClass(color));

    const style = {
        padding: '3px 4px',
        fontSize: size,
        lineHeight: 1,
        borderRadius: 2,
        boxShadow: 'inset 0 -1px 0 rgba(27, 31, 35, 0.12)',
        backgroundColor: color
    };

    return <span className={className} style={style}>{children}</span>;
}
