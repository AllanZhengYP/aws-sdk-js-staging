import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _KeySchemaElement: _Structure_ = {
    type: 'structure',
    required: [
        'AttributeName',
        'KeyType',
    ],
    members: {
        AttributeName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        KeyType: {
            shape: {
                type: 'string',
            },
        },
    },
};