/**
 * Represents a generic item model with an identifier, name, and description.
 */
export type ItemModel = {
    /** 
     * Unique identifier for the item 
     * */
    id: number;

    /** 
     * Name of the item 
     * */
    name: string;

    /** 
     * Description of the item 
     * */
    description: string;

    /** 
     * Creation timestamp of the item 
     * */
    created_at?: string;
}