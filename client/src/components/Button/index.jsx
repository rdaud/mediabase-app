import React from 'react';
import { StyledButton, StatusButtonWrapper, StyledRegularButton, StyledStatusButton, StyledCloseButton, Dot, Icon } from './styles'
import { CTA1 } from '../Typography';

export const Button = ({ variation, iconLeft, children, ...rest }) => {

        switch (variation) {
            case 'primary':
            return (
                <StyledButton type="submit" {...rest}>

                { iconLeft && <Icon>
                    <img src={iconLeft} alt="status" />
                </Icon> } 
                <CTA1 color="white">
                    {children} 
                </CTA1>
            </StyledButton>
            );
            default:
                return (
                    <StyledButton type="submit" {...rest}>
                    { iconLeft && <Icon>
                        <img src={iconLeft} alt="status" />
                    </Icon> } 
                    <CTA1 color="white">
                        {children} 
                    </CTA1>
                </StyledButton>
                );
            
        }
       
    
}

export const SystemButton = (props) => {
    return (
        <StyledCloseButton type="button" {...props}> {props.children} </StyledCloseButton>
    )
}

export const RegularButton = ({iconLeft, iconRight, children, ...rest}) => {
    return (
            <StyledRegularButton type="button" {...rest}>
                { iconLeft && <Icon>
                <img src={iconLeft} alt="status" />
                </Icon> }
                <CTA1>
                    {children}
                </CTA1>
                { iconRight && <Icon>
                <img src={iconRight} alt="status" />
                </Icon> }
            </StyledRegularButton>

    )
}

export const StatusButton = ({ children, icon, IconRight, IconLeft, DotLeft, ...rest}) => {
    return (
        <StatusButtonWrapper>

            { IconLeft && <Icon>
                <img src={IconLeft} alt="status" />
            </Icon> } 

            { DotLeft && <Dot {...rest} /> }

          <StyledStatusButton type="button" {...rest}> {children} </StyledStatusButton>
        
            { IconRight && <Icon>
                <img src={IconRight} alt="status" />
            </Icon> } 
        </StatusButtonWrapper>
    )
}

