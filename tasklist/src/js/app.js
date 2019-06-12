export default {
  name: 'App',
  data () {
    return {
      newTask: '',
      tasks: [
        'first task',
        'second task',
        'third task'
      ]
    }
  },
  created () {
    this.readTasksFromLocalStorage()
  },
  computed: {
    filteredList () {
      console.log(this.search())
      return this.search()
    }
  },
  methods: {
    addTask () {
      if (this.validate()) {
        if (this.newTask.trim() !== '') {
          this.tasks.push(this.newTask)
          this.saveTasksToLocalStorage()
        } else {
          alert('You cannot add an empty task.')
        }
      } else {
        alert('Task is already in the list')
      }
      this.newTask = ''
    },
    clearAllTasks () {
      this.tasks = []
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    readTasksFromLocalStorage () {
      let temp = localStorage.getItem('tasks') || ''
      this.tasks = JSON.parse(temp)
    },
    saveTasksToLocalStorage (tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    search () {
      return this.tasks.filter(task => {
        return task.toLowerCase().indexOf(this.newTask.toLowerCase()) >= 0
      })
    },
    validate () {
      let res = true
      this.tasks.map((task) => {
        if (task === this.newTask) {
          res = false
        }
      })
      return res
    }
  }
}
