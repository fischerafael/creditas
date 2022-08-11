import {
  FormControl,
  FormLabel,
  Slider,
  SliderFilledTrack,
  SliderProps,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";

interface InputSlide extends SliderProps {
  label?: string;
}

export const InputSlider = ({ label, ...props }: InputSlide) => {
  return (
    <FormControl w="full">
      <FormLabel>{label}</FormLabel>
      <Slider
        colorScheme="green"
        aria-label="slider"
        defaultValue={30}
        {...props}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </FormControl>
  );
};
