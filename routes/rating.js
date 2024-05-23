const express = require('express');
const router = express.Router();
const { rateContent } = require('../controllers/ratingController');
const auth = require('../middleware/auth');

/**
 * @swagger
 * components:
 *   schemas:
 *     Rating:
 *       type: object
 *       required:
 *         - contentId
 *         - rating
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the rating
 *         contentId:
 *           type: string
 *           description: The ID of the content
 *         rating:
 *           type: integer
 *           description: The rating of the content
 *         user:
 *           type: string
 *           description: The ID of the user who rated the content
 *       example:
 *         id: d5fE_asz
 *         contentId: d5fE_asz
 *         rating: 4
 *         user: d5fE_asz
 */

/**
 * @swagger
 * tags:
 *   name: Ratings
 *   description: The ratings managing API
 */

/**
 * @swagger
 * /api/ratings:
 *   post:
 *     summary: Rate a content
 *     tags: [Ratings]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rating'
 *     responses:
 *       200:
 *         description: The rating was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rating'
 *       404:
 *         description: The content was not found
 *       500:
 *         description: Some server error
 */
router.post('/', rateContent);

module.exports = router;
