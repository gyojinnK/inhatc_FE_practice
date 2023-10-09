import css from "@/styles/page.module.css";
import Wrap from "@/components/Wrap";

const DATABASE1: any = [];
const DATABASE2: any = [];
const DATABASE3: any = [];

export default function Home() {
    return (
        <>
            <Wrap grade={"1"} data={DATABASE1} />
            <Wrap grade={"2"} data={DATABASE2} />
            <Wrap grade={"3"} data={DATABASE3} />
        </>
    );
}
