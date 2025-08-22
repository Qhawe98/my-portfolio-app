/**
 * Represents a generic item model with an identifier, name, and description.
 */
export type ItemModel = {
    /** 
     * @property id - Unique identifier for the item
     * @type {number}
     */
    id: number;

    /** 
     * @property name - Name/title of the item
     * @type {string}
     */
    name: string;

    /** 
     * @property description - Description of the item
     * @type {string} 
     */
    description: string;

    /** 
     * @property skills - Skills associated with the item
     * @type {string[]}
     * @example ["JavaScript", "TypeScript", "React"]
     * @optional
     */
    skills?: string[];

    /** 
     * @property image - URL to the item's image
     * @type {string} 
     * @optional
     */
    image?: string;
}