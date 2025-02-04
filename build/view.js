/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../bpl-tools/utils/data.js":
/*!**********************************!*\
  !*** ../bpl-tools/utils/data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deskBreakpoint: () => (/* binding */ deskBreakpoint),
/* harmony export */   mobileBreakpoint: () => (/* binding */ mobileBreakpoint),
/* harmony export */   tabBreakpoint: () => (/* binding */ tabBreakpoint)
/* harmony export */ });
const deskBreakpoint = '@media only screen and (min-width: 1025px)';
const tabBreakpoint = '@media only screen and (min-width: 641px) and (max-width: 1024px)';
const mobileBreakpoint = '@media only screen and (max-width: 640px)';

/***/ }),

/***/ "../bpl-tools/utils/getCSS.js":
/*!************************************!*\
  !*** ../bpl-tools/utils/getCSS.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAdvBGCSS: () => (/* binding */ getAdvBGCSS),
/* harmony export */   getBackgroundCSS: () => (/* binding */ getBackgroundCSS),
/* harmony export */   getBorderBoxCSS: () => (/* binding */ getBorderBoxCSS),
/* harmony export */   getBorderCSS: () => (/* binding */ getBorderCSS),
/* harmony export */   getBoxCSS: () => (/* binding */ getBoxCSS),
/* harmony export */   getColorsCSS: () => (/* binding */ getColorsCSS),
/* harmony export */   getGradientCSS: () => (/* binding */ getGradientCSS),
/* harmony export */   getIconCSS: () => (/* binding */ getIconCSS),
/* harmony export */   getMultiShadowCSS: () => (/* binding */ getMultiShadowCSS),
/* harmony export */   getOverlayCSS: () => (/* binding */ getOverlayCSS),
/* harmony export */   getPropertyBoxCSS: () => (/* binding */ getPropertyBoxCSS),
/* harmony export */   getSeparatorCSS: () => (/* binding */ getSeparatorCSS),
/* harmony export */   getShadowCSS: () => (/* binding */ getShadowCSS),
/* harmony export */   getSpaceCSS: () => (/* binding */ getSpaceCSS),
/* harmony export */   getTypoCSS: () => (/* binding */ getTypoCSS)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "../bpl-tools/utils/data.js");

const getBackgroundCSS = (bg, isSolid = true, isGradient = true, isImage = true) => {
  const {
    type = 'solid',
    color = '#000000b3',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)',
    image = {},
    position = 'center center',
    attachment = 'initial',
    repeat = 'no-repeat',
    size = 'cover',
    overlayColor = '#000000b3'
  } = bg || {};
  const styles = 'gradient' === type && isGradient ? `background: ${gradient};` : 'image' === type && isImage ? `background: url(${image?.url});
				background-color: ${overlayColor};
				background-position: ${position};
				background-size: ${size};
				background-repeat: ${repeat};
				background-attachment: ${attachment};
				background-blend-mode: overlay;` : isSolid && `background: ${color};`;
  return styles;
}; // PHP version in Stepped Content

const getBorderCSS = border => {
  const {
    width = '0px',
    style = 'solid',
    color = '',
    side = 'all',
    radius = '0px'
  } = border || {};
  const borderSideCheck = s => {
    const bSide = side?.toLowerCase();
    return bSide?.includes('all') || bSide?.includes(s);
  };
  const noWidth = width === '0px' || !width;
  const borderCSS = `${width} ${style} ${color}`;
  const styles = `
		${noWidth ? '' : ['top', 'right', 'bottom', 'left'].map(side => borderSideCheck(side) ? `border-${side}: ${borderCSS};` : '').join('')}
		${!radius ? '' : `border-radius: ${radius};`}
	`;
  return styles;
};
const getBorderBoxCSS = border => {
  if (!border) return '';
  const generateBorderCSS = borderObj => {
    const {
      color = '#000000',
      style = 'solid',
      width = '0px'
    } = borderObj;
    return `${width} ${style} ${color}`;
  };
  if ('object' === typeof border && !Array.isArray(border)) {
    if (border.hasOwnProperty('top') || border.hasOwnProperty('right') || border.hasOwnProperty('bottom') || border.hasOwnProperty('left')) {
      const sides = ['top', 'right', 'bottom', 'left'];
      return sides.map(side => border[side] ? `border-${side}: ${generateBorderCSS(border[side])};` : '').join(' ').trim();
    } else {
      return `border: ${generateBorderCSS(border)};`;
    }
  }
  return '';
};
const getColorsCSS = colors => {
  const {
    color = '#333',
    bgType = 'solid',
    bg = '',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = colors || {};
  const styles = `
		${color ? `color: ${color};` : ''}
		${gradient || bg ? `background: ${'gradient' === bgType ? gradient : bg};` : ''}
	`;
  return styles;
};
const getIconCSS = (icon, isSize = true, isColor = true) => {
  const {
    fontSize = 16,
    colorType = 'solid',
    color = 'inherit',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = icon || {};
  const colorCSS = 'gradient' === colorType ? `color: transparent; background-image: ${gradient}; -webkit-background-clip: text; background-clip: text;` : `color: ${color};`;
  const styles = `
		${!fontSize || !isSize ? '' : `font-size: ${fontSize}px;`}
		${isColor ? colorCSS : ''}
	`;
  return styles;
};
const getMultiShadowCSS = (value, type = 'box') => {
  let styles = '';
  value?.map((item, index) => {
    const {
      hOffset = '0px',
      vOffset = '0px',
      blur = '0px',
      spreed = '0px',
      color = '#7090b0',
      isInset = false
    } = item || {};
    const inset = isInset ? 'inset' : '';
    const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
    const isComa = index + 1 >= value.length ? '' : ', ';
    styles += 'text' === type ? `${offsetBlur} ${color}${isComa}` : `${offsetBlur} ${spreed} ${color} ${inset}${isComa}`;
  });
  return styles || 'none';
};
const getSeparatorCSS = separator => {
  const {
    width = '50%',
    height = '2px',
    style = 'solid',
    color = '#bbb'
  } = separator || {};
  const styles = `
		width: ${width};
		${'0px' === height && '0em' === height && '0rem' === height ? '' : `border-top: ${height} ${style} ${color};`}
	`;
  return styles;
};
const getShadowCSS = (shadow, type = 'box') => {
  const {
    hOffset = '0px',
    vOffset = '0px',
    blur = '0px',
    spreed = '0px',
    color = '#7090b0',
    isInset = false
  } = shadow || {};
  const inset = isInset ? 'inset' : '';
  const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
  const styles = 'text' === type ? `${offsetBlur} ${color}` : `${offsetBlur} ${spreed} ${color} ${inset}`;
  return styles || 'none';
};
const getSpaceCSS = space => {
  const {
    side = 2,
    vertical = '0px',
    horizontal = '0px',
    top = '0px',
    right = '0px',
    bottom = '0px',
    left = '0px'
  } = space || {};
  const styles = 2 === side ? `${vertical} ${horizontal}` : `${top} ${right} ${bottom} ${left}`;
  return styles;
};
const getTypoCSS = (selector, typo, isFamily = true) => {
  const {
    fontFamily = 'Default',
    fontCategory = 'sans-serif',
    fontVariant = 400,
    fontWeight = 400,
    isUploadFont = true,
    fontSize = {
      desktop: 15,
      tablet: 15,
      mobile: 15
    },
    fontStyle = 'normal',
    textTransform = 'none',
    textDecoration = 'auto',
    lineHeight = '135%',
    letterSpace = '0px'
  } = typo || {};
  const generateCss = (value, cssProperty) => !value ? '' : `${cssProperty}: ${value};`;
  const isEmptyFamily = !isFamily || !fontFamily || 'Default' === fontFamily;
  const desktopFontSize = fontSize?.desktop || fontSize;
  const tabletFontSize = fontSize?.tablet || desktopFontSize;
  const mobileFontSize = fontSize?.mobile || tabletFontSize;
  const styles = `
		${isEmptyFamily ? '' : `font-family: '${fontFamily}', ${fontCategory};`}
		${generateCss(fontWeight, 'font-weight')}
		${`font-size: ${desktopFontSize}px;`}
		${generateCss(fontStyle, 'font-style')}
		${generateCss(textTransform, 'text-transform')}
		${generateCss(textDecoration, 'text-decoration')}
		${generateCss(lineHeight, 'line-height')}
		${generateCss(letterSpace, 'letter-spacing')}
	`;

  // Google font link
  const linkQuery = !fontVariant || 400 === fontVariant ? '' : '400i' === fontVariant ? ':ital@1' : fontVariant?.includes('00i') ? `: ital, wght@1, ${fontVariant?.replace('00i', '00')} ` : `: wght@${fontVariant} `;
  const link = isEmptyFamily ? '' : `https://fonts.googleapis.com/css2?family=${fontFamily?.split(' ').join('+')}${linkQuery.replace(/ /g, '')}&display=swap`;
  return {
    googleFontLink: !isUploadFont || isEmptyFamily ? '' : `@import url(${link});`,
    styles: `${selector}{
			${styles}
		}
		${_data__WEBPACK_IMPORTED_MODULE_0__.tabBreakpoint} {
			${selector}{
				${`font-size: ${tabletFontSize}px;`}
			}
		}
		${_data__WEBPACK_IMPORTED_MODULE_0__.mobileBreakpoint} {
			${selector}{
				${`font-size: ${mobileFontSize}px;`}
			}
		}`.replace(/\s+/g, ' ').trim()
  };
};
const getBoxCSS = val => {
  if (!val) return '0';
  if (typeof val === 'string') return val;
  if (typeof val === 'object' && !Array.isArray(val)) {
    const order = ['top', 'right', 'bottom', 'left'];
    return order.map(side => val[side] || '0').join(' ');
  }
  return '0';
};
const getPropertyBoxCSS = (property, value) => value ? `${property}: ${getBoxCSS(value)};` : '';

// Murad Wahid
const getGradientCSS = gradient => {
  const {
    type,
    radialType,
    colors,
    centerPositions,
    angel
  } = gradient || {};
  if (gradient) {
    const gradientColors = colors?.map(({
      color,
      position
    }) => `${color} ${position}%`);
    const liner = `linear-gradient(${angel}deg, ${gradientColors})`;
    const radial = `radial-gradient(${radialType} at ${centerPositions?.x}% ${centerPositions?.y}%,${gradientColors})`;
    return type === 'linear' ? `background: ${liner};` : `background: ${radial};`;
  }
  return '';
};
const getSolidBGCSS = bg => `${bg ? `background: ${bg};` : ''}`;
const getImagePosition = img => {
  const {
    position = 'center center',
    xPosition = 0,
    yPosition = 0,
    attachment = '',
    repeat = 'no-repeat',
    size = 'cover',
    customSize = '0px'
  } = img || {};
  const cd = v => 'initial' !== v;
  return `
		${cd(position) ? `background-position: ${'custom' === position ? `${xPosition} ${yPosition}` : position};` : ''}
		${attachment && cd(attachment) ? `background-attachment: ${attachment};` : ''}
		${cd(repeat) ? `background-repeat: ${repeat};` : ''}
		${cd(size) ? `background-size: ${'custom' === size ? `${customSize} auto` : size};` : ''}
	`;
};
const getImageCSS = (img = {}) => {
  if (img) {
    return {
      desktop: img.url ? `background-image: url(${img.url}); ${getImagePosition(img?.desktop)}` : '',
      tablet: img.url ? getImagePosition(img?.tablet) : '',
      mobile: img.url ? getImagePosition(img?.mobile) : ''
    };
  }
  return '';
};
const getVideoCSS = (video, selector) => {
  const {
    url,
    loop
  } = video || {};
  const parentEl = document.querySelector(selector);
  const el = parentEl?.querySelector('.bPlVideo');
  const videoEl = document.createElement('video');
  videoEl.muted = true;
  videoEl.autoplay = true;
  videoEl.classList.add('bPlVideo');
  if (!el) {
    if (parentEl && url) {
      videoEl.innerHTML = `<source src=${url}></source>`;
      parentEl.appendChild(videoEl);
    }
  }
  videoEl.loop = loop;
  videoEl.play();
  return `${selector} .bPlVideo{
		left: 0;
		min-height: 100%;
		min-width: 100%;
		position: absolute;
		width: -webkit-fill-available;
		top: 0;
		z-index: 0;
	}`;
};
const getAdvBGCSS = (background, selector, isHover = false) => {
  const {
    type = 'color',
    color,
    gradient,
    img,
    video
  } = background || {};
  const bgCSS = type === 'color' ? getSolidBGCSS(color) : type === 'gradient' ? getGradientCSS(gradient) : type === 'image' ? getImageCSS(img).desktop : '';
  const tablet = type === 'image' ? getImageCSS(img).tablet : '';
  const mobile = type === 'image' ? getImageCSS(img).mobile : '';
  const sl = isHover ? `${selector}:hover` : selector;
  return `
		${type === 'video' ? getVideoCSS(video, selector) : ''}

		${sl}{
			${bgCSS}
		}

		${_data__WEBPACK_IMPORTED_MODULE_0__.tabBreakpoint} {
			${sl}{
				${tablet}
			}
		}
		${_data__WEBPACK_IMPORTED_MODULE_0__.mobileBreakpoint} {
			${sl}{
				${mobile}
			}
		}
	`.replace(/\s+/g, ' ').trim();
};
const getOverlayCSS = (overlay, selector, isHover = false) => {
  const {
    isEnabled,
    colors,
    opacity = 1,
    blend,
    filter = '',
    blur = 0,
    brightness = 100,
    contrast = 100,
    saturation = 100,
    hue = 0
  } = overlay || {};
  const filterCSSValue = `${100 !== brightness ? `brightness(${brightness}%)` : ''} ${100 !== contrast ? `contrast(${contrast}%)` : ''} ${100 !== saturation ? `saturate(${saturation}%)` : ''} ${0 !== blur ? `blur(${blur}px)` : ''} ${0 !== hue ? `hue-rotate(${hue}deg)` : ''}`;
  const filterCSS = `${filter}: ${filter ? filterCSSValue : ''}; -webkit-${filter}: ${filter ? filterCSSValue : ''};`;
  const blendCSS = blend ? `mix-blend-mode: ${blend};` : '';
  const sl = isHover ? `${selector}:hover::after` : `${selector}::after`;
  return isEnabled ? `
		${selector}::after{
			content: '';
			position: absolute;
			inset: 0;
		}
		${getAdvBGCSS(colors, sl, false)}
		${sl}{
			opacity: ${opacity};
			${blendCSS}
			${filterCSS}
		}
	`.replace(/\s+/g, ' ').trim() : '';
};

/***/ }),

/***/ "./src/Components/Common/Style.js":
/*!****************************************!*\
  !*** ./src/Components/Common/Style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../bpl-tools/utils/getCSS */ "../bpl-tools/utils/getCSS.js");

// import { getColorsCSS } from '../../../../Components/utils/getCSS';

const Style = ({
  attributes,
  id,
  device = "desktop"
}) => {
  const {
    plans,
    alignment
  } = attributes;

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

  const cardStyles = plans?.map((styles, index) => {
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
      badgePosition
    } = styles;
    const {
      planTitle,
      currencySymbol,
      money,
      duration,
      discountBadge,
      featureList,
      button,
      badge
    } = typography;
    console.log(planTitle.fontSize, "plan font size");
    const {
      cardShadow,
      buttonShadow,
      badgeShadow
    } = shadow;

    // console.log(badgeRadius, "badgeRadius");
    console.log(badgeShadow, "badgeShadow");
    const {
      blur,
      color,
      hOffset,
      vOffset,
      isInset,
      spreed
    } = cardShadow[0];
    console.log(blur, "blur");
    const {
      blur: buttonBlur,
      color: buttonColor,
      hOffset: buttonHOffset,
      vOffset: buttonVOffset,
      isInset: buttonIsInset,
      spreed: buttonSpreed
    } = buttonShadow[0];
    const {
      blur: popularBlur,
      color: popularColor,
      hOffset: popularHOffset,
      vOffset: popularVOffset,
      isInset: popularIsInset,
      spreed: popularSpreed
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

       ${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)("", planTitle)?.googleFontLink}
      ${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(planTitle, planTitle)?.styles}

     
      
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
        font-family: ${currencySymbol?.fontFamily}, ${currencySymbol?.fontCategory};
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
        font-family: ${discountBadge?.fontFamily}, ${discountBadge?.fontCategory};
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
          box-shadow: ${isInset ? "inset " : ""} ${hOffset} ${vOffset} ${blur} ${spreed} ${color};             
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
          box-shadow: ${isInset ? "inset " : ""} ${buttonHOffset} ${buttonVOffset} ${buttonBlur} ${buttonSpreed} ${buttonColor};
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
          box-shadow: ${isInset ? "inset " : ""} ${popularHOffset} ${popularVOffset} ${popularBlur} ${popularSpreed} ${popularColor};
          background-color: ${badgeBg};   
          border-bottom-left-radius: ${badgeRadius}px;
          border-bottom-right-radius: ${badgeRadius}px;
        }


      `;
  }).join("\n");
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `
		
    ${cardStyles} 
		

    ${pricingTitle}{
      font-weight: bold;
      font-size: 28px;
    }
   
    ${currencySymbol}{
      font-size: 18px;
    }

    

    

    

    
  
    


    

	`
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/Components/Frontend/BlockName.js":
/*!**********************************************!*\
  !*** ./src/Components/Frontend/BlockName.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const BlockName = ({
  attributes
}) => {
  const {
    purposeType
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bBlocksTestPurpose"
  }, purposeType === "test" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Every text is written for a reason. For example, every text message you send has a purpose, whether that is to let your mum know when you will be home.") : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "If someone sends you an invitation to a party, for example, they are telling you what time to arrive and what the sender is celebrating, and they might even."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockName);

/***/ }),

/***/ "./src/Components/PricingTable/PricingTable.js":
/*!*****************************************************!*\
  !*** ./src/Components/PricingTable/PricingTable.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





const PricingTable = ({
  attributes,
  setAttributes,
  setSelectedFeatureIndex
}) => {
  const {
    plans
  } = attributes;

  // Function to handle changes to each plan's attributes
  const updatePlan = (index, newPlanData) => {
    const updatedPlans = [...plans];
    updatedPlans[index] = {
      ...updatedPlans[index],
      ...newPlanData
    };
    setAttributes({
      plans: updatedPlans
    });
  };
  const toggleBadge = (index, value) => {
    const updatedPlans = [...plans];
    updatedPlans[index] = {
      ...updatedPlans[index],
      badge: value
    };
    setAttributes({
      plans: updatedPlans
    });
  };

  //
  const handlePreviewClick = e => {
    e.preventDefault();
    plans.map((plan, index) => {
      if (plan.buyNowLink) {
        wp.data.dispatch("core/notices").createInfoNotice(`Link: ${plan.buyNowLink}`, {
          isDismissible: true,
          type: "snackbar"
        });
        (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          href: plan.buyNowLink,
          target: "_blank",
          rel: "noreferrer"
        });
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("body", {
    style: {
      background: "#f0f0f1"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, plans.map((plan, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `pricing-card pricing-card-${index}  basic`
    // style={{ backgroundColor: plan.backgroundColor }}
  }, plan.badge && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: `badge badge-${index}`,
    value: plan.badgeLabel,
    onChange: value => {
      updatePlan(index, {
        badgeLabel: value
      });
      if (value.length === 0) {
        toggleBadge(index, true);
      }
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Badge", "b-blocks")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `pricing-header pricing-header-${index}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    className: `plan-title plan-title-${index}`,
    value: plan.planTitle,
    onChange: value => updatePlan(index, {
      planTitle: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Plan Title", "b-blocks")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `price-circle price-circle-${index}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "price-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "small",
    value: plan.currencySymbol,
    onChange: value => updatePlan(index, {
      currencySymbol: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Currency Symbol", "b-blocks")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    value: plan.price,
    onChange: value => updatePlan(index, {
      price: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Price", "b-blocks")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    className: "info",
    value: plan.monthLabel,
    onChange: value => updatePlan(index, {
      monthLabel: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Duration", "b-blocks")
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "badge-box"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `discount-badge discount-badge-${index}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    value: plan.discountLabel,
    onChange: value => updatePlan(index, {
      discountLabel: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Discount Label", "b-blocks")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "\xA0"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: `feature-list feature-list-${index}`
  }, plan.features.map((feature, featureIndex) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    onClick: () => setSelectedFeatureIndex(featureIndex),
    key: featureIndex
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: `feature-value feature-value-${index}`,
    tagName: "strong",
    value: feature.value,
    onChange: value => updatePlan(index, {
      features: [...plan.features.slice(0, featureIndex), {
        ...feature,
        value: value
      }, ...plan.features.slice(featureIndex + 1)]
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Feature Value", "b-blocks")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "\xA0"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: `feature-label feature-label-${index}`,
    tagName: "span",
    value: feature.label,
    onChange: value => updatePlan(index, {
      features: [...plan.features.slice(0, featureIndex), {
        ...feature,
        label: value
      }, ...plan.features.slice(featureIndex + 1)]
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Feature Label", "b-blocks")
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "buy-button-box"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: plan.buyNowLink,
    target: "_blank",
    rel: "noreferrer",
    className: `buy-now hover-color-${index} buy-now-${index}`
    // onClick={handlePreviewClick}
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "buttonText",
    tagName: "span",
    value: plan.buyNowLabel,
    onChange: value => updatePlan(index, {
      buyNowLabel: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Buy Now Label", "b-blocks")
  })))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PricingTable);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../plugin-slug/node_modules/react-dom/client.js":
/*!*******************************************************!*\
  !*** ../plugin-slug/node_modules/react-dom/client.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../plugin-slug/node_modules/react-dom/client.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/Components/Common/Style.js");
/* harmony import */ var _Components_Frontend_BlockName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Frontend/BlockName */ "./src/Components/Frontend/BlockName.js");
/* harmony import */ var _Components_PricingTable_PricingTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/PricingTable/PricingTable */ "./src/Components/PricingTable/PricingTable.js");






document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(".wp-block-b-blocks-pricing-table");
  blockNameEls.forEach(blockNameEl => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(blockNameEl).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      id: blockNameEl.id
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_PricingTable_PricingTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes
    })));
    blockNameEl?.removeAttribute("data-attributes");
  });
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map