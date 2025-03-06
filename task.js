// -------------------------------------------------------------------------
// Task Component
// -------------------------------------------------------------------------
class Task extends Component {
  static template = xml `
  <div class="task" t-att-class="props.task.isCompleted ? 'done' : ''">
      <input type="checkbox" t-att-checked="props.task.isCompleted" t-att-id="props.task.id" t-on-click="() => store.toggleTask(props.task)"/>
      <label t-att-for="props.task.id"><span><t t-slot="testing"/></span> <t t-esc="props.task.text"/></label>
      <span class="delete" t-on-click="() => store.deleteTask(props.task)">🗑</span>
  </div>`;
    
  static props = ["task", "slots"];

  setup() {
    this.store = useStore();
  }
};

