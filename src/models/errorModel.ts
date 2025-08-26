export type ErrorModel = {
    /**
     * @property message - The error message.
     * @type {string}
     */
    message: string;

    /**
     * @property code - The error code (optional).
     * @type {number | undefined}
     */
    status?: number;
}