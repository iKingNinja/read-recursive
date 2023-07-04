declare module "read-recursive" {
    export function read(path: string, files?: string[]): Promise<string[]>;
}