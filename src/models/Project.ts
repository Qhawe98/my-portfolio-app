import type { ItemModel } from "./sharedModels/itemModel";


/**
 * ProjectModel represents a project entry.
 * It extends ItemModel to include common item properties.
 */
export type ProjectModel = {
    /**
     * @property demoUrl - URL for the project demo.
     * This is optional and can be used to showcase the project live.
     * @type {string}
     */
    demoUrl?: string;

    /**
     * @property githubUrl - URL for the project's source code.
     * This is optional and can be used to link to the project's source code.
     * @type {string}
     */
    githubUrl?: string;

    /**
     * @property tools - List of tools or technologies used in the project.
     * This is an array of strings representing the technologies used.
     */
    tools: string[];
} & ItemModel;