import type { ItemModel } from "./sharedModels/itemModel";

/**
 * Represents a category of skills with an associated icon. This extends the generic item model.
 */
export type SkillsCategoryModel = {
    /**
     * @property icon - The icon representing the skill category.
     * @type {string}
     */
    icon: string;

    /**
     * @property skills - An array of skill names associated with this category.
     * @type {string[]}
     * @example ["JavaScript", "TypeScript", "React"]
     */
    skills: string[];
} & ItemModel