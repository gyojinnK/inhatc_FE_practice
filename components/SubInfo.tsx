"use client";
import css2 from "@/styles/SubInfo.module.css";
import { useState } from "react";

const SubInfo = (props: any): any => {
    return (
        <>
            <tr>
                <td className={css2.tdStyle}>{props.complete}</td>
                <td className={css2.tdStyle}>{props.essential}</td>
                <td className={`${css2.exeptThStyle} ${css2.tdStyle} `}>
                    {props.sub_name}
                </td>
                <td className={css2.tdStyle}>{props.grade}</td>
                <td className={css2.tdStyle}>{props.attendance}</td>
                <td className={css2.tdStyle}>{props.practice}</td>
                <td className={css2.tdStyle}>{props.middle}</td>
                <td className={css2.tdStyle}>{props.final}</td>
                <td className={css2.tdStyle}></td>
                <td className={css2.tdStyle}></td>
                <td className={css2.tdStyle}></td>
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
