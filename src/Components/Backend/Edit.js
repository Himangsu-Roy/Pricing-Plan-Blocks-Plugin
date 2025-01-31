import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import PricingTable from "../PricingTable/PricingTable";
import { useState } from "@wordpress/element";
// import {
//   __experimentalSpacer as Spacer,
//   Flex,
//   FlexItem,
//   FlexBlock,
//   ExternalLink,
// } from "@wordpress/components";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { purposeType } = attributes;
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);

  return (
    <>
      <Settings {...{ attributes, setAttributes, selectedFeatureIndex }} />

      <div {...useBlockProps()} id={`bBlocksPricingTable-${clientId}`}>
        <Style attributes={attributes} id={`bBlocksPricingTable-${clientId}`} />

        <PricingTable
          setSelectedFeatureIndex={setSelectedFeatureIndex}
          attributes={attributes}
          setAttributes={setAttributes}
        />
      </div>
    </>
  );
};
export default Edit;
