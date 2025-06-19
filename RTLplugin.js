Draw.loadPlugin(function(ui) {
  var config = {
    "fontFamily": "Noto Sans Hebrew",
    "fontSize": 25,
    "defaultFonts": [
      "Noto Sans Hebrew",
      "Rubik",
      "Open Sans"
    ],
    "fontSource": "https://fonts.googleapis.com/css?family=Noto+Sans+Hebrew",
    "htmlLabels": true,
    "pasteAsPlainText": true,
    "formatPaste": true,
    "defaultTextDirection": "rtl",
    "pasteDirection": "rtl",
    "forceTextDirectionOnPaste": true,
    "defaultVertexStyle": {
      "html": 1,
      "align": "center",
      "verticalAlign": "middle",
      "resizable": 1,
      "points": [],
      "autosize": 1,
      "strokeColor": "none",
      "fillColor": "none",
      "fontFamily": "Noto Sans Hebrew",
      "fontSize": 25,
      "textDirection": "rtl",
      "whiteSpace": "wrap",
      "spacing": 4,
      "rounded": 1
    },
    "defaultEdgeStyle": {
      "strokeWidth": 2,
      "fontFamily": "Noto Sans Hebrew",
      "align": "right",
      "direction": "rtl"
    },
    "styles": {
      "text": {
        "html": 1,
        "align": "center",
        "verticalAlign": "middle",
        "resizable": 1,
        "points": [],
        "autosize": 1,
        "strokeColor": "none",
        "fillColor": "none",
        "fontFamily": "Noto Sans Hebrew",
        "fontSize": 25,
        "fontColor": "default",
        "textDirection": "rtl",
        "whiteSpace": "wrap"
      }
    },
    "plugins": [
      "autosave",
      "textdirection"
    ]
  };
  ui.editor.graph.model.prefix = null;
  ui.editor.configure(config);
  ui.showDialog('RTL Configuration Plugin loaded!', 'Info');
});