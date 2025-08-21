import type { ItemModel } from "./shared_models/item_model";

/**
 * Represents a category of skills with an associated icon. This extends the generic item model.
 */
export type SkillsCategoryModel = {
    /**
     * @property icon - The icon representing the skill category.
     */
    icon: string;
} & ItemModel