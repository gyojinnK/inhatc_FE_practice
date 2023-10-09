"use client";

import css from "@/styles/Table.module.css";
import SubInfo from "./SubInfo";
import { useEffect, useState } from "react";

const Table = (props: any) => {
    const [idList, setIdList]: any = useState([]);

    const idLiftingHandler = (selectedId: any) => {
        console.log("Table: " + selectedId);
        if (idList.includes(selectedId)) {
            setIdList(idList.filter((item: any) => item != selectedId));
        } else {
            setIdList((prev: any) => {
                return [...prev, selectedId];
            });
        }
    };

    useEffect(() => {
        props.onLiftingId(idList);
    }, [idList]);

    return (
        <>
            <table className={css.table}>
                <thead>
                    <tr>
                        <th>이수</th>
                        <th>필수</th>
                        <th className={css.exeptThStyle}>과목명</th>
                        <th>학점</th>
                        <th>출석점수</th>
                        <th>과제점수</th>
                        <th>중간고사</th>
                        <th>기말고사</th>
                        <th>총점</th>
                        <th>평균</th>
                        <th>성적</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(
                        (elem: {
                            id: any;
                            sub_name: any;
                            complete: any;
                            essential: any;
                            grade: any;
                            attendance: any;
                            practice: any;
                            middle: any;
                            final: any;
                        }): any => (
                            <SubInfo
                                key={elem.id}
                                id={elem.id}
                                complete={elem.complete}
                                essential={elem.essential}
                                sub_name={elem.sub_name}
                                grade={elem.grade}
                                attendance={elem.attendance}
                                practice={elem.practice}
                                middle={elem.middle}
                                final={elem.final}
                                idList={idList}
                                onLifting={idLiftingHandler}
                            />
                        )
                    )}
                </tbody>
            </table>
            <style jsx>{`
                th {
                    background-color: rgb(85, 84, 84);
                    padding: 10px 0;
                    color: white;
                    font-weight: 400;
                    width: 50px;
                }
            `}</style>
        </>
    );
};

export default Table;
