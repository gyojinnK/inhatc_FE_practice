"use client";
import css2 from "@/styles/SubInfo.module.css";
import { useEffect, useState } from "react";
import LineCalc from "./LineCalc";

const SubInfo = (props: any): any => {
    const [select, setSelect] = useState(false);
    // const [avg, setAvg] = useState(0.0);
    const [score, setScore] = useState("");

    useEffect(() => {
        setScore(() => {
            let s = "";
            if (props.totalScore > 95) s = "A+";
            else if (95 >= props.totalScore && props.totalScore > 90) s = "A0";
            else if (90 >= props.totalScore && props.totalScore > 85) s = "B+";
            else if (85 >= props.totalScore && props.totalScore > 80) s = "B0";
            else if (80 >= props.totalScore && props.totalScore > 75) s = "C+";
            else if (75 >= props.totalScore && props.totalScore > 70) s = "C0";
            else if (70 >= props.totalScore && props.totalScore > 65) s = "D+";
            else if (65 >= props.totalScore && props.totalScore > 60) s = "D0";
            else s = "F";
            return s;
        });
    }, [[props.idList]]);

    const selectHandler = () => {
        select ? setSelect(false) : setSelect(true);
        props.onLifting(props.id);
    };

    const optionalStyle = {
        backgroundColor: select ? "rgba(0,0,0,0.8)" : "rgb(155, 155, 155)",
    };
    return (
        <>
            <tr onClick={selectHandler}>
                <td style={optionalStyle} className={css2.tdStyle}>
                    {props.complete}
                </td>
                <td style={optionalStyle} className={css2.tdStyle}>
                    {props.essential}
                </td>
                <td
                    style={optionalStyle}
                    className={`${css2.exeptThStyle} ${css2.tdStyle} `}
                >
                    {props.sub_name}
                </td>
                <td style={optionalStyle} className={css2.tdStyle}>
                    {props.grade}
                </td>
                <td style={optionalStyle} className={css2.tdStyle}>
                    {props.attendance}
                </td>
                <td style={optionalStyle} className={css2.tdStyle}>
                    {props.practice}
                </td>
                <td style={optionalStyle} className={css2.tdStyle}>
                    {props.middle}
                </td>
                <td style={optionalStyle} className={css2.tdStyle}>
                    {props.final}
                </td>

                {props.grade == "1" ? (
                    <LineCalc select={select} total={" "} score={"P"} />
                ) : (
                    <LineCalc
                        select={select}
                        total={props.totalScore}
                        score={score}
                    />
                )}
            </tr>
            <style jsx>
                {`
                    input {
                        margin: 0;
                        padding: 0;
                        border: none;
                        border-style: none;
                        background-color: rgba(0, 0, 0, 0);
                        color: white;
                        outline: none;
                        text-align: center;
                    }
                    select {
                        border: none;
                        background-color: rgba(0, 0, 0, 0);
                        color: white;
                    }
                `}
            </style>
        </>
    );
};

export default SubInfo;
