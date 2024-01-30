import { 
    Header,
    Intro,
    Trending,
    Post,
    Load,
    Contact,
    Footer,
} from "../components/layout/index";
export default function Home (params) {
    return (
        <div>
            <Header/>
            <Intro/>
            <Trending/>
            <Post/>
            <Load/>
            <Contact/>
            <Footer/>
        </div>
    )
  }