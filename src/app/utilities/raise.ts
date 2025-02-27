export const raise = (error: unknown): never => {
    console.error(error);
    throw error;
}