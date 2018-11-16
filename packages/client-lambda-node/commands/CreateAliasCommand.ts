import * as __aws_sdk_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {CreateAlias} from '../model/CreateAlias';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateAliasInput} from '../types/CreateAliasInput';
import {CreateAliasOutput} from '../types/CreateAliasOutput';
import {LambdaResolvedConfiguration} from '../LambdaConfiguration';

export class CreateAliasCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateAliasInput,
    OutputTypesUnion,
    CreateAliasOutput,
    LambdaResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateAliasInput,
        CreateAliasOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateAliasInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: LambdaResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateAliasInput, CreateAliasOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateAlias
        };

        return stack.resolve(
            handler<CreateAliasInput, CreateAliasOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}