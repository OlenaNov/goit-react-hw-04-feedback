import styled from "styled-components";

export const FeedbackCategoryList = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0;
    padding: 0;
`;

export const FeedbackItem = styled.li`
    dislay: inline;
`;

export const CategoryFeedback = styled.p`
    margin-block-start: 0;
    margin-block-end: 0;

    font-size: 36px;
    font-weight: bold;
    color: #d9d9d9;
`;


export const ValueFeedback = styled.span`
    margin-left 20px;
    font-size: 36px;
    font-weight: bold;
    color: #bf4aa8;
`;