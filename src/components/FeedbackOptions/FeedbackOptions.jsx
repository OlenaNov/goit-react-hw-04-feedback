import PropTypes from 'prop-types';

const { FeedbackList, FeedbackItem, FeedbackReponse } = require("./FeedbackOptions.styled");

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    const optionsNameNormalized = name => name[0].toUpperCase() + name.slice(1);

    return (
        <FeedbackList>
            {options.map(option => {
                return (
            <FeedbackItem key={option}>
                <FeedbackReponse type="button" name={option} onClick={onLeaveFeedback}>{optionsNameNormalized(option)}</FeedbackReponse>
            </FeedbackItem>
                );
            })}

        </FeedbackList>    
        );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
};