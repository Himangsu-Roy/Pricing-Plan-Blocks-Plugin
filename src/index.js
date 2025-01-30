import { registerBlockType } from "@wordpress/blocks";

import "./editor.scss";
import metadata from "./block.json";
import Edit from "./Components/Backend/Edit";
import { blockIcon } from "./utils/icons";

registerBlockType(metadata, {
  icon: "editor-table",
  edit: Edit,
});
