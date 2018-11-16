import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _AccountLimit: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        TotalCodeSize: {
            shape: {
                type: 'integer',
            },
        },
        CodeSizeUnzipped: {
            shape: {
                type: 'integer',
            },
        },
        CodeSizeZipped: {
            shape: {
                type: 'integer',
            },
        },
        ConcurrentExecutions: {
            shape: {
                type: 'integer',
            },
        },
        UnreservedConcurrentExecutions: {
            shape: {
                type: 'integer',
            },
        },
    },
};