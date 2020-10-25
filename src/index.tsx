import { h, FunctionalComponent, render } from 'preact';
import 'preact/devtools';

import './styles.css';

const Main: FunctionalComponent = () => {
    return (
        <main>
            <strong>Snowpack + Typescript + Preact</strong>
        </main>
    );
};

render(<Main />, document.body);
