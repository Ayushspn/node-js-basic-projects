# Express CRUD API for Notes

This project is a simple CRUD API for managing notes using Express and TypeScript. It allows users to create, read, update, and delete notes.

## Project Structure

```
express-crud-api
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers
│   │   └── notesController.ts # Controller for handling notes operations
│   ├── routes
│   │   └── notesRoutes.ts     # Routes for notes API
│   └── models
│       └── note.ts            # Model representing a note
├── package.json               # NPM package configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd express-crud-api
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

## API Endpoints

- **GET /notes**: Retrieve all notes.
- **GET /notes/:id**: Retrieve a note by its ID.
- **POST /notes**: Create a new note.
- **PUT /notes/:id**: Update an existing note by its ID.
- **DELETE /notes/:id**: Delete a note by its ID.

## Example Usage

### Create a Note

```bash
curl -X POST http://localhost:3000/notes -H "Content-Type: application/json" -d '{"title": "Note Title", "content": "Note Content"}'
```

### Get All Notes

```bash
curl http://localhost:3000/notes
```

### Update a Note

```bash
curl -X PUT http://localhost:3000/notes/1 -H "Content-Type: application/json" -d '{"title": "Updated Title", "content": "Updated Content"}'
```

### Delete a Note

```bash
curl -X DELETE http://localhost:3000/notes/1
```

## License

This project is licensed under the MIT License.