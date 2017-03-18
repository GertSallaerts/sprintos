import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Text from './Text';

function text(props) {
    return (
        <Text {...props}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </Text>
    );
}

storiesOf('Text', module)
.add('default', () => text())
.add('heavy danger', () => text({ color: 'danger', weight: 'strong' }))
.add('big success', () => text({ color: 'success', size: 'large' }))
.add('custom', () => text({ color: '#F3A109', size: '32px', weight: 100 }))
