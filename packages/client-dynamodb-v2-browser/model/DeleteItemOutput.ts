import {_AttributeMap} from './_AttributeMap';
import {_ConsumedCapacity} from './_ConsumedCapacity';
import {_ItemCollectionMetrics} from './_ItemCollectionMetrics';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DeleteItemOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Attributes: {
            shape: _AttributeMap,
        },
        ConsumedCapacity: {
            shape: _ConsumedCapacity,
        },
        ItemCollectionMetrics: {
            shape: _ItemCollectionMetrics,
        },
    },
};