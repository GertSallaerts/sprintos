import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Issue from './Issue';

function issue(props) { return <Issue {...props} />; }

storiesOf('Issue', module)
.add('default', () => issue({
    pr: false,
    closed: true,
    repository: { owner: 'Gertt', name: 'sprintos'},
    number: 69,
    title: 'Provide a better way to manage Gertt\'s sprint',
    state: 'pending',
    tags: [
        { color: 'orange', name: 'in progress' },
        { color: 'blue', name: 'epic' }
    ],
    opener: {
        name: 'Gertt'
    },
    openedAt: new Date(Date.now() - 34534534),
    assignees: [
        { image: 'https://avatars0.githubusercontent.com/u/1267900?v=3&s=40' },
        { image: 'https://avatars2.githubusercontent.com/u/223318?v=3&s=40' }
    ],
    comments: 10,
    tasks: 10,
    completedTasks: 7,
    milestone: { name: 'sprint-13-2017' }
    // highlight = false,
}))
