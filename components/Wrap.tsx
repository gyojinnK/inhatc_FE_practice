"use client";
import Table from "./Table";
import Access from "./SubInfo";
import { useState } from "react";
import Header from "./Header";
import InputForm from "./InputForm";

const Wrap = (props: any) => {
    const [data, setData] = useState(props.data);
    const [isInputOpen, setIsInputOpen] = useState(false);
    const [deleteIds, setDeleteIDs]: any = useState([]);
    const [isSave, setIsSave] = useState(false);

    const addDataHandler = (addFinalData: any) => {
        setData((prev: any) => {
            return [...prev, addFinalData];
        });
    };

    const idLiftingHandler = (idList: any) => {
        setDeleteIDs(idList);
    };

    const deleteByIdHandler = () => {
        setData((prev: any) => {
            return prev.filter(
                (elem: { id: any }) => !deleteIds.includes(elem.id)
            );
        });
    };

    return (
        <>
            <Header
                grade={props.grade}
                onIsInputOpen={setIsInputOpen}
                onDeleteId={deleteByIdHandler}
                save={isSave}
                onIsSave={setIsSave}
            />
            <Table data={data} onLiftingId={idLiftingHandler} save={isSave} />
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
