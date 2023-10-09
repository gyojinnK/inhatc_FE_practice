"use client";
import Table from "./Table";
import Access from "./SubInfo";
import { useState } from "react";
import Header from "./Header";
import InputForm from "./InputForm";

const DUMMY_DATA = [
    {
        id: "1",
        complete: "전공",
        essential: "필수",
        sub_name: "프론트엔드 개발 실습",
        grade: 3,
        attendance: 20,
        practice: 10,
        middle: 22,
        final: 13,
    },
    {
        id: "2",
        complete: "전공",
        essential: "필수",
        sub_name: "클라우드 컴퓨팅",
        grade: 3,
        attendance: 20,
        practice: 20,
        middle: 30,
        final: 30,
    },
];

const Wrap = () => {
    const [data, setData] = useState(DUMMY_DATA);
    const [deleteIds, setDeleteIDs]: any = useState([]);
    const [isInputOpen, setIsInputOpen] = useState(false);

    const addDataHandler = (addFinalData: any) => {
        console.log(addFinalData);
        setData((prev) => {
            return [...prev, addFinalData];
        });
    };

    const idLiftingHandler = (idList: any) => {
        console.log("Wrap: " + idList);
        setDeleteIDs(idList);
    };

    const deleteByIdHandler = () => {
        setData((prev) => {
            return prev.filter(
                (elem: { id: any }) => !deleteIds.includes(elem.id)
            );
        });
    };

    return (
        <>
            <Header
                grade={1}
                onIsInputOpen={setIsInputOpen}
                onDeleteId={deleteByIdHandler}
            />
            <Table data={data} onLiftingId={idLiftingHandler} />
            {isInputOpen ? (
                <InputForm
                    onIsInputOpen={setIsInputOpen}
                    onAddNewData={addDataHandler}
                />
            ) : null}
        </>
    );
};

export default Wrap;
