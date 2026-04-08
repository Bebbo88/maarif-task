

## Features

- **Drag & Drop**: Move tasks between columns (Backlog, In Progress, Review, Done) using `dnd-kit`.
- **Search with Debounce**: Instantly filter tasks by title or description with a 500ms delay for performance.
- **Task Management**: Create, edit, and delete tasks easily.
- **Persistent Data**: Uses `json-server` as a mock backend.
- **Responsive UI**: Built with Material UI (MUI) for a modern, clean look.

##  Tech Stack

- **React** (Vite)
- **React Query** (Data fetching & caching)
- **Material UI** (Design system)
- **dnd-kit** (Drag & drop functionality)
- **Axios** (API requests)
- **json-server** (Mock REST API)

##  Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Mock API
In a separate terminal, start the `json-server`:
```bash
npx json-server --watch db.json --port 4000
```

### 3. Start the Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

##  Project Structure

- `src/components`: UI components (Board, Column, Card, Form).
- `src/hooks`: Custom React Query hooks and `useDebounce`.
- `src/services`: API configuration.
- `src/pages`: Main application page.
- `db.json`: Mock database file.


