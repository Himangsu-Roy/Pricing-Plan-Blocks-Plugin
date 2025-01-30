import { __ } from "@wordpress/i18n";
import { __experimentalGrid as Grid, PanelBody } from "@wordpress/components";
import { ColorsControl, Typography } from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const { typography } = attributes;
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Purpose", "b-blocks")}
        initialOpen={false}
      >
        <Typography
          label={__("", "b-blocks")}
          value={typography}
          onChange={(val) => setAttributes({ typography: val })}
          defaults={{ fontSize: 16, lineHeight: 1 }}
        />
      </PanelBody>
    </>
  );
};

export default Style;
