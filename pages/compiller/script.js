let htmlEditor, cssEditor, jsEditor;
let darkMode = false;

window.onload = function () {
  htmlEditor = CodeMirror.fromTextArea(document.getElementById("htmlCode"), {
    mode: "htmlmixed",
    lineNumbers: true,
    theme: "default",
    extraKeys: { "Ctrl-Space": "autocomplete" }
  });

  cssEditor = CodeMirror.fromTextArea(document.getElementById("cssCode"), {
    mode: "css",
    lineNumbers: true,
    theme: "default",
    extraKeys: { "Ctrl-Space": "autocomplete" }
  });

  jsEditor = CodeMirror.fromTextArea(document.getElementById("jsCode"), {
    mode: "javascript",
    lineNumbers: true,
    theme: "default",
    extraKeys: { "Ctrl-Space": "autocomplete" }
  });

  switchTab("html");

  Split(['#editor-pane', '#output-pane'], {
    sizes: [50, 50],
    minSize: 100,
    gutterSize: 6,
    direction: 'horizontal'
  });
};

function switchTab(tab) {
  ["html", "css", "js"].forEach(id => {
    document.getElementById(`tab-${id}`).classList.add("hidden");
  });
  document.getElementById(`tab-${tab}`).classList.remove("hidden");

  setTimeout(() => {
    if (tab === "html") htmlEditor.refresh();
    if (tab === "css") cssEditor.refresh();
    if (tab === "js") jsEditor.refresh();
  }, 100);
}

function runCode() {
  const html = htmlEditor.getValue();
  const css = `<style>${cssEditor.getValue()}</style>`;
  const js = `<script>${jsEditor.getValue()}<\/script>`;

  const finalDoc = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Live Output</title>
      ${css}
    </head>
    <body>
      ${html}
      ${js}
    </body>
    </html>
  `;

  document.getElementById("output").srcdoc = finalDoc;
}


function toggleLayout() {
  const container = document.getElementById("container");
  container.classList.toggle("horizontal");
}

function toggleDarkMode() {
  const body = document.body;
  darkMode = !darkMode;
  body.classList.toggle("dark");

  const theme = darkMode ? "dracula" : "default";
  htmlEditor.setOption("theme", theme);
  cssEditor.setOption("theme", theme);
  jsEditor.setOption("theme", theme);
}

function captureScreenshot() {
  const iframe = document.getElementById("output");
  html2canvas(iframe.contentDocument.body).then(canvas => {
    const link = document.createElement("a");
    link.download = "output.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}


function openInNewTab() {
  const html = htmlEditor.getValue();
  const css = `<style>${cssEditor.getValue()}</style>`;
  const js = `<script>${jsEditor.getValue()}<\/script>`;

  const finalOutput = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>New Tab Output</title>
      ${css}
    </head>
    <body>
      ${html}
      ${js}
    </body>
    </html>
  `;

  const newWindow = window.open();
  newWindow.document.open();
  newWindow.document.write(finalOutput);
  newWindow.document.close();
}
