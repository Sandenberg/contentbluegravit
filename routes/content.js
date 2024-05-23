const express = require('express');
const router = express.Router();
const { createContent, getContents, updateContent, deleteContent } = require('../controllers/contentController');
const auth = require('../middleware/auth');

/**
 * @swagger
 * components:
 *   schemas:
 *     Content:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - category
 *         - thumbnail_url
 *         - content_url
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the content
 *         title:
 *           type: string
 *           description: The title of the content
 *         description:
 *           type: string
 *           description: The description of the content
 *         category:
 *           type: string
 *           enum: [game, video, art, music]
 *           description: The category of the content
 *         thumbnail_url:
 *           type: string
 *           description: The URL of the content thumbnail
 *         content_url:
 *           type: string
 *           description: The URL of the content
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the content was created
 *         user:
 *           type: string
 *           description: The ID of the user who created the content
 *       example:
 *         id: d5fE_asz
 *         title: My First Content
 *         description: This is a description of my first content.
 *         category: video
 *         thumbnail_url: http://example.com/thumbnail.jpg
 *         content_url: http://example.com/content.mp4
 *         createdAt: 2021-05-12T07:22:13.456Z
 *         user: d5fE_asz
 */

/**
 * @swagger
 * tags:
 *   name: Contents
 *   description: The contents managing API
 */

/**
 * @swagger
 * /api/contents:
 *   post:
 *     summary: Create a new content
 *     tags: [Contents]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Content'
 *     responses:
 *       200:
 *         description: The content was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Content'
 *       500:
 *         description: Some server error
 */
router.post('/',createContent);

/**
 * @swagger
 * /api/contents:
 *   get:
 *     summary: Get all contents
 *     tags: [Contents]
 *     responses:
 *       200:
 *         description: List of all contents
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Content'
 *       500:
 *         description: Some server error
 */
router.get('/', getContents);

/**
 * @swagger
 * /api/contents/{id}:
 *   put:
 *     summary: Update a content
 *     tags: [Contents]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The content ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Content'
 *     responses:
 *       200:
 *         description: The content was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Content'
 *       404:
 *         description: The content was not found
 *       401:
 *         description: User not authorized
 *       500:
 *         description: Some server error
 */
router.put('/:id', updateContent);

/**
 * @swagger
 * /api/contents/{id}:
 *   delete:
 *     summary: Remove a content
 *     tags: [Contents]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The content ID
 *     responses:
 *       200:
 *         description: The content was successfully deleted
 *       404:
 *         description: The content was not found
 *       401:
 *         description: User not authorized
 *       500:
 *         description: Some server error
 */
router.delete('/:id', deleteContent);

module.exports = router;
