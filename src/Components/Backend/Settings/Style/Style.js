import { __ } from "@wordpress/i18n";
import { __experimentalGrid as Grid, PanelBody } from "@wordpress/components";
import {
  ColorControl,
  ColorsControl,
  ShadowControl,
  Typography,
} from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";

const Style = ({ attributes, setAttributes }) => {
  const { plans } = attributes;
  console.log(plans, "typography");

  return (
    <>
      {plans?.map((plan, index) => {
        const { shadow } = plan;
        const { cardShadow, buttonShadow, popularShadow } = shadow;
        console.log(cardShadow, "card shadow");
        return (
          <PanelBody
            key={index}
            className="bPlPanelBody"
            title={__(`${plan.planTitle} Styles`, "b-blocks")}
            initialOpen={false}
          >
            <PanelBody
              className="bPlPanelBody"
              title={__("Typography", "b-blocks")}
              initialOpen={false}
            >
              <Typography
                label={__("Plan Title Typography", "b-blocks")}
                value={""}
                onChange={(val) => {
                  console.log(val);
                }}
                defaults={{ fontSize: 16, lineHeight: 1 }}
              />

              <Typography
                label={__("Price Title Typography", "b-blocks")}
                value={""}
                onChange={(val) => {
                  console.log(val);
                }}
                defaults={{ fontSize: 16, lineHeight: 1 }}
              />
              <Typography
                label={__("Currency Symbol Typography", "b-blocks")}
                value={""}
                onChange={(val) => {
                  console.log(val);
                }}
                defaults={{ fontSize: 16, lineHeight: 1 }}
              />
              <Typography
                label={__("Duration Typography", "b-blocks")}
                value={""}
                onChange={(val) => {
                  console.log(val);
                }}
                defaults={{ fontSize: 16, lineHeight: 1 }}
              />
              <Typography
                label={__("Popular Typography", "b-blocks")}
                value={""}
                onChange={(val) => {
                  console.log(val);
                }}
                defaults={{ fontSize: 16, lineHeight: 1 }}
              />
            </PanelBody>
            <PanelBody
              className="bPlPanelBody"
              title={__("Colors", "b-blocks")}
              initialOpen={false}
            >
              <ColorControl
                label={__("Card Background Color")}
                value={plan.backgroundColor}
                onChange={(newColor) =>
                  setAttributes({
                    plans: updateData(
                      plans,
                      newColor,
                      index,
                      "backgroundColor"
                    ),
                  })
                }
                defaultColor="#ffffff"
              />
              <ColorControl
                label={__("Button Background Color")}
                value={plan.buttonBg}
                onChange={(newColor) =>
                  setAttributes({
                    plans: updateData(plans, newColor, index, "buttonBg"),
                  })
                }
                defaultColor="#ffffff"
              />
              <ColorControl
                label={__("Button Hover Background Color")}
                value={plan.buttonHoverBg}
                onChange={(newColor) =>
                  setAttributes({
                    plans: updateData(plans, newColor, index, "buttonHoverBg"),
                  })
                }
                defaultColor="#ffffff"
              />

              <ColorControl
                label={__("Button Text Color")}
                value={plan.buttonHoverColor}
                onChange={(newColor) =>
                  setAttributes({
                    plans: updateData(
                      plans,
                      newColor,
                      index,
                      "buttonHoverColor"
                    ),
                  })
                }
                defaultColor="#ffffff"
              />
              <ColorControl
                label={__("Popular Background Color")}
                value={plan.popularBg}
                onChange={(newColor) =>
                  setAttributes({
                    plans: updateData(plans, newColor, index, "popularBg"),
                  })
                }
                defaultColor="#ffffff"
              />
            </PanelBody>
            <PanelBody
              className="bPlPanelBody"
              title={__("Box Shadow", "b-blocks")}
              initialOpen={false}
            >
              <ShadowControl
                label="Card Shadow"
                value={cardShadow}
                onChange={(newShadow) => {
                  setAttributes({
                    plans: updateData(
                      plans,
                      index,
                      newShadow,
                      "shadow",
                      "cardShadow"
                    ),
                  });
                }}
                type="cardShadow"
                defaults={[
                  {
                    hOffset: "0px",
                    vOffset: "0px",
                    blur: "0px",
                    spreed: "0px",
                    color: "#000000",
                    isInset: false,
                  },
                ]}
              />
              {/* <ShadowControl
                label="Button Shadow"
                value={buttonShadow}
                onChange={(newShadow) => {
                  setAttributes({
                    plans: updateData(
                      plans,
                      {
                        ...plans[index],
                        shadow: {
                          ...plans[index].shadow,
                          buttonShadow: newShadow,
                        },
                      },
                      index
                    ),
                  });
                }}
                type="buttonShadow"
                defaults={[
                  {
                    hOffset: "0px",
                    vOffset: "0px",
                    blur: "0px",
                    spreed: "0px",
                    color: "#000000",
                    isInset: false,
                  },
                ]}
              /> */}
              {/* {plan.popular && (
                <ShadowControl
                  label="Popular Shadow"
                  value={popularShadow}
                  onChange={(newShadow) => {
                    setAttributes({
                      plans: updateData(
                        plans,
                        {
                          ...plans[index],
                          shadow: {
                            ...plans[index].shadow,
                            popularShadow: newShadow,
                          },
                        },
                        index
                      ),
                    });
                  }}
                  type="popularShadow"
                  defaults={[
                    {
                      hOffset: "0px",
                      vOffset: "0px",
                      blur: "0px",
                      spreed: "0px",
                      color: "#000000",
                      isInset: false,
                    },
                  ]}
                />
              )} */}
            </PanelBody>
          </PanelBody>
        );
      })}
    </>
  );
};

export default Style;
