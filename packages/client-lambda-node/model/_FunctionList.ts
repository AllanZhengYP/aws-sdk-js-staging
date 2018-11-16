import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_FunctionConfiguration} from './_FunctionConfiguration';

export const _FunctionList: _List_ = {
    type: 'list',
    member: {
        shape: _FunctionConfiguration,
    },
};