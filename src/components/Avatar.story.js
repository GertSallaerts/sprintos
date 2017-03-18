import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Avatar from './Avatar';

function avatar(props = {}) {
    props.src = props.src || 'https://avatars3.githubusercontent.com/u/9919?v=3&s=144';
    return <Avatar {...props} />;
}

storiesOf('Avatar', module)
.add('default', () => avatar())
.add('big', () => avatar({ size: 100 }))
.add('small', () => avatar({ size: 30 }));
