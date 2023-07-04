export {};

declare module "read-recursive.js" {
    export function read(path: string, files?: string[]): Promise<string[]>;
}