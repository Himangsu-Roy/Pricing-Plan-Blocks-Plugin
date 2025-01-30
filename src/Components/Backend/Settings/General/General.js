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
import { Typography } from "../../../../../../bpl-tools/Components";

// import {
//   Icon,
//   more,
//   arrowLeft,
//   arrowRight,
//   arrowUp,
//   arrowDown,
// } from "@wordpress/icons";

// updateData("planTitle", value, index, plans, setAttributes)

const General = ({ attributes, setAttributes, selectedFeatureIndex }) => {
  const { plans } = attributes;
  // const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);

  console.log(selectedFeatureIndex, "selectedFeatureIndex");

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
    const newPlan = {
      planTitle: "New Plan",
      price: "0.00",
      discount: "0%",
      duration: "monthly",
      icon: "star",
      backgroundColor: "#ffffff",
      buttonBg: "#B1C5A4",
      buttonColor: "black",
      buttonHoverBg: "#B1C5A4",
      buttonHoverColor: "black",
      features: [
        { label: "Domain", value: "0" },
        { label: "Disk Space", value: "0 GB" },
        { label: "Bandwidth", value: "0 GB" },
        { label: "Free Domain", value: "0" },
        { label: "FTP Account", value: "0" },
      ],
      currencySymbol: "$",
      monthLabel: "/ Month",
      saveLabel: "Save",
      buyNowLabel: "BUY NOW",
      buyNowLink: "https://example.com",
      popular: false,
    };

    setAttributes({ plans: [...plans, newPlan] });
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
    updatedPlans[index].features[featureIndex] = newFeature; // Update specific feature
    setAttributes({ plans: updatedPlans });
  };

  // Function to delete a feature from the features array
  const deleteFeature = (index, featureIndex) => {
    const updatedPlans = [...plans];
    updatedPlans[index].features.splice(featureIndex, 1); // Remove feature from array
    setAttributes({ plans: updatedPlans });
  };

  const togglePopular = (index) => {
    const updatedPlans = [...plans];
    updatedPlans[index].popular = !updatedPlans[index].popular; // Toggle the popular flag
    setAttributes({ plans: updatedPlans });
    console.log(!updatedPlans[index].popular, "popular");
  };

  return (
    <>
      {plans.map((plan, index) => (
        <PanelBody
          key={index}
          className="bPlPanelBody"
          title={__(`${plan.planTitle} ${index + 1}`, "b-blocks")}
          initialOpen={false}
        >
          {/* <InputControl
            label="Plan Title"
            value={plan.planTitle}
            onChange={(value) =>
             
              updatePlan(index, { planTitle: value })
            }
          />
          <InputControl
            label="Price"
            value={plan.price}
            onChange={(value) =>
              
              updatePlan(index, { price: value })
            }
          />
          <InputControl
            label="Duration"
            value={plan.duration}
            onChange={(value) =>
              
              updatePlan(index, { duration: value })
            }
          />
          <InputControl
            label="Plan Icon"
            value={plan.icon}
            onChange={(value) =>
              
              updatePlan(index, { icon: value })
            }
          />
          <InputControl
            label="Plan Background Color"
            value={plan.backgroundColor}
            onChange={(value) =>
             
              updatePlan(index, { backgroundColor: value })
            }
          /> */}
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
              value={plan.duration}
              options={[
                { label: "Monthly", value: "monthly" },
                { label: "Yearly", value: "yearly" },
              ]}
              onChange={(value) => updatePlan(index, { duration: value })}
            />
            {/* <TextControl
              label="Plan Icon"
              value={plan.icon}
              onChange={(value) => updatePlan(index, { icon: value })}
            /> */}
            <TextControl
              label="Plan Background Color"
              value={plan.backgroundColor}
              onChange={(value) =>
                updatePlan(index, { backgroundColor: value })
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
                  label={`Feature Value ${featureIndex + 1}`}
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

          {/* Is Popular */}
          <CheckboxControl
            label="Is Popular"
            checked={plan.popular}
            onChange={() => togglePopular(index)}
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
      ))}

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
