import { jsx } from '@emotion/react';
import { PageTitleContainer, PageTitleStyled } from './PageTitle.style'
import React from 'react'

interface PageTitleProps {
    title: string;
    subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <div>
            <PageTitleContainer>
                <PageTitleStyled>{props.title}</PageTitleStyled>

                {props.subtitle}
            </PageTitleContainer>
        </div>
    );
}

export default PageTitle;