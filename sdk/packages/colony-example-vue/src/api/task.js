import * as ecp from '@/lib/ecp'
import { getColony } from '@/lib/colony-store'
import colonyProxy from '@/lib/colony-proxy'

export async function createTask({ colony = getColony(), task }) {
  const proxy = colonyProxy(colony)
  const newTask = {}
  await ecp.init()
  newTask.specificationHash = await ecp.saveHash(task.specification)
  await ecp.stop()
  if (task.domainId) newTask.domainId = task.domainId
  if (task.skillId) newTask.skillId = task.skillId
  if (task.dueDate) newTask.dueDate = new Date(task.dueDate)
  debugger
  return proxy.addTask(newTask)
}

export async function getTasks({ colony = getColony() }) {
  const { count: taskCount } = await colony.getTaskCount.call()
  const tasksIds = [...Array(taskCount).keys()].map(k => k + 1)
  await ecp.init()
  const tasks = await Promise.all(tasksIds.map(taskId => (async () => {
    const task = await colony.getTask.call({ taskId })
    const specification = await ecp.getHash(task.specificationHash)
    return {
      ...task,
      specification: { ...specification },
    }
  })()))
  await ecp.stop()
  return tasks
}
