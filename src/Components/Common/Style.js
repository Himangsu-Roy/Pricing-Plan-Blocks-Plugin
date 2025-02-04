// import { getColorsCSS } from '../../../../Components/utils/getCSS';
import { getTypoCSS } from "../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id, device = "desktop" }) => {
  const { plans, alignment } = attributes;

  // Main nesting class
  const mainSl = `#${id}`;
  const cardGap = `${mainSl} .container`;
  const planTitleSl = `${mainSl} .container .column .pricing-card .pricing-header .plan-title`;
  const pricingTitle = `${mainSl} .container .column .pricing-card .pricing-header .price-circle .price-title`;
  const currencySymbol = `${mainSl} .container .column .pricing-card .pricing-header .price-circle small`;
  const priceDuration = `${mainSl} .container .column .pricing-card .pricing-header .price-circle .info`;
  const Badge = `${mainSl} .container .column`;

  // Colors
  const cardBgColor = `${mainSl} .container .column .pricing-card .pricing-header`;
  const cardBodyBgColor = `${mainSl} .container .column`;
  const cardHeaderBgColor = `${mainSl} .container .column .pricing-card`;
  // const pricingCardShadow = `${mainSl} .container .column .pricing-card`;
  const priceCircleBgColor = `${mainSl} .container .column .pricing-card .pricing-header .price-circle`;
  const priceCircleBorderColor = `${mainSl} .container .column .pricing-card .pricing-header .price-circle`;
  const discountBadgeBox = `${mainSl} .container .column .pricing-card .badge-box`;

  // Shadow
  const pricingCardShadow = `${mainSl} .container .column`;

  // layout
  const buttonLayout = `${mainSl} .container .column .pricing-card .buy-button-box`;

  // Typography
  const planTitleTypoSl = `${mainSl} .container .column .pricing-card .pricing-header`;
  const featureListTypo = `${mainSl} .container .column .pricing-card`;
  const badgeTypo = `${mainSl} .container .column`;
  const priceCircleTypo = `${mainSl} .container .column .pricing-card .pricing-header`;
  const buttonTypo = `${mainSl} .container .column`;

  // ${blockSl} p{
  // 	${getColorsCSS(colors)}
  // }

  // ${getTypoCSS("", typography)?.googleFontLink}
  // ${getTypoCSS(blockSl, typography)?.styles}

  const cardStyles = plans
    ?.map((styles, index) => {
      const {
        cardHeaderBackgroundColor,
        cardBodyBackgroundColor,
        badgeColor,
        shadow,
        buttonBg,
        buttonColor: buttonTextColor,
        buttonHoverBg,
        buttonHoverColor,
        typography,
        cardBorderRadius,
        buttonBorderRadius,
        badgeRadius,
        saveRadius,
        gap,
        badgeBg,
        discountColor,
        // buttonColor,
        badgePosition,
      } = styles;
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

      console.log(planTitle.fontSize, "plan font size");

      const { cardShadow, buttonShadow, badgeShadow } = shadow;

      // console.log(badgeRadius, "badgeRadius");
      console.log(badgeShadow, "badgeShadow");

      const { blur, color, hOffset, vOffset, isInset, spreed } = cardShadow[0];
      console.log(blur, "blur");

      const {
        blur: buttonBlur,
        color: buttonColor,
        hOffset: buttonHOffset,
        vOffset: buttonVOffset,
        isInset: buttonIsInset,
        spreed: buttonSpreed,
      } = buttonShadow[0];

      const {
        blur: popularBlur,
        color: popularColor,
        hOffset: popularHOffset,
        vOffset: popularVOffset,
        isInset: popularIsInset,
        spreed: popularSpreed,
      } = badgeShadow[0];

      //  box-shadow: ${
      //        isInset ? "inset " : ""
      //      } ${hOffset} ${vOffset} ${blur} ${spreed} ${color};

      // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);

      // ${cardBgColor} {
      //     background-color: ${cardHeaderBackgroundColor};
      //   }
      // ${planTitle} {
      //   font-size: 24px;
      //   color: white;
      // }

      //  ${getTypoCSS("", planTitleTypo)?.googleFontLink}
      // ${getTypoCSS(planTitle, planTitleTypo)?.styles}

      // .buy-now-${index}:hover {
      //     background-image: none !important;
      //     background-color: ${cardHeaderBackgroundColor} && ${buttonHoverBg};
      //     box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.4);
      //     color: ${buttonTextColor};
      //   }

      return `

       ${getTypoCSS("", planTitle)?.googleFontLink}
      ${getTypoCSS(planTitle, planTitle)?.styles}

     
      
       ${planTitleTypoSl} .plan-title-${index} {
        color: white;
        font-family: ${planTitle.fontFamily}, ${planTitle.fontCategory};
        font-size: ${planTitle.fontSize.desktop}px;
        font-style: ${planTitle.fontStyle};
        font-variant: ${planTitle.fontVariant};
        font-weight: ${planTitle.fontWeight};
        letter-spacing: ${planTitle.letterSpace};
        line-height: ${planTitle.lineHeight};
        text-decoration: ${planTitle.textDecoration};
        text-transform: ${planTitle.textTransform};
       }

        ${featureListTypo} .feature-list-${index} li{
        border-bottom: 1px solid #f2f2f2; //divider have to be use
        font-family: ${featureList.fontFamily}, ${featureList.fontCategory};
        font-size: ${featureList.fontSize.desktop}px;
        font-style: ${featureList.fontStyle};
        font-variant: ${featureList.fontVariant};
        font-weight: ${featureList.fontWeight};
        letter-spacing: ${featureList.letterSpace};
        line-height: ${featureList.lineHeight};
        text-decoration: ${featureList.textDecoration};
        text-transform: ${featureList.textTransform};
        
      }

      ${priceCircleTypo} .price-circle-${index} .price-title small{
        font-family: ${currencySymbol?.fontFamily}, ${
          currencySymbol?.fontCategory
        };
        font-size: ${currencySymbol?.fontSize?.desktop}px;
        font-style: ${currencySymbol?.fontStyle};
        font-variant: ${currencySymbol?.fontVariant};
        font-weight: ${currencySymbol?.fontWeight};
        letter-spacing: ${currencySymbol?.letterSpace};
        line-height: ${currencySymbol?.lineHeight};
        text-decoration: ${currencySymbol?.textDecoration};
        text-transform: ${currencySymbol?.textTransform};
      }

      ${priceCircleTypo} .price-circle-${index} .price-title span{
        font-family: ${money?.fontFamily}, ${money?.fontCategory};
        font-size: ${money?.fontSize?.desktop}px;
        font-style: ${money?.fontStyle};
        font-variant: ${money?.fontVariant};
        font-weight: ${money?.fontWeight};
        letter-spacing: ${money?.letterSpace};
        line-height: ${money?.lineHeight};
        text-decoration: ${money?.textDecoration};
        text-transform: ${money?.textTransform};
      }

      ${priceCircleTypo} .price-circle-${index} .info{
        font-family: ${duration?.fontFamily}, ${duration?.fontCategory};
        font-size: ${duration?.fontSize?.desktop}px;
        font-style: ${duration?.fontStyle};
        font-variant: ${duration?.fontVariant};
        font-weight: ${duration?.fontWeight};
        letter-spacing: ${duration?.letterSpace};
        line-height: ${duration?.lineHeight};
        text-decoration: ${duration?.textDecoration};
        text-transform: ${duration?.textTransform};
        color: gray;
      }

      ${badgeTypo} .pricing-card-${index} .badge{
        font-family: ${badge?.fontFamily}, ${badge?.fontCategory};
        font-size: ${badge?.fontSize?.desktop}px;
        font-style: ${badge?.fontStyle};
        font-variant: ${badge?.fontVariant};
        font-weight: ${badge?.fontWeight};
        letter-spacing: ${badge?.letterSpace};
        line-height: ${badge?.lineHeight};
        text-decoration: ${badge?.textDecoration};
        text-transform: ${badge?.textTransform};
        
      }
      ${buttonTypo} .pricing-card-${index} .buy-button-box .buttonText{
        font-family: ${button?.fontFamily}, ${button?.fontCategory};
        font-size: ${button?.fontSize?.desktop}px;
        font-style: ${button?.fontStyle};
        font-variant: ${button?.fontVariant};
        font-weight: ${button?.fontWeight};
        letter-spacing: ${button?.letterSpace};
        line-height: ${button?.lineHeight};
        text-decoration: ${button?.textDecoration};
        text-transform: ${button?.textTransform};
      }

      ${discountBadgeBox} .discount-badge-${index}{
        font-family: ${discountBadge?.fontFamily}, ${
          discountBadge?.fontCategory
        };
        font-size: ${discountBadge?.fontSize?.desktop}px;
        font-style: ${discountBadge?.fontStyle};
        font-variant: ${discountBadge?.fontVariant};
        font-weight: ${discountBadge?.fontWeight};
        letter-spacing: ${discountBadge?.letterSpace};
        line-height: ${discountBadge?.lineHeight};
        text-decoration: ${discountBadge?.textDecoration};
        text-transform: ${discountBadge?.textTransform};
      }

      
        .discount-badge{
          border: 1px solid ${discountColor};
          color: ${discountColor};
          border-radius: ${saveRadius}px;
        }

        ${cardBodyBgColor} .pricing-card-${index} {
          background-color: ${cardBodyBackgroundColor};
        }

        ${cardHeaderBgColor} .pricing-header-${index} {
          background-color: ${cardHeaderBackgroundColor};
        }

       
        ${pricingCardShadow} .pricing-card-${index}:hover{
          box-shadow: ${
            isInset ? "inset " : ""
          } ${hOffset} ${vOffset} ${blur} ${spreed} ${color};             
        }

        .feature-list strong span{
         font-size: ${featureList.fontSize.desktop};
        }

       
        .price-circle-${index}{
          border: 10px solid ${cardHeaderBackgroundColor};
          transition: all 0.4s;
          background-color: white;
        }

        .pricing-card:hover{
          .price-circle {
            border-width: 5px;
          }
        }

        ${buttonLayout} .buy-now-${index} {
          color: ${buttonTextColor};
          padding: 10px 30px ;
          border-radius: ${buttonBorderRadius}px;
          background-image: ${buttonBg.gradient};
          
        }


         .buy-now-${index}:hover {
          background-image: none !important;
          background-color: ${cardHeaderBackgroundColor};
          box-shadow: ${
            isInset ? "inset " : ""
          } ${buttonHOffset} ${buttonVOffset} ${buttonBlur} ${buttonSpreed} ${buttonColor};
          color: ${buttonTextColor};
        }

      

        .hover-color-${index}:hover {
          background-color: ${buttonHoverBg}; 
        }


      
        .pricing-card{
          @include transition(0.4s, background-color);
          background-color: white;
          -moz-border-radius: ${cardBorderRadius}px;
          -webkit-border-radius: ${cardBorderRadius}px;
          border-radius: ${cardBorderRadius}px;
        }

        .pricing-header{
          border-radius: ${cardBorderRadius}px ${cardBorderRadius}px 0 0;
          -webkit-border-radius: ${cardBorderRadius}px ${cardBorderRadius}px 0 0;
          -moz-border-radius: ${cardBorderRadius}px ${cardBorderRadius}px 0 0;
        }

        ${cardGap}{
          gap: ${gap}px;
        }


        ${Badge} .pricing-card-${index} .badge-${index}{  
          right: ${badgePosition}%;       
          color: ${badgeColor};
          box-shadow: ${
            isInset ? "inset " : ""
          } ${popularHOffset} ${popularVOffset} ${popularBlur} ${popularSpreed} ${popularColor};
          background-color: ${badgeBg};   
          border-bottom-left-radius: ${badgeRadius}px;
          border-bottom-right-radius: ${badgeRadius}px;
        }


      `;
    })
    .join("\n");

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		
    ${cardStyles} 
		

    ${pricingTitle}{
      font-weight: bold;
      font-size: 28px;
    }
   
    ${currencySymbol}{
      font-size: 18px;
    }

    

    

    

    
  
    


    

	`,
      }}
    />
  );
};
export default Style;
