import { BrowserRouter, Route, Routes} from "react-router-dom"
import AragonView from "../views/AragonView"
import ExtremaduraView from "../views/ExtremaduraView"
import AndaluciaView from "../views/AndaluciaView"
import Skeleton from "./Skeleton"
import FormView from "../views/FormView"
import FormResultsView from "../views/FormResultsView"

var Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Skeleton content={ <p><b style={{fontSize: '2em'}}>Wellcome!</b><br/>Click any of the routes to continue.</p>}/>} />
                <Route path="*" element={<Skeleton content={ <b style={{fontSize: '2em'}}>Page not found...</b>}/>} />
                <Route caseSensitive={true} path="/Aragon" element={<Skeleton content={<AragonView />}/>} />
                <Route caseSensitive={true} path="/Andalucia" element={<Skeleton content={<AndaluciaView />}/>} />
                <Route caseSensitive={true} path="/Extremadura" element={<Skeleton content={<ExtremaduraView />}/>} />
                <Route caseSensitive={true} path="/Form" element={<Skeleton content={<FormView />}/>} />
                <Route caseSensitive={true} path="/Form_Results" element={<Skeleton content={<FormResultsView />}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router