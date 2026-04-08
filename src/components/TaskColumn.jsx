import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { Paper, Typography, Box, Badge } from "@mui/material";
import TaskCard from "./TaskCard";

const TaskColumn = ({ id, title, tasks, onEdit, onDelete }) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <Box sx={{ flex: 1, minWidth: 280, mx: 1 }}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          backgroundColor: "grey.100",
          borderRadius: 2,
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, px: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
            {title}
          </Typography>
          <Badge badgeContent={tasks.length} color="secondary" />
        </Box>

        <Box
          ref={setNodeRef}
          sx={{
            flexGrow: 1,
            transition: "background-color 0.2s",
            p: 1,
            borderRadius: 1,
          }}
        >
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
          {tasks.length === 0 && (
            <Box
              sx={{
                border: "2px dashed",
                borderColor: "grey.300",
                borderRadius: 1,
                p: 4,
                textAlign: "center",
                color: "text.disabled",
              }}
            >
              No tasks here
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default TaskColumn;
