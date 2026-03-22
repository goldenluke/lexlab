/// <reference path="../.astro/types.d.ts" />
import type { tField } from './utils/tField';

declare namespace App {
    interface Locals {
        tField: typeof tField;
    }
}
