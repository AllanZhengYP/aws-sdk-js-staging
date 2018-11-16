import {_BatchGetResponseMap} from './_BatchGetResponseMap';
import {_BatchGetRequestMap} from './_BatchGetRequestMap';
import {_ConsumedCapacityMultiple} from './_ConsumedCapacityMultiple';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const BatchGetItemOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Responses: {
            shape: _BatchGetResponseMap,
        },
        UnprocessedKeys: {
            shape: _BatchGetRequestMap,
        },
        ConsumedCapacity: {
            shape: _ConsumedCapacityMultiple,
        },
    },
};