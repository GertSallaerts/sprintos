import React from 'react';
import c from 'concat-js';
import octicons from 'octicons';

import './Issue.css';

import Avatar from './Avatar';
import Icon from './Icon';
import Tag from './Tag';
import Text from './Text';

function renderIcon(pr, closed) {
    const iconName =
        pr && closed ? 'git-merge' :
        pr && !closed ? 'git-pull-request' :
        !pr && closed ? 'issue-closed' :
        'issue-opened';
    const iconColor =
        pr && closed ? 'merged' :
        !pr && closed ? 'danger' :
        'success';

    return <Text className="" size="large" color={iconColor}><Icon name={iconName}/></Text>;
}

function renderRepository(repository) {
    const label = `${repository.owner}/${repository.name}`;
    return (
        <Text className="pr-1" color="muted" size="large" weight="strong">
            {label}{' '}
        </Text>
    );
}

function renderState(state) {
    if (!state) return null;

    const stateName =
        state == 'success' ? 'check' :
        state == 'pending' ? 'primitive-dot' :
        'x';
    const stateColor =
        state == 'success' ? 'success' :
        state == 'pending' ? 'warning' :
        'danger';

    return <Text color={stateColor}><Icon name={stateName}/></Text>;
}

function renderTasks(total, completed) {
    if (!total) return null;

    const width = Math.floor(completed / total * 100) + '%';

    return (
        <span className="ml-2">
            <Text size="large" color="faded"><Icon name="checklist" /></Text>
            <span className="ml-1 mr-2">{completed} of {total}</span>
            <span className="Issue__progress">
                <span className="Issue__progress__fill" style={{ width }} />
            </span>
        </span>
    );
}

function renderMilestone(milestone) {
    if (!milestone) return null;

    return (
        <span className="ml-2">
            <Text size="large" color="faded"><Icon name="milestone" /></Text>
            <span className="ml-1">{milestone.name}</span>
        </span>
    );
}

function renderComments(comments) {
    if (!comments) return null;

    return (
        <Text size="large" weight="strong" color="muted">
            <Icon name="comment" />
            <Text size="small"> {comments}</Text>
        </Text>
    );
}

export default function Issue({
    pr = false,
    closed = false,
    repository = {},
    number,
    title,
    state,
    tags = [],
    opener,
    openedAt,
    milestone,
    assignees = [],
    comments = 0,
    tasks = 0,
    completedTasks = 0,
    highlight = false,
    className,
    ...props
}) {
    className = c('Issue', 'py-2', 'px-3', className);
    openedAt = 'on ' + openedAt.toLocaleDateString();

    return (
        <div className={className}>
            <div className="Issue__icon">
                {renderIcon(pr, closed)}
            </div>
            <div className="Issue__body px-2">
                <div>
                    {renderRepository(repository)}
                    <Text size="large" weight="strong">{title}{' '}</Text>
                    {renderState(state)}
                    {tags.map(tag => (
                        <span>{' '}<Tag color={tag.color}>{tag.name}</Tag></span>
                    ))}
                </div>
                <div>
                    <Text color="muted" size="small">
                        #{number} opened {openedAt} by {opener.name}
                        {renderTasks(tasks, completedTasks)}
                        {renderMilestone(milestone)}
                    </Text>
                </div>
            </div>
            <div className="Issue__assignees pr-3">
                {assignees.map(a => <Avatar size={20} src={a.image} />)}
            </div>
            <div className="Issue__comments">
                {renderComments(comments)}
            </div>
        </div>
    );
}
