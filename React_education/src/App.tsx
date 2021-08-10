import React, { useContext, useEffect, useState } from 'react';
import './main.global.css';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { EColor, Text } from './shared/Text/Text';
import { Break } from './shared/Break/Break';
import { EIcons, Icon } from './shared/Icon/Icon';
import { useToken } from './hooks/useToken';
import { hot } from 'react-hot-loader/root';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { usePostsData } from './hooks/usePostsData';
import { PostsContextProvider } from './shared/context/PostsContext';

function AppComponent() {
    const [token] = useToken();
    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <PostsContextProvider>
                    <Layout>
                        <Header />
                        <Content>
                            <CardsList />
                        </Content>
                    </Layout>
                </PostsContextProvider>    
            </UserContextProvider>    
        </tokenContext.Provider>
    );
}

export const App = hot(() => <AppComponent />)