# RTL Support for draw.io

This repository provides two ways to enable optimal right-to-left (RTL) text support in **draw.io** diagrams:

---

## Available Files

- `draw.io_rtl_configuration_with_PASTE_FIXED.js`  
  A JSON configuration file that sets fonts, text direction, alignment, and paste behavior to RTL.  
  Recommended for use **inside the draw.io desktop application or offline versions** via **Extras > Configuration**.

- `draw.ioRTL.js`  
  A simpler JSON configuration file for RTL styling, without paste direction fixes.

- `RTLplugin.js`  
  A JavaScript plugin for draw.io that automatically applies the RTL configuration (including paste direction fixes) when loaded.  
  Recommended for use **when working with draw.io in a web browser**, allowing dynamic loading without manual configuration.

---

## How to Use

### Using the Configuration File

1. Open **draw.io** desktop or offline app.
2. Go to **Extras** > **Configuration**.
3. Paste the entire content of `draw.io_rtl_configuration_with_PASTE_FIXED.js` (or `draw.ioRTL.js` for simpler needs).
4. Save and close.
5. All text input will be properly aligned and formatted for RTL usage.

---

### Using the RTL Plugin (`RTLplugin.js`)

1. Open **draw.io** in your web browser.
2. Go to **Extras** > **Plugins** > **Load Plugin...**.
3. Upload the `RTLplugin.js` file.
4. The plugin will automatically apply the RTL settings including paste direction enforcement.
5. Enjoy seamless RTL Hebrew text editing without manual configuration.

---

## Recommendations

- If you primarily use the **desktop/offline draw.io application**, using the **configuration file** method is simpler and more stable.
- If you mainly use **draw.io in a browser**, the **plugin** offers a flexible and easy way to enable RTL support without altering global settings.

---

## Support and Contributions

If you find issues or want to contribute improvements, please open an issue or a pull request.

---

**Note:** All files are designed to improve Hebrew text handling in draw.io, including fonts, alignment, spacing, and right-to-left text direction — especially fixing paste behavior which is common with Hebrew text input.
