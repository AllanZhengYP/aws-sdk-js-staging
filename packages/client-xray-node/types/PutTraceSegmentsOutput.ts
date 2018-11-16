import {_UnmarshalledUnprocessedTraceSegment} from './_UnprocessedTraceSegment';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';

/**
 * PutTraceSegmentsOutput shape
 */
export interface PutTraceSegmentsOutput {
    /**
     * _UnprocessedTraceSegmentList shape
     */
    UnprocessedTraceSegments?: Array<_UnmarshalledUnprocessedTraceSegment>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
