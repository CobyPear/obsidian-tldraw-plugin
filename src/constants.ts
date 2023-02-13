export const ICON_NAME = "tldraw-icon";
// backup - use dice icon
// export const TLDRAW_ICON = "dice";
// uses the icon_flat_white.svg and https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Transformations#scaling
export const TLDRAW_ICON = `<g transform="scale(0.2)"><path fill-rule="evenodd" clip-rule="evenodd" d="M53.8947 0C24.1295 0 0 25.1901 0 56.2637V455.736C0 486.81 24.1295 512 53.8947 512H458.105C487.871 512 512 486.81 512 455.736V56.2637C512 25.1901 487.871 0 458.105 0H53.8947ZM285.574 177.929C294.032 169.305 298.261 158.806 298.261 146.432C298.261 134.059 294.032 123.56 285.574 114.936C277.115 106.312 266.818 102 254.682 102C242.179 102 231.698 106.312 223.239 114.936C214.781 123.56 210.552 134.059 210.552 146.432C210.552 158.806 214.781 169.305 223.239 177.929C231.698 186.553 242.179 190.865 254.682 190.865C266.818 190.865 277.115 186.553 285.574 177.929ZM222.688 270.652C214.229 279.276 210 289.775 210 302.149C210 313.772 213.861 323.521 221.584 331.395C229.307 339.269 236.846 343.394 244.201 343.769C247.143 343.769 248.43 345.269 248.063 348.268C246.959 355.018 244.569 361.579 240.891 367.954C237.214 374.328 232.617 379.577 227.101 383.702C217.171 391.951 215.332 399.075 221.584 405.074C228.204 411.449 236.662 411.636 246.959 405.637C265.715 395.138 280.057 379.952 289.987 360.08C300.284 340.207 303.961 320.147 301.019 299.899C299.548 289.025 294.4 279.276 285.574 270.652C276.748 261.653 266.45 257.154 254.682 257.154C242.179 257.154 231.514 261.653 222.688 270.652Z" fill="currentColor" /></g>`;

export const VIEW_TYPE_TLDRAW = "tldraw-editor";
export const VIEW_TYPE_TLDRAW_EMBED = "tldraw-embed-view";

export const CREATE_NEW = "New Tldraw drawing";

// TODO: use non-deprecated option: https://developer.mozilla.org/en-US/docs/web/api/navigator/platform#browser_compatibility
export const isDarwin = /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
export const CTRL_OR_CMD = isDarwin ? "metaKey" : "ctrlKey";

// use icons from https://lucide.dev/
export const SAVE_DISK_ICON = "save"

export const FILENAME_DESC =
	"<p>Date and time format is from <a" +
	" href='https://momentjs.com/docs/#/displaying/format/'>" +
	"moment js</a></p>";
export const FILENAME_SAMPLE = "Filename for a new drawing is: ";
