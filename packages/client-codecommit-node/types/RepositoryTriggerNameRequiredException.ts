import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>A name for the trigger is required but was not specified.</p>
 */
export interface RepositoryTriggerNameRequiredException extends __ServiceException__<_RepositoryTriggerNameRequiredExceptionDetails> {
    name: 'RepositoryTriggerNameRequiredException';
}

export interface _RepositoryTriggerNameRequiredExceptionDetails {

}