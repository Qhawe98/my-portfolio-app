import type { ItemModel } from "./sharedModels/itemModel";

/**
 * ExperienceModel represents a work experience entry.
 * It extends ItemModel to include common item properties.
 */
export type ExperienceModel = {

    /**
     * @property title - Job title of the experience.
     * @type {string}
     */
    employer: string;

    /**
     * @property startDate - Start date of the experience.
     * @type {string}
     */
    startDate: string;

    /**
     * @property endDate - End date of the experience.
     * @type {string}
     */
    endDate: string;

    /**
     * @property description - Description of the experience.
     * @type {boolean}
     */
    isPresent: boolean;
} & ItemModel;