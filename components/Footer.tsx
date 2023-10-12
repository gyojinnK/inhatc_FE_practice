import css2 from "@/styles/SubInfo.module.css";
import css from "@/styles/Footer.module.css";
import { useEffect, useState } from "react";

const Footer = (props: any) => {
    const [filteredData, setFilteredData] = useState([]);
    const [totalGrade, setTotalGrade] = useState(0);
    const [totalAttendance, setTotalAttendance] = useState(0);
    const [totalPractice, setTotalPractice] = useState(0);
    const [totalMiddle, setTotalMiddle] = useState(0);
    const [totalFinal, setTotalFinal] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [totalAvg, setTotalAvg] = useState(0.0);
    const [totalTier, setTotalTier] = useState("");

    useEffect(() => {
        setFilteredData(() => {
            const filtered = props.data.filter((item: any) => item.grade !== 1);
            return filtered;
        });
    }, [props.data]);

    console.log(filteredData);

    useEffect(() => {
        setTotalGrade(() => {
            let sum = 0;
            filteredData?.map((item: any) => (sum += item.grade));
            return sum;
        });
        setTotalAttendance(() => {
            let sum = 0;
            filteredData?.map((item: any) => (sum += item.attendance));
            return sum;
        });
        setTotalPractice(() => {
            let sum = 0;
            filteredData?.map((item: any) => (sum += item.practice));
            return sum;
        });
        setTotalMiddle(() => {
            let sum = 0;
            filteredData?.map((item: any) => (sum += item.middle));
            return sum;
        });
        setTotalFinal(() => {
            let sum = 0;
            filteredData?.map((item: any) => (sum += item.final));
            return sum;
        });
        setTotalScore(() => {
            let sum = 0;
            filteredData?.map((item: any) => (sum += item.totalScore));
            return sum;
        });
    }, [props.save]);

    console.log("totalScore : ", totalScore);
    console.log("totalAvg : ", totalAvg);

    useEffect(() => {
        if (filteredData?.length !== 0) {
            setTotalAvg(() => {
                if (totalScore === 0) {
                    return 0.0;
                } else {
                    return parseFloat(
                        (totalScore / filteredData?.length).toFixed(1)
                    );
                }
            });
        } else {
            setTotalAvg(0.0);
        }
    }, [totalScore, props.save]);

    useEffect(() => {
        if (filteredData?.length !== 0) {
            setTotalTier(() => {
                let s = "";
                if (totalAvg > 95) s = "A+";
                else if (95 >= totalAvg && totalAvg > 90) s = "A0";
                else if (90 >= totalAvg && totalAvg > 85) s = "B+";
                else if (85 >= totalAvg && totalAvg > 80) s = "B0";
                else if (80 >= totalAvg && totalAvg > 75) s = "C+";
                else if (75 >= totalAvg && totalAvg > 70) s = "C0";
                else if (70 >= totalAvg && totalAvg > 65) s = "D+";
                else if (65 >= totalAvg && totalAvg > 60) s = "D0";
                else s = "F";
                return s;
            });
        } else {
            setTotalTier("");
        }
    }, [totalAvg, props.save]);

    return (
        <>
            <tr>
                <td colSpan={3} className={css2.tdStyle}>
                    합계
                </td>
                <td className={css2.tdStyle}>{totalGrade}</td>
                <td className={css2.tdStyle}>{totalAttendance}</td>
                <td className={css2.tdStyle}>{totalPractice}</td>
                <td className={css2.tdStyle}>{totalMiddle}</td>
                <td className={css2.tdStyle}>{totalFinal}</td>
                <td className={css2.tdStyle}>{totalScore}</td>
                <td className={css2.tdStyle}>{totalAvg}</td>
                <td className={css2.tdStyle}>{totalTier}</td>
            </tr>
            <style jsx>{`
                td {
                    background-color: rgba(85, 84, 84, 0.7);
                }
            `}</style>
        </>
    );
};

export default Footer;
