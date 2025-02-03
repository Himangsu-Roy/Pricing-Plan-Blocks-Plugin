import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  Button,
  __experimentalInputControl as InputControl,
  TextControl,
  SelectControl,
  CheckboxControl,
  __experimentalSpacer as Spacer,
} from "@wordpress/components";

import { purposeTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";
import { useState } from "@wordpress/element";

// import {
//   Icon,
//   more,
//   arrowLeft,
//   arrowRight,
//   arrowUp,
//   arrowDown,
// } from "@wordpress/icons";

const General = ({
  attributes,
  setAttributes,
  selectedFeatureIndex,
  device,
}) => {
  const { plans } = attributes;
  // const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);

  // Function to delete a plan
  const deletePlan = (index) => {
    const updatedPlans = plans.filter((_, i) => i !== index);
    setAttributes({ plans: updatedPlans });
  };

  // Function to duplicate a plan
  const duplicatePlan = (plan, index) => {
    const newPlan = [
      ...plans.slice(0, index + 1),
      { ...plan },

      ...plans.slice(index + 1),
    ];
    setAttributes({ plans: newPlan });
  };

  // Function to add a new plan
  const addPlan = () => {
    const newCard = {
      ...plans[0],
    };

    setAttributes({ plans: [...plans, newCard] });
  };

  // Function to handle changes to each plan's attributes
  const updatePlan = (index, newPlanData) => {
    const updatedPlans = [...plans];
    updatedPlans[index] = { ...updatedPlans[index], ...newPlanData };
    setAttributes({ plans: updatedPlans });
  };

  // Function to add an extra feature to a plan's features array
  const addExtraFeature = (index) => {
    const newFeature = { label: "", value: "" }; // Add default empty feature
    const updatedPlans = [...plans];
    updatedPlans[index].features.push(newFeature); // Add to the features array
    setAttributes({ plans: updatedPlans });
  };

  // Function to update a feature in the features array
  const updateFeature = (index, featureIndex, newFeature) => {
    const updatedPlans = [...plans];
    updatedPlans[index].features[featureIndex] = newFeature;
    setAttributes({ plans: updatedPlans });
  };

  // Function to delete a feature from the features array
  const deleteFeature = (index, featureIndex) => {
    const updatedPlans = [...plans];
    updatedPlans[index].features.splice(featureIndex, 1);
    setAttributes({ plans: updatedPlans });
  };

  const togglePopular = (index) => {
    const updatedPlans = [...plans];
    updatedPlans[index].popular = !updatedPlans[index].popular;
    setAttributes({ plans: updatedPlans });
  };

  return (
    <>
      {plans.map(
        (plan, index) => (
          console.log(plan.popular, "popular"),
          (
            <PanelBody
              key={index}
              className="bPlPanelBody"
              title={__(`${plan.planTitle}`, "b-blocks")}
              initialOpen={false}
            >
              {/* Plan Settings */}
              <div className="plan-settings">
                <TextControl
                  label="Plan Title"
                  value={plan.planTitle}
                  onChange={(value) => updatePlan(index, { planTitle: value })}
                />
                <TextControl
                  label="Price"
                  value={plan.price}
                  onChange={(value) => updatePlan(index, { price: value })}
                />
                <SelectControl
                  label="Duration"
                  value={plan.monthLabel}
                  options={[
                    { label: "Monthly", value: "/ Month" },
                    { label: "Yearly", value: "/ Year" },
                  ]}
                  onChange={(value) => updatePlan(index, { monthLabel: value })}
                />
                {/* <TextControl
              label="Plan Icon"
              value={plan.icon}
              onChange={(value) => updatePlan(index, { icon: value })}
            /> */}
                <TextControl
                  label="Save Label"
                  value={plan.discountLabel}
                  onChange={(value) =>
                    updatePlan(index, { discountLabel: value })
                  }
                />

                {/* Render Feature Settings */}
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex}>
                    <TextControl
                      label={`Feature Name ${featureIndex + 1}`}
                      value={feature.label}
                      onChange={(value) =>
                        updateFeature(index, featureIndex, {
                          ...feature,
                          label: value,
                        })
                      }
                    />
                    <TextControl
                      label={`Feature ${featureIndex + 1}`}
                      value={feature.value}
                      onChange={(value) =>
                        updateFeature(index, featureIndex, {
                          ...feature,
                          value: value,
                        })
                      }
                    />
                  </div>
                ))}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {/* Add Extra Feature Button */}
                  <Button
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    variant="primary"
                    onClick={() => addExtraFeature(index)}
                  >
                    Add Extra Feature
                  </Button>

                  {/* Delete Feature button */}
                  {/* <Button
              isDestructive
              onClick={() => deleteFeature(index, selectedFeatureIndex)}
            >
              Delete Feature
            </Button> */}

                  {
                    // Check if selectedFeatureIndex is not null and matches the current plan index
                    selectedFeatureIndex !== null && (
                      <Button
                        variant="primary"
                        isDestructive
                        // onClick={() => deleteFeature(index, selectedFeatureIndex)}
                        onClick={() => {
                          const deleteFeature = plan.features.filter(
                            (feature, featureIndex) =>
                              featureIndex !== selectedFeatureIndex
                          );
                          // updatePlan(selectedFeatureIndex, {
                          //   features: deleteFeature,
                          // });
                          setAttributes({
                            plans: [
                              ...plans.slice(0, index),
                              { ...plan, features: deleteFeature },
                              ...plans.slice(index + 1),
                            ],
                          });
                        }}
                      >
                        Delete Feature
                      </Button>
                    )
                  }
                </div>

                <Spacer />
                {/* Buy Now link */}
                <InputControl
                  label={`${plan.buyNowLabel} Link`}
                  value={plan.buyNowLink}
                  onChange={(value) => updatePlan(index, { buyNowLink: value })}
                />
              </div>

              <Spacer />

              <InputControl
                label="Buy Now Label"
                value={plan.buyNowLabel}
                onChange={(value) => updatePlan(index, { buyNowLabel: value })}
              />

              <Spacer />

              {/* Badge Lavel */}
              <InputControl
                label="Badge Label"
                value={plan.badgeLabel}
                onChange={(value) => updatePlan(index, { badgeLabel: value })}
              />

              <Spacer />

              {/* Is Popular */}
              <CheckboxControl
                label={`Is ${plan.badgeLabel} `}
                checked={plan.badge}
                onChange={() => {
                  setAttributes({
                    plans: [
                      ...plans.slice(0, index),
                      { ...plan, badge: !plan.badge },
                      ...plans.slice(index + 1),
                    ],
                  });
                }}
              />

              {/* Buttons */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                  isDestructive
                  variant="primary"
                  onClick={() => deletePlan(index)}
                >
                  Delete Plan
                </Button>
                <Button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                  variant="primary"
                  isSecondary
                  onClick={() => duplicatePlan(plan, index)}
                >
                  Duplicate Plan
                </Button>
              </div>
            </PanelBody>
          )
        )
      )}

      {/* Add Plan */}

      <Button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        variant="primary"
        onClick={addPlan}
      >
        Add Plan
      </Button>
    </>
  );
};

export default General;
