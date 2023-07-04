declare module "read-recursive" {
    export function read(path: string): Promise<string[]>;
}