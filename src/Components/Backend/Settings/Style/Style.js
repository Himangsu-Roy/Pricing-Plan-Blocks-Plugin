import { __ } from "@wordpress/i18n";
import {
  __experimentalGrid as Grid,
  PanelBody,
  RangeControl,
} from "@wordpress/components";
import {
  ColorControl,
  ColorsControl,
  HexColorControl,
  ShadowControl,
  Typography,
  __experimentalDivider as Divider,
} from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";

const Style = ({ attributes, setAttributes }) => {
  const { plans } = attributes;

  // const updateTypography = (index, key, value) => {
  //   const updatedPlansTypo = [...plans];
  //   updatedPlansTypo[index].typography[key] = value;

  //   setAttributes({ plans: updatedPlansTypo });
  // };

  // const updateTypography = (index, key, value) => {
  //   const updatedPlansTypo = [...plans];
  //   const updatedTypography = { ...updatedPlansTypo[index].typography };
  //   updatedTypography[key] = value;
  //   updatedPlansTypo[index] = {
  //     ...updatedPlansTypo[index],
  //     typography: updatedTypography,
  //   };

  //   setAttributes({ plans: updatedPlansTypo });
  // };

  const updateTypography = (index, key, value) => {
    const updatedPlans = [...plans];
    const updatedTypography = { ...updatedPlans[index].typography };

    updatedTypography[key] = value;

    updatedPlans[index] = {
      ...updatedPlans[index],
      typography: updatedTypography,
    };

    setAttributes({ plans: updatedPlans });
  };

  const updateShadow = (index, key, value) => {
    const updatedPlans = [...plans];
    const updatedShadow = { ...updatedPlans[index].shadow };

    updatedShadow[key] = value;

    updatedPlans[index] = {
      ...updatedPlans[index],
      shadow: updatedShadow,
    };

    setAttributes({ plans: updatedPlans });
  };

  return (
    <>
      {plans?.map((plan, index) => {
        const {
          shadow,
          typography,
          cardBorderRadius,
          buttonBorderRadius,
          gap,
          saveRadius,
        } = plan;
        const { cardShadow, buttonShadow, badgeShadow } = shadow;
        const {
          planTitle,
          currencySymbol,
          money,
          duration,
          discountBadge,
          featureList,
          button,
          badge,
        } = typography;

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
                value={planTitle}
                // value={plans[index].typography.planTitle.fontSize.desktop}
                onChange={(value) =>
                  updateTypography(index, "planTitle", value)
                }
              />

              <Typography
                label={__("Price Title Typography", "b-blocks")}
                value={money}
                onChange={(val) => {
                  // setAttributes({
                  //   plans: updateData(plans, val, index, "typography", "money"),
                  // });
                  updateTypography(index, "money", val);
                }}
              />
              <Typography
                label={__("Currency Symbol Typography", "b-blocks")}
                value={currencySymbol}
                onChange={(val) => {
                  // setAttributes({
                  //   plans: updateData(
                  //     plans,
                  //     val,
                  //     index,
                  //     "typography",
                  //     "dollar"
                  //   ),
                  // });
                  updateTypography(index, "currencySymbol", val);
                }}
              />
              <Typography
                label={__("Duration Typography", "b-blocks")}
                value={duration}
                onChange={(val) => {
                  // setAttributes({
                  //   plans: updateData(plans, val, index, "typography", "month"),
                  // });
                  updateTypography(index, "duration", val);
                }}
              />
              <Typography
                label={__("Discount Badge Typography", "b-blocks")}
                value={discountBadge}
                onChange={(val) => {
                  // setAttributes({
                  //   plans: updateData(plans, val, index, "typography", "month"),
                  // });
                  updateTypography(index, "discountBadge", val);
                }}
              />

              <Typography
                label={__("Badge Typography", "b-blocks")}
                value={badge}
                onChange={(val) => {
                  // setAttributes({
                  //   plans: updateData(
                  //     plans,
                  //     val,
                  //     index,
                  //     "typography",
                  //     "popular"
                  //   ),
                  // });
                  updateTypography(index, "badge", val);
                }}
              />
              <Typography
                label={__(" Features List Typography", "b-blocks")}
                value={featureList}
                onChange={(val) => {
                  // setAttributes({
                  //   plans: updateData(
                  //     plans,
                  //     val,
                  //     index,
                  //     "typography",
                  //     "featureList"
                  //   ),
                  // });
                  updateTypography(index, "featureList", val);
                }}
              />
              <Typography
                label={__(" Button Typography", "b-blocks")}
                value={button}
                onChange={(val) => {
                  // setAttributes({
                  //   plans: updateData(
                  //     plans,
                  //     val,
                  //     index,
                  //     "typography",
                  //     "button"
                  //   ),
                  // });
                  updateTypography(index, "button", val);
                }}
              />
            </PanelBody>
            <PanelBody
              className="bPlPanelBody"
              title={__("Colors", "b-blocks")}
              initialOpen={false}
            >
              <ColorControl
                label={__("Card Header Background Color")}
                value={plan.cardHeaderBackgroundColor}
                onChange={(newColor) =>
                  setAttributes({
                    plans: updateData(
                      plans,
                      newColor,
                      index,
                      "cardHeaderBackgroundColor"
                    ),
                  })
                }
                defaultColor="#4B7BEC"
              />

              <Divider />
              
              <HexColorControl
                label={__("Card Body Background Color")}
                value={plan.cardBodyBackgroundColor}
                onChange={(newColor) =>
                  setAttributes({
                    plans: updateData(
                      plans,
                      newColor,
                      index,
                      "cardBodyBackgroundColor"
                    ),
                  })
                }
                // defaultColor="#fff"
              />

              <Divider/>

              <HexColorControl
                label={__("Discount Color")}
                value={plan.discountColor}
                onChange={(newColor) =>
                  setAttributes({
                    plans: updateData(plans, newColor, index, "discountColor"),
                  })
                }
                defaultColor="#4b7bec"
                disableAlpha={true}
              />
              {/* <ColorControl
                label={__("Button Background Color")}
                value={plan.buttonBg}
                onChange={(newColor) =>
                  setAttributes({
                    plans: updateData(plans, newColor, index, "buttonBg"),
                  })
                }
                defaultColor="#ffffff"
              /> */}
              <ColorsControl
                label={__("Button Gradient Background Color")}
                value={plan.buttonBg}
                onChange={(newColor) => {
                  console.log(newColor, "new color");
                  setAttributes({
                    plans: updateData(plans, newColor, index, "buttonBg"),
                  });
                }}
                defaults={{
                  color: "#333",
                  bgType: "solid",
                  bg: "",
                  gradient: "linear-gradient(to left, #a55eea, #45aaf2)",
                }}
              />
              <HexColorControl
                label={__("Button Hover Background Color")}
                value={plan.buttonHoverBg}
                onChange={(newColor) =>
                  setAttributes({
                    plans: updateData(plans, newColor, index, "buttonHoverBg"),
                  })
                }
                defaultColor="#ffffff"
              />

              <HexColorControl
                label={__("Button Text Color")}
                value={plan.buttonColor}
                onChange={(newColor) =>
                  setAttributes({
                    plans: updateData(plans, newColor, index, "buttonColor"),
                  })
                }
              />

              <ColorControl
                label={__("Badge Background Color")}
                value={plan.badgeBg}
                onChange={(newColor) =>
                  setAttributes({
                    plans: updateData(plans, newColor, index, "badgeBg"),
                  })
                }
                defaultColor="#ffffff"
              />
              <HexColorControl
                label={__("Badge Text Color")}
                value={plan.badgeColor}
                onChange={(newColor) =>
                  setAttributes({
                    plans: updateData(plans, newColor, index, "badgeColor"),
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
                  // setAttributes({
                  //   plans: updateData(
                  //     plans,
                  //     newShadow,
                  //     index,
                  //     "shadow",
                  //     "cardShadow"

                  //   ),
                  // });
                  updateShadow(index, "cardShadow", newShadow);
                }}
                type="cardShadow"
                // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
                defaults={[
                  {
                    hOffset: "0px",
                    vOffset: "4px",
                    blur: "8px",
                    spreed: "0px",
                    color: "rgba(0, 0, 0, 0.4)",
                    isInset: false,
                  },
                ]}
              />
              <ShadowControl
                label="Button Shadow"
                value={buttonShadow}
                onChange={(newShadow) => {
                  // setAttributes({
                  //   plans: updateData(
                  //     plans,
                  //     {
                  //       ...plans[index],
                  //       shadow: {
                  //         ...plans[index].shadow,
                  //         buttonShadow: newShadow,
                  //       },
                  //     },
                  //     index
                  //   ),
                  // });
                  updateShadow(index, "buttonShadow", newShadow);
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
              />
              {plan.badge && (
                <ShadowControl
                  label="Badge Shadow"
                  value={badgeShadow}
                  onChange={(newShadow) => {
                    // setAttributes({
                    //   plans: updateData(
                    //     plans,
                    //     {
                    //       ...plans[index],
                    //       shadow: {
                    //         ...plans[index].shadow,
                    //         badgeShadow: newShadow,
                    //       },
                    //     },
                    //     index
                    //   ),
                    // });
                    updateShadow(index, "badgeShadow", newShadow);
                  }}
                  type="badgeShadow"
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
              )}
            </PanelBody>

            <PanelBody
              className="bPlPanelBody"
              title={__("Card Layout", "b-blocks")}
              initialOpen={false}
            >
              <RangeControl
                label={__("Card Radius", "my-block")}
                value={cardBorderRadius}
                onChange={(newRadius) =>
                  setAttributes({
                    plans: updateData(
                      plans,
                      newRadius,
                      index,
                      "cardBorderRadius"
                    ),
                  })
                }
                min={0}
                max={100}
              />
              <RangeControl
                label={__("Badge Radius", "my-block")}
                value={saveRadius}
                onChange={(newRadius) =>
                  setAttributes({
                    plans: updateData(plans, newRadius, index, "saveRadius"),
                  })
                }
                min={0}
                max={100}
              />
              <RangeControl
                label={__("Button Radius", "my-block")}
                value={buttonBorderRadius}
                onChange={(newRadius) =>
                  setAttributes({
                    plans: updateData(
                      plans,
                      newRadius,
                      index,
                      "buttonBorderRadius"
                    ),
                  })
                }
                min={0}
                max={100}
              />
              <RangeControl
                label={__("Card Between Gap", "my-block")}
                value={gap}
                onChange={(newRadius) =>
                  setAttributes({
                    plans: updateData(plans, newRadius, index, "gap"),
                  })
                }
                min={0}
                max={100}
              />
            </PanelBody>
          </PanelBody>
        );
      })}
    </>
  );
};

export default Style;
