import {_AliasRoutingConfiguration} from './_AliasRoutingConfiguration';
import {NodeHttpOptions as __HttpOptions__} from '@aws-js-sdk-v3-prerelease/types';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';

/**
 * CreateAliasInput shape
 */
export interface CreateAliasInput {
    /**
     * <p>The name of the lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string;

    /**
     * <p>Name for the alias you are creating.</p>
     */
    Name: string;

    /**
     * <p>Lambda function version for which you are creating the alias.</p>
     */
    FunctionVersion: string;

    /**
     * <p>Description of the alias.</p>
     */
    Description?: string;

    /**
     * <p>Specifies an additional version your alias can point to, allowing you to dictate what percentage of traffic will invoke each version. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">Traffic Shifting Using Aliases</a>.</p>
     */
    RoutingConfig?: _AliasRoutingConfiguration;

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