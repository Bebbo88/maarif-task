import React from "react";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { Box } from "@mui/material";
import TaskColumn from "./TaskColumn";
import { useUpdateTask } from "../hooks/useUpdateTask";

const TaskBoard = ({ tasks, onEdit, onDelete }) => {
  const updateTaskMutation = useUpdateTask();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
  );

  const columns = [
    { id: "backlog", title: "Backlog" },
    { id: "in-progress", title: "In Progress" },
    { id: "review", title: "Review" },
    { id: "done", title: "Done" },
  ];

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newColumn = over.id;
    const task = active.data.current;

    if (task.column !== newColumn) {
      updateTaskMutation.mutate({ id: taskId, column: newColumn });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <Box
        sx={{
          display: "flex",
          pb: 2,
        }}
      >
        {columns.map((col) => (
          <TaskColumn
            key={col.id}
            id={col.id}
            title={col.title}
            tasks={tasks.filter((t) => t.column === col.id)}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </Box>
    </DndContext>
  );
};

export default TaskBoard;
