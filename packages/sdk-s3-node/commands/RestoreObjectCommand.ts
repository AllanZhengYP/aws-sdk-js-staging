import * as __aws_bucket_endpoint_middleware from '@aws/bucket-endpoint-middleware';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {RestoreObject} from '../model/RestoreObject';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {RestoreObjectInput} from '../types/RestoreObjectInput';
import {RestoreObjectOutput} from '../types/RestoreObjectOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class RestoreObjectCommand implements __aws_types.Command<
    InputTypesUnion,
    RestoreObjectInput,
    OutputTypesUnion,
    RestoreObjectOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        RestoreObjectInput,
        RestoreObjectOutput,
        _stream.Readable
    >();

    constructor(readonly input: RestoreObjectInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<RestoreObjectInput, RestoreObjectOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: RestoreObject
        };
        stack.add(
            __aws_bucket_endpoint_middleware.bucketEndpointMiddleware({
                forcePathStyle: configuration.forcePathStyle,
                preformedBucketEndpoint: configuration.bucketEndpoint,
                useAccelerateEndpoint: configuration.useAccelerateEndpoint,
                useDualstackEndpoint: configuration.useDualstackEndpoint
            }),
            {
                step: 'build',
                priority: 0
            }
        );
        return stack.resolve(
            handler<RestoreObjectInput, RestoreObjectOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}