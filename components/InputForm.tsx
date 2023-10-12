import css from "@/styles/InputForm.module.css";
import { useState } from "react";

const InputForm = (props: any) => {
    const [enteredComplete, setEnteredComplete] = useState("교양");
    const [enteredEssential, setEnteredEssential] = useState("선택");
    const [enteredSubName, setEnteredSubName] = useState("");
    const [enteredGrade, setEnteredGrade] = useState(0);
    const [enteredAttendance, setEnteredAttendance] = useState(0);
    const [enteredPractice, setEnteredPractice] = useState(0);
    const [enteredMiddle, setEnteredMiddle] = useState(0);
    const [enteredFinal, setEnteredFinal] = useState(0);

    const inputCloseHandler = () => {
        props.onIsInputOpen(false);
    };

    const completeChangeHandler = (e: any) => {
        setEnteredComplete(e.target.value);
    };

    const essentialChangeHandler = (e: any) => {
        setEnteredEssential(e.target.value);
    };

    const subNameChangeHandler = (e: any) => {
        setEnteredSubName(e.target.value);
    };

    const gradeChangeHandler = (e: any) => {
        setEnteredGrade(parseInt(e.target.value));
    };

    const attendanceChangeHandler = (e: any) => {
        setEnteredAttendance(parseInt(e.target.value));
    };

    const practiceChangeHandler = (e: any) => {
        setEnteredPractice(parseInt(e.target.value));
    };

    const middleChangeHandler = (e: any) => {
        setEnteredMiddle(parseInt(e.target.value));
    };

    const finalChangeHandler = (e: any) => {
        setEnteredFinal(parseInt(e.target.value));
    };

    const submitHandler = (e: any) => {
        e.preventDefault();
        const finalData = {
            id: Math.random().toString(),
            complete: enteredComplete,
            essential: enteredEssential,
            sub_name: enteredSubName,
            grade: enteredGrade,
            attendance: enteredAttendance,
            practice: enteredPractice,
            middle: enteredMiddle,
            final: enteredFinal,
            totalScore:
                enteredAttendance +
                enteredPractice +
                enteredMiddle +
                enteredFinal,
        };
        props.onAddNewData(finalData);
        props.onIsInputOpen(false);
        setEnteredSubName("");
        setEnteredGrade(0);
        setEnteredAttendance(0);
        setEnteredPractice(0);
        setEnteredMiddle(0);
        setEnteredFinal(0);
    };

    return (
        <div className={css.formBg}>
            <form className={css.form} onSubmit={submitHandler}>
                <h2>추가할 수강정보를 입력하세요.</h2>
                <div className="layout">
                    <div>
                        <label htmlFor="complete">이수</label>
                        <select
                            id="complete"
                            value={enteredComplete}
                            onChange={completeChangeHandler}
                        >
                            <option value="교양">교양</option>
                            <option value="전공">전공</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="essential">필수</label>
                        <select
                            id="essential"
                            value={enteredEssential}
                            onChange={essentialChangeHandler}
                        >
                            <option value="선택">선택</option>
                            <option value="필수">필수</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="sub_name">과목명</label>
                        <input
                            type="text"
                            id="sub_name"
                            value={enteredSubName}
                            onChange={subNameChangeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="grade">학점</label>
                        <input
                            type="number"
                            id="grade"
                            min="1"
                            max="5"
                            value={enteredGrade}
                            onChange={gradeChangeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="attendance">출석점수</label>
                        <input
                            type="number"
                            id="attendance"
                            min="0"
                            max="20"
                            value={enteredAttendance}
                            onChange={attendanceChangeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="practice">과제점수</label>
                        <input
                            type="number"
                            id="practice"
                            min="0"
                            max="20"
                            value={enteredPractice}
                            onChange={practiceChangeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="middle">중간고사</label>
                        <input
                            type="number"
                            id="middle"
                            min="0"
                            max="30"
                            value={enteredMiddle}
                            onChange={middleChangeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="final">기말고사</label>
                        <input
                            type="number"
                            id="final"
                            min="0"
                            max="30"
                            value={enteredFinal}
                            onChange={finalChangeHandler}
                        />
                    </div>
                </div>
                <span className={`${css.btnWrap}`}>
                    <button className={css.btn} type="submit">
                        추가하기
                    </button>
                    <button className={css.btn} onClick={inputCloseHandler}>
                        취소하기
                    </button>
                </span>
            </form>
            <style jsx>{`
                div:not(:nth-of-type(1)) {
                    margin: 10px 0;
                }
                .layout {
                    margin: 0 auto;
                    width: fit-content;
                    text-align: left;
                }
                h2 {
                    margin: 30px 0 30px 0;
                }
                label {
                    display: inline-block;
                    margin: 0 10px 0 0;
                    width: 90px;
                    text-align: right;
                }
                input {
                    width: 130px;
                }
            `}</style>
        </div>
    );
};

export default InputForm;
