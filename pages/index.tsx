import type {NextPage} from 'next'
import Preloading from "@components/home/Preloading";
import Content from "@components/home/Content";

const Home: NextPage = () => {
    return (
        <>
            <Preloading/>
            <Content/>
        </>
    )
}

export default Home
