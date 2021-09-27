import React, { useEffect, useState } from 'react';
import './main.global.css';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { hot } from 'react-hot-loader/root';

import { applyMiddleware, createStore, Middleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store/store';
import thunk from 'redux-thunk'
import { BrowserRouter, Link, Redirect, Route, Switch, useLocation, useParams } from 'react-router-dom';
import { Post } from './Post/Post';
import { CommentsDataContextProvider } from './shared/context/CommentsDataContext';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

function AppComponent() {
    const [mouned, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <Provider store={store} >
            {mouned && (
                <BrowserRouter>
                    <Switch>
                        <Redirect from="/auth" to="/posts" />
                        <Route path="/posts">
                            <Layout>
                                <Header />
                                <Content>
                                    <CardsList />
                                    <Route path="/posts/:postId">
                                        <CommentsDataContextProvider>
                                            <Post />
                                        </CommentsDataContextProvider>
                                    </Route>
                                </Content>
                            </Layout>
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/posts" />
                        </Route>
                        <Route path="*">
                            <h1 style={{ textAlign: 'center', backgroundColor: 'white', padding: '20px' }}>
                                404 - страница не найдена
                            </h1>
                        </Route>
                    </Switch>
                </BrowserRouter>
            )}
        </Provider>
    );
}

export const App = hot(() => <AppComponent />)