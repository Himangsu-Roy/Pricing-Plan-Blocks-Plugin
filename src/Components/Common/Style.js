// import { getColorsCSS } from '../../../../Components/utils/getCSS';
import { getTypoCSS } from "../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { typography } = attributes;

  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .bBlocksPricingTable `;
  // ${blockSl} p{
  // 	${getColorsCSS(colors)}
  // }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		
		${getTypoCSS("", typography)?.googleFontLink}
        ${getTypoCSS(blockSl, typography)?.styles}
		
		${blockSl} {
			
		}
		

	`,
      }}
    />
  );
};
export default Style;
