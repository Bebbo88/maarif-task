import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  DragIndicator as DragIcon,
} from "@mui/icons-material";

const TaskCard = ({ task, onEdit, onDelete }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id.toString(),
    data: task,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    cursor: "grab",
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      sx={{
        mb: 2,
        position: "relative",
        "&:hover .task-actions": { opacity: 1 },
        borderLeft: "4px solid",
        borderLeftColor:
          task.column === "backlog"
            ? "grey.400"
            : task.column === "in-progress"
              ? "primary.main"
              : task.column === "review"
                ? "warning.main"
                : "success.main",
      }}
    >
      <CardContent sx={{ pb: "16px !important" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: "1rem", fontWeight: "bold", pr: 4 }}
          >
            {task.title}
          </Typography>
          <Box
            {...attributes}
            {...listeners}
            sx={{ cursor: "grab", color: "text.secondary" }}
          >
            <DragIcon fontSize="small" />
          </Box>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1, mb: 1 }}
        >
          {task.description}
        </Typography>

        <Box
          className="task-actions"
          sx={{
            position: "absolute",
            bottom: 4,
            right: 4,
            opacity: 0,
            transition: "opacity 0.2s",
            display: "flex",
            gap: 0.5,
          }}
        >
          <Tooltip title="Edit">
            <IconButton size="small" onClick={() => onEdit(task)}>
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              size="small"
              color="error"
              onClick={() => onDelete(task.id)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
