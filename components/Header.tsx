import css from "@/styles/Header.module.css";

const Header = (props: any) => {
    const inputOpenHandler = () => {
        props.onIsInputOpen(true);
    };

    return (
        <header className={css.header}>
            <h2>{`${props.grade}학년`}</h2>
            <ul className={css.ul}>
                <li className={css.li} onClick={inputOpenHandler}>
                    추가
                </li>
                <li className={css.li} onClick={props.onDeleteId}>
                    삭제
                </li>
                <li className={css.li}>저장</li>
            </ul>
        </header>
    );
};

export default Header;
