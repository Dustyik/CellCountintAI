import React from 'react';
import { Trend } from '../trending/Trend';
import { SettingsIcon } from '../../images/svg/svgs';

export const TrendsList = () => {
    const trends = [
        {
            name: '#Hyperparameter 1',
            topic: 'description',
            tweets: '3,700k'
        },
        {
            name: '#Hyperparameter 2',
            topic: 'description',
            tweets: '37k'
        }, {
            name: '#Hyperparameter 3',
            topic: 'description',
            tweets: '3,267'
        },
        {
            name: '#Hyperparameter 4',
            topic: 'description',
            tweets: '27k'
        }, {
            name: '#Hyperparameter 5',
            topic: 'description',
            tweets: '481k'
        }
    ]
    return (
        <div>
            <div className="trends-for-you flex-space-between">
                <h4 className="m-0">Tune the Model Hyperparameters!</h4>
                <SettingsIcon />
            </div>
            <div className="trends">
                {trends.map(trend => (<Trend trend={trend} />))}
            </div>
        </div>
    )
}
