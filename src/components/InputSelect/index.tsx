import { FormControl, FormLabel, Select, SelectProps } from "@chakra-ui/react";

interface InputSelect extends SelectProps {
  options: string[];
  label: string;
}

export const InputSelect = ({ label, options, ...props }: InputSelect) => {
  return (
    <FormControl w="full">
      <FormLabel>{label}</FormLabel>
      <Select placeholder="Selecione uma opção" {...props} w="full">
        {options.map((option) => (
          <option key={option} value={option} style={{ background: "#68D391" }}>
            {option}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
