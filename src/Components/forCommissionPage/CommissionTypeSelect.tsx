import React from "react";
import { FormGroup, FormSelect, FormLabel, FormText } from "react-bootstrap";
import { CommissionType, handleChangeFunction } from "../../types";

interface CommissionTypeSelectProps {
  handleChange: handleChangeFunction;
  undertext: string;
}

const CommissionTypeSelect: React.FC<CommissionTypeSelectProps> = ({
  handleChange,
  undertext,
}) => {
  return (
    <FormGroup className="mb-3">
      <FormLabel>Commission Type</FormLabel>
      <FormSelect
        required
        defaultValue={CommissionType.NONE}
        name="type"
        onChange={handleChange as any}
      >
        <option disabled value={CommissionType.NONE} className="text-secondary">
          select a commission type
        </option>
        <option value={CommissionType.ICON}>Icon</option>
        <option value={CommissionType.FULL}>Full</option>
        <option value={CommissionType.SKETCHPAGE}>Sketch Page</option>
        <option value={CommissionType.OTHER}>Other</option>
      </FormSelect>
      <FormText muted>{undertext}</FormText>
    </FormGroup>
  );
};

export default CommissionTypeSelect;
