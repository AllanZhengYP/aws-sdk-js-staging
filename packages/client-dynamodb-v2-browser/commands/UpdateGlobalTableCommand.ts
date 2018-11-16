import * as __aws_sdk_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';
import {UpdateGlobalTable} from '../model/UpdateGlobalTable';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateGlobalTableInput} from '../types/UpdateGlobalTableInput';
import {UpdateGlobalTableOutput} from '../types/UpdateGlobalTableOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class UpdateGlobalTableCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdateGlobalTableInput,
    OutputTypesUnion,
    UpdateGlobalTableOutput,
    DynamoDBResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdateGlobalTableInput,
        UpdateGlobalTableOutput,
        Blob
    >();

    constructor(readonly input: UpdateGlobalTableInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdateGlobalTableInput, UpdateGlobalTableOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateGlobalTable
        };

        return stack.resolve(
            handler<UpdateGlobalTableInput, UpdateGlobalTableOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}