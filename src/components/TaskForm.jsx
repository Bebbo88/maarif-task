import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const TaskForm = ({ open, onClose, onSubmit, initialData }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    column: "backlog",
  });

  useEffect(() => {
    if (initialData) {
      setTask(initialData);
    } else {
      setTask({ title: "", description: "", column: "backlog" });
    }
  }, [initialData, open]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{initialData ? "Edit Task" : "Add New Task"}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <TextField
            autoFocus
            name="title"
            label="Title"
            type="text"
            fullWidth
            required
            value={task.title}
            onChange={handleChange}
            sx={{ mb: 2, mt: 1 }}
          />
          <TextField
            name="description"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={3}
            value={task.description}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Column</InputLabel>
            <Select
              name="column"
              value={task.column}
              label="Column"
              onChange={handleChange}
            >
              <MenuItem value="backlog">Backlog</MenuItem>
              <MenuItem value="in-progress">In Progress</MenuItem>
              <MenuItem value="review">Review</MenuItem>
              <MenuItem value="done">Done</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {initialData ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default TaskForm;
