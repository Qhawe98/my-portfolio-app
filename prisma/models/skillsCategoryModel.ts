import type { ItemModel } from "./sharedModels/itemModel.ts";

/**
 * Represents a category of skills with an associated icon. This extends the generic item model.
 */
export type SkillsCategoryModel = {
    /**
     * @property icon - The icon representing the skill category.
     * @type {string}
     */
    icon: string;
} & ItemModel