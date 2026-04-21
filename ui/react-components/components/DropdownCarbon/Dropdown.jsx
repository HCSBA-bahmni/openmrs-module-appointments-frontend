import React from "react";
import { PropTypes } from "prop-types";
import { injectIntl } from "react-intl";
import { Dropdown } from "carbon-components-react";
import Title from "../Title/Title.jsx";

const DropdownCarbon = (props) => {
    const {
        options,
        placeholder,
        label,
        onChange,
        isDisabled,
        selectedValue,
        id,
        titleText,
        isRequired
    } = props;
    const title = titleText && <Title text={titleText} isRequired={isRequired}/>
    const dropdownLabel = placeholder || label || props.intl.formatMessage({
        id: 'CHOOSE_AN_OPTION_LABEL', defaultMessage: 'Choose an option'
    });
    return (
        <div
            data-testid="select dropdown"
            style={{marginRight: "5px"}}
        >
            <Dropdown
                id={id}
                items={options}
                onChange={onChange}
                titleText={title}
                disabled={isDisabled}
                label={dropdownLabel}
                initialSelectedItem={selectedValue}
            />
        </div>
    );
};

export default injectIntl(DropdownCarbon);

DropdownCarbon.propTypes = {
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    placeholder: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    isDisabled: PropTypes.bool
};
