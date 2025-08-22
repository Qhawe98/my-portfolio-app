
/**
 * EmailModel interface for defining the structure of an email object.
 * This model is used to represent the data required for sending an email.
 */
export type EmailModel = {
    /**
     * @property {string} nameFrom - The name of the person sending the email.
     * This should be a string representing the sender's name.
     * It is used to personalize the email and identify the sender.
     */
    nameFrom: string;

    /**
     * @property {string} emailFrom - The email address of the person sending the email.
     * This should be a valid email format.
     * It is used to identify the sender and for reply purposes.
     */
    emailFrom: string;

    /**
     * @property {string} subject - The subject of the email.
     * This should be a brief summary of the email content.
     * It helps the recipient understand the purpose of the email at a glance.
     */
    subject: string;

    /**
     * @property {string} message - The content of the email message.
     * This should contain the main body of the email.
     * It can include text, links, and other relevant information.
     */
    message: string;
}