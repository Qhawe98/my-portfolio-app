import type { SkillsCategoryModel } from "../models/skillsCategoryModel.ts";
import prisma from "../prisma.ts"
import type { Response, Request } from "express";


/** * Get all skill categories from the database and return them as a JSON response.
 * @param req - Express request object
 * @param res - Express response object used to send back the skill categories or an error message
 * @returns A JSON response with the list of skill categories or an error message if the operation fails
 */
export const getAllSkillCategories = async (req: Request, res: Response) => {
    try {
        const skillCategories = await prisma.skillCategory.findMany();
        return res.status(200).json(skillCategories);
    } catch (error) {
        console.error("Error fetching skill categories:", error);
        return res.status(500).json({ message: "Failed to fetch skill categories" });
    }
};


/**
 * Post new skill categories to the database. Expects an array of skill category objects in the request body.
 * @param req - Express request object containing the skill category data in req.body
 * @param res - Express response object used to send back the result of the operation
 * @returns A JSON response with the created skill categories or an error message if the operation fails
 */
export const postSkillCategory = async (req: Request, res: Response) => {
    try {
        const skillCategoryData = req.body;

        const newSkillCategory = await prisma.skillCategory.createMany({
            data: skillCategoryData.map((category: SkillsCategoryModel) => ({
                name: category.name,
                description: category.description,
                icon: category.icon || "",
            }))
        });

        return res.status(201).json(newSkillCategory);
    }
    catch (error) {
        console.error("Error creating skill category:", error);
        return res.status(500).json({
            message: "Failed to create skill category",
            error
        });
    }
};

export const deleteSkillCategory = async (req: Request, res: Response) => {
    try {
        const ids = req.body;

        if (!Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({ message: "IDs are required and must be a non-empty array" });
        }

        await prisma.skillCategory.deleteMany({
            where: {
                id: { in: ids }
            }
        });

        return res.status(200).json({ message: "Skill category deleted successfully" });
    } catch (error) {
        console.error("Error deleting skill category:", error);
        return res.status(500).json({ message: "Failed to delete skill category" });
    }
};


export default {
    getAllSkillCategories,
    postSkillCategory,
    deleteSkillCategory
}