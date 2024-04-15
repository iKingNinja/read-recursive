export {};

declare module "read-recursive.js" {
    export function readSync(path: string, files?: string[]): string[];
}