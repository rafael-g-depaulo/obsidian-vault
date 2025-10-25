const script = async (params, settings) => {
  const { quickAddApi, app, variables, obsidian, abort } = params;

  // Get active editor
  const activeView = app.workspace.getActiveViewOfType(obsidian.MarkdownView);
  if (!activeView) return

  const editor = activeView.editor;
  const selection = editor.getSelection()

  variables.selection = selection

  const taskRegex = /-\[(<status>?:.)\] (<task>?:.*)/

  variables.result = taskRegex.exec(variables.selection)
  variables.test123 = JSON.stringify(variables)
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

