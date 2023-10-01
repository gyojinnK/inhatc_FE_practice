"use client";
import Header from "./Header";
import Access from "./SubInfo";
import { useState } from "react";

const DUMMY_DATA = [
    {
        complete: "전공",
        essential: "필수",
        sub_name: "프론트엔드 개발 실습",
        grade: 3,
        attendance: 40,
        practice: 40,
        middle: 80,
        final: 75,
    },
    {
        complete: "전공",
        essential: "필수",
        sub_name: "클라우드 컴퓨팅",
        grade: 3,
        attendance: 32,
        practice: 12,
        middle: 50,
        final: 68,
    },
];

const Wrap = () => {
    const [data, setData] = useState(DUMMY_DATA);

    return (
        <>
            <Header data={data} />
            {/* <Access /> */}
        </>
    );
};

export default Wrap;
