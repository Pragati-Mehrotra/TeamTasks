<template>
  <div id="app">
    <div >
      <div class="addTaskMeaasge">Add a task</div>
      <div class="container">
        <input class="input1" type="text" v-model="newTask">
        <div>
          <button  class="button1" @click="addTask">
            Add
          </button>
          <button class="button1" @click.self="clearAllTasks">
            Clear all
          </button>
        </div>
      </div>
    </div>
    <div class="taskListWrapper">
      <div class="taskHeading">
        Tasklist
      </div>

      <div class="tasks">
        <div v-for="(task,index) in filteredList" :key="index" class="tasklist-item"> {{ task }} </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/app"></script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.addTaskMeaasge {
  font-size: 1.4rem;
}
.tasklist-item {
  background-color: aliceblue;
  margin: 10px;
  width: 100%;
  font-family: Helevetica;
  height: 30px;
  padding: 10px;
}
.input1{
  padding: 10px;
  border: 2px solid black;
  width: 60%;
  margin: 10px;
}
.button1{
  width: 90px;
  height: 30px;
  margin: 10px;
}
.container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.tasks{
  width: 80%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 10px auto;
}
.taskListWrapper {
  margin: 20px;
}
.taskHeading {
  font-size: 1.4rem;
  color: dodgerblue;
  font-weight: bold;
  margin: 10px;
}

</style>
