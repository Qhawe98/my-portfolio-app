import prisma from "../prisma.ts"
import type { Response, Request } from "express";
import type { SkillModel } from "../models/skillModel.ts";

/** * Get all skills from the database and return them as a JSON response.
 * @param req - Express request object
 * @param res - Express response object used to send back the skills or an error message
 * @returns A JSON response with the list of skills or an error message if the operation fails
 */
export const getAllSkills = async (req: Request, res: Response) => {
  try {
    const skills = await prisma.skill.findMany();
    return res.status(200).json(skills);
  } catch (error) {
    console.error("Error fetching skills:", error);
    return res.status(500).json({ message: "Failed to fetch skills" });
  }
};


/** * Post new skills to the database. Expects an array of skill objects in the request body.
 * @param req - Express request object containing the skill data in req.body
 * @param res - Express response object used to send back the result of the operation
 * @returns A JSON response with the created skills or an error message if the operation fails
 */
export const postSkill = async (req: Request, res: Response) => {
  try {
    const skillData = req.body;

    const newSkill = await prisma.skill.createMany({
      data: skillData.map((skill: SkillModel) => ({
        name: skill.name,
        description: skill.description,
        skillCategoryId: skill.skillsCategoryId,
        icon: skill.icon || "",
      }))
    });

    return res.status(201).json(newSkill);
  } catch (error) {
    console.error("Error creating skill:", error);
    return res.status(500).json({ message: "Failed to create skill" });
  }
};
