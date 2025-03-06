const { Component, mount, xml, useRef, onMounted, useState, reactive, useEnv } = owl;

// -------------------------------------------------------------------------
// Store
// -------------------------------------------------------------------------
function useStore() {
  const env = useEnv();
  return useState(env.store);
}

function createTaskStore() {
  const saveTasks = () => localStorage.setItem("todoapp", JSON.stringify(taskStore.tasks));
  const initialTasks = JSON.parse(localStorage.getItem("todoapp") || "[]");
  const taskStore = reactive(new TaskList(initialTasks), saveTasks);
  saveTasks();
  return taskStore;
}

// -------------------------------------------------------------------------
// Setup
// -------------------------------------------------------------------------
const myEnv = {
  store: createTaskStore(),
};
