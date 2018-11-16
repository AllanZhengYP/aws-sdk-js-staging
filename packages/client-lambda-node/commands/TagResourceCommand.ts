import * as __aws_sdk_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {TagResource} from '../model/TagResource';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {TagResourceInput} from '../types/TagResourceInput';
import {TagResourceOutput} from '../types/TagResourceOutput';
import {LambdaResolvedConfiguration} from '../LambdaConfiguration';

export class TagResourceCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    TagResourceInput,
    OutputTypesUnion,
    TagResourceOutput,
    LambdaResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        TagResourceInput,
        TagResourceOutput,
        _stream.Readable
    >();

    constructor(readonly input: TagResourceInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: LambdaResolvedConfiguration
    ): __aws_sdk_types.Handler<TagResourceInput, TagResourceOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: TagResource
        };

        return stack.resolve(
            handler<TagResourceInput, TagResourceOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}