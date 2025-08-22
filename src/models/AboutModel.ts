import type { ItemModel } from "./sharedModels/itemModel";

/**
 * AboutModel represents information about the application or website
 * It extends ItemModel to include common item properties.
 */
export type AboutModel ={
    /**
     * @property projectsCompleted - The number of projects completed.
     * @type {number}
     */
    projectsCompleted: number;

    /**
     * @property yearsExperience - The number of years of experience.
     * @type {number}
     */
    yearsExperience: number;
} & ItemModel;
