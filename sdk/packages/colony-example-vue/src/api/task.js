import * as ecp from '@/helpers/ecp'
import { getColonyClient } from '@/stores/colonyClient'
import { send } from '@/helpers/proxies'

export async function addTask({ colonyClient = getColonyClient(), task }) {
  const newTask = {}
  await ecp.init()
  newTask.specificationHash = await ecp.saveHash(task.specification)
  await ecp.stop()
  if (task.domainId) newTask.domainId = task.domainId
  if (task.skillId) newTask.skillId = task.skillId
  if (task.dueDate) newTask.dueDate = new Date(task.dueDate)
  return send(colonyClient).addTask(newTask)
}

export async function getTask({
  colonyClient = getColonyClient(),
  taskId,
  withSpec = true,
}) {
  const task = await colonyClient.getTask.call({ taskId })
  if (withSpec) {
    const specification = await ecp.getHash(task.specificationHash)
    return {
      ...task,
      specification,
    }
  }
  return task
}

export async function getTasks({ colonyClient = getColonyClient() }) {
  const { count: taskCount } = await colonyClient.getTaskCount.call()
  const tasksIds = [...Array(taskCount).keys()].map(k => k + 1)
  await ecp.init()
  const tasks = await Promise.all(
    tasksIds.map(taskId => getTask({ taskId }))
  )
  await ecp.stop()
  return tasks
}
