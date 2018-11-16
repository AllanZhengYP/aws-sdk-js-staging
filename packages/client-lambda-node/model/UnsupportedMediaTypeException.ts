import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const UnsupportedMediaTypeException: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Type: {
            shape: {
                type: 'string',
            },
        },
        message: {
            shape: {
                type: 'string',
            },
        },
    },
    exceptionType: 'UnsupportedMediaTypeException',
};