const script = async (params, settings) => {
  const { quickAddApi, app, variables, obsidian, abort } = params;

  // Get active editor
  const activeView = app.workspace.getActiveViewOfType(obsidian.MarkdownView);
  if (!activeView) return

  const editor = activeView.editor;
  const selection = editor.getSelection()

  variables.selection = selection

  const taskRegex = /-\s*\[(?<status>.)\]\s*(?<task>.*)/

  if (!taskRegex.test(selection)) return

  const { status, task } = taskRegex.exec(variables.selection).groups ?? {}

  const validStatuses = settings["Available Statuses"].split(',')
  const statusId = validStatuses.findIndex(s => s === status)
  const nextStatusId = (statusId + 1) % validStatuses.length

  // variables.statusId = statusId
  // variables.nextStatusId = nextStatusId
  // variables.status = status
  variables.nextStatus = validStatuses[nextStatusId]
  variables.task = task
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

