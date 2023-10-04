import css from "@/styles/InputForm.module.css";

const InputForm = (props: any) => {
    const inputCloseHandler = () => {
        props.onIsInputOpen(false);
    };

    return (
        <div className={css.formBg}>
            <form className={css.form}>
                <h2>추가할 수강정보를 입력하세요.</h2>
                <div className="layout">
                    <div>
                        <label>이수</label>
                        <select>
                            <option>교양</option>
                            <option>전공</option>
                        </select>
                    </div>
                    <div>
                        <label>필수</label>
                        <select>
                            <option>선택</option>
                            <option>필수</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="sub_name">과목명</label>
                        <input type="text" id="sub_name" />
                    </div>
                    <div>
                        <label htmlFor="grade">학점</label>
                        <input type="text" id="grade" />
                    </div>
                    <div>
                        <label htmlFor="attendance">출석점수</label>
                        <input type="text" id="attendance" />
                    </div>
                    <div>
                        <label htmlFor="practice">과제점수</label>
                        <input type="text" id="practice" />
                    </div>
                    <div>
                        <label htmlFor="middle">중간고사</label>
                        <input type="text" id="middle" />
                    </div>
                    <div>
                        <label htmlFor="final">기말고사</label>
                        <input type="text" id="final" />
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
                    width: 80%;
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
