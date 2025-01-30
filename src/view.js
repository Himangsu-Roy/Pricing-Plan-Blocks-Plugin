import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import BlockName from "./Components/Frontend/BlockName";
import PricingTable from "./Components/PricingTable/PricingTable";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-b-blocks-pricing-table"
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        <PricingTable attributes={attributes} />
      </>
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
