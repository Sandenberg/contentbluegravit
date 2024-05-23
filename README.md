# Content Sharing Platform

This is an API project for a content sharing platform where users can share and rate different types of content such as games, videos, artworks, and music.

## Project Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/repository-name.git
cd repository-name
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the root of the project and add the following environment variables:

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/content-sharing
JWT_SECRET=your_secret_key
```
4.Start the server:

```bash
node app.js
```
### Populating the Database
To populate the database with sample data, create a populate.js script and run it after the initial project setup:

To run the population script, use the command:

```bash
node populate.js
```

### API Documentation
API documentation is available via Swagger. To access the documentation, start the server and open the following URL in your browser:

```bash
http://localhost:5000/api-docs
```
### API Endpoints

Users

-POST /api/users/register - Register a new user

-POST /api/users/login - Log in a user

Content

-GET /api/content - Get all content

-POST /api/content - Create new content

-PUT /api/content/:id - Update existing content

-DELETE /api/content/:id - Delete existing content

Ratings

-POST /api/rating/:contentId - Rate content

Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.
