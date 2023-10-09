import css2 from "@/styles/SubInfo.module.css";

const LineCalc = (props: any) => {
    const optionalStyle = {
        backgroundColor: props.select
            ? "rgba(0,0,0,0.8)"
            : "rgb(155, 155, 155)",
    };

    return (
        <>
            <td style={optionalStyle} className={css2.tdStyle}>
                {props.total}
            </td>
            <td style={optionalStyle} className={css2.tdStyle}></td>
            <td style={optionalStyle} className={css2.tdStyle}>
                {props.score}
            </td>
        </>
    );
};

export default LineCalc;
