import type { ItemModel } from "./sharedModels/itemModel";

/**
 * ContactModel represents contact information for an individual or organization.
 * It extends ItemModel to include common item properties.
 */
export type ContactModel = {
    /**
     * Email address for contact.
     * @type {string}
     */
    email: string;

    /**
     * @property number - Phone number for contact.
     * @type {string}
     */
    number: string;

    /**
     * @property location - Physical location for contact.
     * @type {string}
     */
    location: string;

    /**
     * @property github - GitHub profile link for contact.
     * @type {string}
     */
    github: string;

    /**
     * @property linkedIn - LinkedIn profile link for contact.
     * @type {string}
     */
    linkedIn: string;
} & ItemModel;