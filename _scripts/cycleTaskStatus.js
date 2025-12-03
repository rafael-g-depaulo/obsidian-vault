const cycleStatus = (config = settings, task, status) => {
  const validStatuses = config["Available Statuses"].split(',')
  const statusId = validStatuses.findIndex(s => s === status)
  const nextStatusId = (statusId + 1) % validStatuses.length

  // variables.statusId = statusId
  // variables.nextStatusId = nextStatusId
  // variables.status = status

  return {
    nextStatus: validStatuses[nextStatusId],
    task,
  }
}

const newTask = (config = settings, task = task) => {
  const defaultStatus = config["Available Statuses"].split(',')[0]
  return {
    nextStatus: defaultStatus,
    task,

  }
}

const script = async (params, settings) => {
  const { _quickAddApi, app, variables, obsidian, abort } = params;

  // Get active editor
  const activeView = app.workspace.getActiveViewOfType(obsidian.MarkdownView);
  if (!activeView) return

  const editor = activeView.editor;
  const selection = editor.getSelection()

  variables.selection = selection

  const taskRegex = /-\s*\[(?<status>.)\]\s*(?<task>.*)/

  if (!taskRegex.test(selection)) {
    newTask(settings, selection)
  }

  const { status, task } = taskRegex.exec(variables.selection).groups ?? {}
  cycleStatus(settings, task, status)

}

module.exports = {
  entry: script,
  settings: {
    name: "Extract Task",
    options: {
      "Available Statuses": {
        type: "text",
        defaultValue: [' ', 'x', '/'].join(","),
        description: "comma separated, pls"
      }
    }
  }
}
