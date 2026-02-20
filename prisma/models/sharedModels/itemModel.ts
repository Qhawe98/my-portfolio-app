/**
 * Represents a generic item model with an identifier, name, and description.
 */
export type ItemModel = {
    /** 
     * @property id - Unique identifier for the item
     * @type {string}
     */
    id: string;

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
     * @property image - URL to the item's image
     * @type {string} 
     * @optional
     */
    image?: string;

    /** 
     * @property icon - URL to the item's icon
     * @type {string} 
     * @optional
     */
    icon?: string;
}