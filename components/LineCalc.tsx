import css2 from "@/styles/SubInfo.module.css";

const LineCalc = (props: any) => {
    return (
        <>
            <td style={props.optionalStyle} className={css2.tdStyle}>
                {props.total}
            </td>
            <td style={props.optionalStyle} className={css2.tdStyle}></td>
            <td style={props.optionalStyle} className={css2.tdStyle}>
                {props.score}
            </td>
        </>
    );
};

export default LineCalc;
