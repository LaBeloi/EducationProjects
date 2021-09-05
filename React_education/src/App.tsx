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
import { userContext, UserContextProvider } from './shared/context/userContext';
import { usePostsData } from './hooks/usePostsData';
import { PostsContextProvider } from './shared/context/PostsContext';
import { commentContext } from './shared/context/commentContext';
import { useCommentsData } from './hooks/useCommentsData';

function AppComponent() {
    const [commentValue, setCommentValue] = useState('');
    const [token] = useToken();
    const CommentProvider = commentContext.Provider;
    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <PostsContextProvider>
                    <CommentProvider value={{
                        value: commentValue,
                        onChange: setCommentValue
                    }}>
                        <Layout>
                            <Header />
                            <Content>
                                <CardsList />
                            </Content>
                        </Layout>
                    </CommentProvider>    
                </PostsContextProvider>    
            </UserContextProvider>    
        </tokenContext.Provider>
    );
}

export const App = hot(() => <AppComponent />)