export default DocImage;
declare function DocImage({ fill, className, style, size, onClick, text }: {
    fill: any;
    className: any;
    style: any;
    size: any;
    onClick: any;
    text: any;
}): JSX.Element;
declare namespace DocImage {
    export namespace defaultProps {
        export const fill: string;
        export const size: string;
        export const style: {};
        export const className: string;
        export const onClick: null;
        export const text: string;
    }
    export namespace propTypes {
        const fill_1: PropTypes.Requireable<string>;
        export { fill_1 as fill };
        const size_1: PropTypes.Requireable<string>;
        export { size_1 as size };
        const style_1: PropTypes.Requireable<object>;
        export { style_1 as style };
        const className_1: PropTypes.Requireable<string>;
        export { className_1 as className };
        const onClick_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onClick_1 as onClick };
        const text_1: PropTypes.Requireable<string>;
        export { text_1 as text };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=DocImage.d.ts.map