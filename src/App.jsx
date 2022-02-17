import { Charts } from './components/Charts';
import { Description } from './components/Description';
import { Navbar } from './components/Navbar';

import './styles/global.scss';

export function App() {
    return (
        <>
        <Navbar />
        <Description />
        <Charts />
        </>
    );
}