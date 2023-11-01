"use client";
import Table from "./Table";
import { useEffect, useState } from "react";
import Header from "./Header";
import InputForm from "./InputForm";

const Wrap = (props: any) => {
    const [data, setData]: any = useState([]);
    const [isInputOpen, setIsInputOpen] = useState(false);
    const [deleteIds, setDeleteIDs]: any = useState([]);
    const [isSave, setIsSave] = useState(false);

    const checkingDup = (added: any) => {
        let check = false;
        data.map((item: any) => {
            if (item.sub_name === added.sub_name) {
                check = true;
            } else {
                check = false;
            }
        });
        return check;
    };

    const addDataHandler = (addFinalData: any) => {
        if (data?.length !== undefined) {
            if (!checkingDup(addFinalData)) {
                setData((prev: any) => {
                    return [...prev, addFinalData];
                });
            } else {
                alert("이미 등록된 과목입니다. 확인 후 다시시도하세요^^!");
            }
        } else {
            setData(addFinalData);
        }
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

    useEffect(() => {
        setData(props.data);
    }, []);

    useEffect(() => {
        setData((prev: any) => {
            prev.sort((obj1: any, obj2: any) => {
                if (obj1.complete?.localeCompare(obj2.complete) || 0)
                    return obj1.complete?.localeCompare(obj2.complete);

                // a1이 같다면 a2로 비교
                if (obj1.essential?.localeCompare(obj2.essential) || 0)
                    return obj1.essential?.localeCompare(obj2.essential);

                // a2가 같다면 a3으로 비교
                if (obj1.sub_name?.localeCompare(obj2.sub_name) || 0)
                    return obj1.sub_name?.localeCompare(obj2.sub_name);

                // 모든 속성이 동일하다면 동일한 것으로 간주
                return 0;
            });
            return [...prev];
        });
    }, [isSave]);

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
