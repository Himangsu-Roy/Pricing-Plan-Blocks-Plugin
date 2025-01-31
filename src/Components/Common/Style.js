// import { getColorsCSS } from '../../../../Components/utils/getCSS';
import { getTypoCSS } from "../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { plans, alignment } = attributes;

  // if (alignment == "center") {
  //   setAttributes({ alignment: "center" });
  // } else if (alignment == "right") {
  //   setAttributes({ alignment: "right" });
  // } else {
  //   setAttributes({ alignment: "left" });
  // }

  const mainSl = `#${id}`;
  const planTitle = `${mainSl} .container .column .pricing-card .pricing-header .plan-title`;
  const pricingTitle = `${mainSl} .container .column .pricing-card .pricing-header .price-circle .price-title`;
  const currencySymbol = `${mainSl} .container .column .pricing-card .pricing-header .price-circle small`;
  const duration = `${mainSl} .container .column .pricing-card .pricing-header .price-circle .info`;
  const popular = `${mainSl} .container .column .pricing-card .popular`;
  const cardBgColor = `${mainSl} .container .column .pricing-card .pricing-header`;
  const priceCircleBgColor = `${mainSl} .container .column .pricing-card .pricing-header .price-circle`;
  const priceCircleBorderColor = `${mainSl} .container .column .pricing-card .pricing-header .price-circle`;
  const badgeBox = `${mainSl} .container .column .pricing-card .badge-box .badge`;


  // ${blockSl} p{
  // 	${getColorsCSS(colors)}
  // }

  // ${getTypoCSS("", typography)?.googleFontLink}
  // ${getTypoCSS(blockSl, typography)?.styles}

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		
		
		
		${planTitle} {
			font-size: 24px;
      color: white;
		}

    ${pricingTitle}{
      font-weight: bold;
      font-size: 28px;
    }
   
    ${currencySymbol}{
      font-size: 18px;
    }

    ${duration} {
      font-size: 12px;
      font-weight: bold;
      color: gray;
    }

    ${popular}{
      background-color: #eb3b5a;
      color: white;
      font-size: 12px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      background-color: #eb3b5a;   
    }

    ${badgeBox}{
      border: 1px solid #4b7bec;
      color: #4b7bec;
    }
		

	`,
      }}
    />
  );
};
export default Style;
