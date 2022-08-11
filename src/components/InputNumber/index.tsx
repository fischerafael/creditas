import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
} from "@chakra-ui/react";

interface InputNumberProps extends NumberInputProps {
  label: string;
}

export const InputNumber = ({ label, ...props }: InputNumberProps) => {
  return (
    <FormControl w="full">
      <FormLabel>{label}</FormLabel>
      <NumberInput {...props}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};
