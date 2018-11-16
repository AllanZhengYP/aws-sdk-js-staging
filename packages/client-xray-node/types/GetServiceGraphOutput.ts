import {_UnmarshalledService} from './_Service';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';

/**
 * GetServiceGraphOutput shape
 */
export interface GetServiceGraphOutput {
    /**
     * _Timestamp shape
     */
    StartTime?: Date;

    /**
     * _Timestamp shape
     */
    EndTime?: Date;

    /**
     * _ServiceList shape
     */
    Services?: Array<_UnmarshalledService>;

    /**
     * _String shape
     */
    NextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}