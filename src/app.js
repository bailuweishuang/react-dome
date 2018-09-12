import React from "react";
import ReactDom from "react-dom";
import getRouter from "./router/index.js";
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
    module.hot.accept('./router/index.js', () => {
        const getRouter = require('./router/index.js').default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            {RootElement}
        </AppContainer>,
        document.getElementById('app')
    )
}
//ReactDOM.render(getRouter(), document.getElementById("app"));
 