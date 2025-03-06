// -------------------------------------------------------------------------
// TaskList
// -------------------------------------------------------------------------
class TaskList {
  constructor(tasks) {
    this.tasks = tasks || [];
    const taskIds = this.tasks.map((t) => t.id);
    this.nextId = taskIds.length ? Math.max(...taskIds) + 1 : 1;
  }

  addTask(text) {
    text = text.trim();
    if (text) {
      const task = {
        id: this.nextId++,
        text: text,
        isCompleted: false,
      };
      this.tasks.push(task);
    }
  }

  toggleTask(task) {
    task.isCompleted = !task.isCompleted;
  }

  deleteTask(task) {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks.splice(index, 1);
  }
}
