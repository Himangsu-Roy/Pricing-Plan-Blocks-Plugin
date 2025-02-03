import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, URLInput } from "@wordpress/block-editor";
import { Button, PanelBody } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

const PricingTable = ({
  attributes,
  setAttributes,
  setSelectedFeatureIndex,
}) => {
  const { plans } = attributes;

  // Function to handle changes to each plan's attributes
  const updatePlan = (index, newPlanData) => {
    const updatedPlans = [...plans];
    updatedPlans[index] = { ...updatedPlans[index], ...newPlanData };
    setAttributes({ plans: updatedPlans });
  };

  const toggleBadge = (index, value) => {
    const updatedPlans = [...plans];
    updatedPlans[index] = { ...updatedPlans[index], badge: value };
    setAttributes({ plans: updatedPlans });
  };

  //
  const handlePreviewClick = (e) => {
    e.preventDefault();
    plans.map((plan, index) => {
      if (plan.buyNowLink) {
        wp.data
          .dispatch("core/notices")
          .createInfoNotice(`Link: ${plan.buyNowLink}`, {
            isDismissible: true,
            type: "snackbar",
          });

        <a href={plan.buyNowLink} target="_blank" rel="noreferrer"></a>;
      }
    });
  };

  return (
    <>
      <body style={{ background: "#f0f0f1" }}>
        <div className="container">
          {plans.map((plan, index) => (
            <div key={index} className="column">
              <div
                className={`pricing-card pricing-card-${index}  basic`}
                // style={{ backgroundColor: plan.backgroundColor }}
              >
                {plan.badge && (
                  <RichText
                    tagName="div"
                    className={`badge badge-${index}`}
                    value={plan.badgeLabel}
                    onChange={(value) => {
                      updatePlan(index, { badgeLabel: value });
                      if (value.length === 0) {
                        toggleBadge(index, true);
                      }
                    }}
                    placeholder={__("Badge", "b-blocks")}
                  />
                )}

                {/* <RichText
                  tagName="div"
                  className="badge"
                  value={plan.badge}
                  onChange={(value) => updatePlan(index, { badge: value })}
                  placeholder={__("Badge", "b-blocks")}
                /> */}
                {/* <div className="popular">POPULAR</div> */}
                <div className={`pricing-header pricing-header-${index}`}>
                  {/* <span className="plan-title">
                    {plan.planTitle}
                    <span className="plan-icon">{plan.icon}</span>
                  </span> */}
                  <RichText
                    tagName="span"
                    className={`plan-title plan-title-${index}`}
                    value={plan.planTitle}
                    onChange={(value) =>
                      updatePlan(index, { planTitle: value })
                    }
                    placeholder={__("Plan Title", "b-blocks")}
                  />
                  {/* <span className="plan-icon">{plan.icon}</span> */}

                  <div className={`price-circle price-circle-${index}`}>
                    <span className="price-title">
                      {/* <small>{plan.currencySymbol}</small> */}
                      <RichText
                        tagName="small"
                        value={plan.currencySymbol}
                        onChange={(value) =>
                          updatePlan(index, {
                            currencySymbol: value,
                          })
                        }
                        placeholder={__("Currency Symbol", "b-blocks")}
                      />

                      {/* <span>{plan.price}</span> */}
                      <RichText
                        tagName="span"
                        value={plan.price}
                        onChange={(value) =>
                          updatePlan(index, { price: value })
                        }
                        placeholder={__("Price", "b-blocks")}
                      />
                    </span>

                    {/* <span className="info">
                      {plan.duration === "monthly" ? "/ Month" : "/ Year"}
                    </span> */}
                    <RichText
                      tagName="span"
                      className="info"
                      value={plan.monthLabel}
                      onChange={(value) =>
                        updatePlan(index, { monthLabel: value })
                      }
                      placeholder={__("Duration", "b-blocks")}
                    />
                  </div>
                </div>
                <div className="badge-box">
                  <div className={`discount-badge discount-badge-${index}`}>
                    <RichText
                      tagName="span"
                      value={plan.discountLabel}
                      onChange={(value) =>
                        updatePlan(index, { discountLabel: value })
                      }
                      placeholder={__("Discount Label", "b-blocks")}
                    />
                    <span>&nbsp;</span>
                    {/* <RichText
                      tagName="span"
                      value={plan.discount}
                      onChange={(value) =>
                        updatePlan(index, { discount: value })
                      }
                      placeholder={__("Discount", "b-blocks")}
                    /> */}
                  </div>
                </div>
                <ul className={`feature-list feature-list-${index}`}>
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      onClick={() => setSelectedFeatureIndex(featureIndex)}
                      key={featureIndex}
                    >
                      {/* <strong>{feature.value}</strong> {feature.label} */}
                      <RichText
                        className={`feature-value feature-value-${index}`}
                        tagName="strong"
                        value={feature.value}
                        onChange={(value) =>
                          updatePlan(index, {
                            features: [
                              ...plan.features.slice(0, featureIndex),
                              { ...feature, value: value },
                              ...plan.features.slice(featureIndex + 1),
                            ],
                          })
                        }
                        placeholder={__("Feature Value", "b-blocks")}
                      />
                      <span>&nbsp;</span>
                      <RichText
                        className={`feature-label feature-label-${index}`}
                        tagName="span"
                        value={feature.label}
                        onChange={(value) =>
                          updatePlan(index, {
                            features: [
                              ...plan.features.slice(0, featureIndex),
                              { ...feature, label: value },
                              ...plan.features.slice(featureIndex + 1),
                            ],
                          })
                        }
                        placeholder={__("Feature Label", "b-blocks")}
                      />
                    </li>
                  ))}
                </ul>
                <div className="buy-button-box">
                  <a
                    href={plan.buyNowLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`buy-now hover-color-${index} buy-now-${index}`}
                    // onClick={handlePreviewClick}
                  >
                    <RichText
                      className="buttonText"
                      tagName="span"
                      value={plan.buyNowLabel}
                      onChange={(value) =>
                        updatePlan(index, { buyNowLabel: value })
                      }
                      placeholder={__("Buy Now Label", "b-blocks")}
                    />
                  </a>
                </div>
                {/* <div>
                  <div className="buy-now-preview">
                    {plan.buyNowLabel}
                    <span className="link-url">
                      (Link: {plan.buyNowLink || "Not set"})
                    </span>
                  </div>
                  <URLInput
                    value={plan.buyNowLink}
                    onChange={(url) => setAttributes({ buyNowLink: url })}
                  />
                </div> */}
                {/* <div
                  className="buy-now-preview"
                  onClick={handlePreviewClick}
                  role="button"
                  tabIndex={0}
                >
                  Buy Now
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </body>
    </>
  );
};

export default PricingTable;
