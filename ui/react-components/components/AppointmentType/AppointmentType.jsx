import React from "react";
import PropTypes from "prop-types";
import {injectIntl} from "react-intl";
import { Checkbox } from 'carbon-components-react';



const AppointmentType = props => {

    const {intl, onChange, appointmentType, isTeleconsultation, isTeleconsultationDisabled } = props;

    const isVirtual = () => {
        return appointmentType === "Virtual" || isTeleconsultation;
    }

    return (
        <div data-testid="add-tele-consultation">
            <Checkbox
                id="teleconsultation-checkbox"
                onChange={onChange}
                defaultChecked={isVirtual()}
                labelText={intl.formatMessage({id: 'TELECONSULTATION_APPOINTMENT', defaultMessage: 'Teleconsultation'})}
                disabled={isTeleconsultationDisabled}
            />
    </div>)
};

AppointmentType.propTypes = {
    intl: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    appointmentType: PropTypes.string,
    isTeleconsultation: PropTypes.bool,
    isTeleconsultationDisabled: PropTypes.bool
};

export default injectIntl(AppointmentType);