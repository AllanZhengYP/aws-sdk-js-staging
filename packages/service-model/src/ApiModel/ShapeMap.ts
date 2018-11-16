import {isObjectMapOf} from "./isObjectMapOf";
import {isShape} from './Shape';
import {Shape, ShapeMap} from '@aws-js-sdk-v3-prerelease/build-types';

/**
 * @internal
 */
export function isShapeMap(arg: any): arg is ShapeMap {
    return isObjectMapOf<Shape>(arg, isShape);
}
