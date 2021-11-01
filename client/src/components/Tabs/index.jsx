import React from 'react';
import { TabBarWrapper, TabWrapper, StyledSection4, InnerWrapper } from './styles'




export const Tab = ({children, tabShow, ...rest}) => {
    return (
        <TabWrapper {...rest}>
            <InnerWrapper>
            <StyledSection4 color="white" tabShow={tabShow}>
                {children}
            </StyledSection4>
            </InnerWrapper>
        </TabWrapper>
    )
}


export const TabBar = ({children}) => {
    return (
        <TabBarWrapper>
            {children}
        </TabBarWrapper>
    )
}

