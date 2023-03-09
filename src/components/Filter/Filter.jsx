import React from 'react';
import { Label, Input } from '../ContactForm/ContactForm.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Finds contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};
