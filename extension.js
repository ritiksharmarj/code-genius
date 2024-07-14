// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "code-genius" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    'code-genius.openWebView',
    function () {
      // The code you place here will be executed every time your command is executed
      const panel = vscode.window.createWebviewPanel(
        'webView',
        'ChatGPT',
        vscode.ViewColumn.One,
        {
          enableScripts: true,
        }
      );

      panel.webview.html = getWebviewContent();
      // Display a message box to the user
      // vscode.window.showInformationMessage('Hello World from Code Genius!');
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
					<iframe src="https://chatgpt.com/" width="100%" height="100%" frameborder="0"></iframe>
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
