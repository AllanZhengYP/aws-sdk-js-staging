import {_AutoScalingTargetTrackingScalingPolicyConfigurationDescription} from './_AutoScalingTargetTrackingScalingPolicyConfigurationDescription';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _AutoScalingPolicyDescription: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        PolicyName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        TargetTrackingScalingPolicyConfiguration: {
            shape: _AutoScalingTargetTrackingScalingPolicyConfigurationDescription,
        },
    },
};