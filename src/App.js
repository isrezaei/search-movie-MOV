import {Routes, Route, Link} from "react-router-dom";
import HeaderMaster from "./Header/HeaderMaster/HeaderMaster";
import MovieReadyToRender from "./Home/Movies/MovieReadyToRender";
import SeriesReadyToRender from "./Home/Series/SeriesReadyToRender";
import Details from "./Details/Details";
import NotFound404 from "./NotFound/NotFound404";
import Footer from "./Footer/Footer";
import styled from "styled-components";


const AppStyle = styled.div`

  width: 100%;

`


function App() {
    return (
        <div>
            <HeaderMaster/>

            <AppStyle>
                <Routes>
                    <Route path='/' exact element={<MovieReadyToRender/>}/>
                    <Route path='/series' element={<SeriesReadyToRender/>}/>
                    <Route path='Details/:imdbID' element={<Details/>}/>
                    <Route path='*' element={<NotFound404/>}/>
                </Routes>
            </AppStyle>

            <Footer/>
        </div>
    )
}

export default App;
