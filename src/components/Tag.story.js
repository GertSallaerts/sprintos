import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Tag from './Tag';

function tag(props) {return <Tag {...props}>some-tag</Tag>; }

storiesOf('Tag', module)
.addDecorator(story => (
    <p style={{ fontSize: 20 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor {story()} incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud {story()} exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. {story()}
    </p>
))
.add('default', () => tag())
.add('red', () => tag({ color: 'red' }))
.add('black', () => tag({ color: 'black' }))
.add('green', () => tag({ color: 'green' }))
.add('huge', () => tag({ size: '2em' }));
