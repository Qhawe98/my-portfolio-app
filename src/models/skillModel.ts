import type { ItemModel } from "./sharedModels/itemModel";

/**
 * SkillModel represents a skill with its associated category.
 * It extends ItemModel to include common item properties.
 */
export type SkillModel = {

    /**
     * @property skillsCategoryId - The ID of the category this skill belongs to.
     * This links the skill to its category.
     * @type {number}
     */
    skillsCategoryId: number;
} & ItemModel;