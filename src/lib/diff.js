import { diffLines } from 'diff';

export function getDiff(oldText, newText) {
    return diffLines(oldText, newText);
}
