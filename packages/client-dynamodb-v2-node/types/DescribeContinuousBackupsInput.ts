import {NodeHttpOptions as __HttpOptions__} from '@aws-js-sdk-v3-prerelease/types';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';

/**
 * DescribeContinuousBackupsInput shape
 */
export interface DescribeContinuousBackupsInput {
    /**
     * <p>Name of the table for which the customer wants to check the continuous backups and point in time recovery settings.</p>
     */
    TableName: string;

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_sdk_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}