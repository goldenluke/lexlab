import type { MiddlewareHandler } from 'astro';
import { tField } from './utils/tField';

export const onRequest: MiddlewareHandler = async (context, next) => {
    context.locals.tField = tField;
    return next();
};
