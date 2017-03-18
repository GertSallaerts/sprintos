import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Icon from './Icon';

function icon(props) { return <Icon {...props} />; }

storiesOf('Icon', module)
.addDecorator(story => (
    <p>Hello world, this is an {story()} icon, you know?</p>
))
.add('triangle-up', () => icon({ name: 'triangle-up' }))
.add('huge logo-github', () => icon({ size: '5em', name: 'logo-github' }))
.add('alert', () => icon({ name: 'alert' }));
