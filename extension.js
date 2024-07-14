// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Register a command that will be called when the extension icon is clicked
  const disposable = vscode.commands.registerCommand(
    'code-genius.open',
    function () {
      // Create and show a new webview
      const panel = vscode.window.createWebviewPanel(
        'chatgptWebView', // Identifies the type of the webview
        'ChatGPT', // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in
        {
          enableScripts: true,
          retainContextWhenHidden: true,
        }
      );

      // Set the webview's HTML content
      panel.webview.html = getWebviewContent();
    }
  );

  context.subscriptions.push(disposable);
}

function getWebviewContent() {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>ChatGPT</title>
      </head>
      <body>
          <iframe src="https://ritiksharma.me/" width="100%" height="100%" frameborder="0"></iframe>
      </body>
      </html>
  `;
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
