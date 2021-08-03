import React from 'react';
import { Trend } from '../trending/Trend';
import { SettingsIcon } from '../../images/svg/svgs';

export const TrendsList = () => {
    const trends = [
        {
            name: '#Hyperparaemter 1',
            topic: 'description',
            tweets: '3,700k'
        },
        {
            name: '#Hyperparaemter 2',
            topic: 'description',
            tweets: '37k'
        }, {
            name: '#Hyperparaemter 3',
            topic: 'description',
            tweets: '3,267'
        },
        {
            name: '#Hyperparaemter 4',
            topic: 'description',
            tweets: '27k'
        }, {
            name: '#Hyperparaemter 5',
            topic: 'description',
            tweets: '481k'
        }
    ]
    return (
        <div>
            <div className="trends-for-you flex-space-between">
                <h1 className="m-0">Trends for you</h1>
                <SettingsIcon />
            </div>
            <div className="trends">
                {trends.map(trend => (<Trend trend={trend} />))}
            </div>
        </div>
    )
}
