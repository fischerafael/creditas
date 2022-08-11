import { Button, Text, VStack } from "@chakra-ui/react";

interface CardProps {
  installment: number;
  total: number;
  interestRate: number;
  onClick: () => void;
}

export const Card = ({
  installment,
  total,
  interestRate,
  onClick,
}: CardProps) => {
  return (
    <VStack
      w="full"
      maxW="300px"
      bg="gray.50"
      color="gray.600"
      p="8"
      borderRadius="8"
      shadow="sm"
      spacing="4"
    >
      <Text>Valor da Parcela</Text>
      <Text fontWeight="bold" fontSize="24px">
        R${" "}
        <Text fontSize="32px" fontWeight="bold" as="span" color="green.300">
          {installment}
        </Text>
      </Text>
      <DisplayLabel title="Total a Pagar" value={`R$ ${0}`} />
      <DisplayLabel title="Taxa de Juros (mês)" value={`${interestRate} %`} />
      <Button
        colorScheme="green"
        bg="green.300"
        borderRadius="full"
        p="4"
        size="lg"
        w="full"
        onClick={onClick}
      >
        Solicitar
      </Button>
    </VStack>
  );
};

interface DisplayLabelProps {
  title: string;
  value: string;
}

const DisplayLabel = ({ title, value }: DisplayLabelProps) => {
  return (
    <VStack w="full" spacing="0">
      <Text color="gray.400" fontSize="xs">
        {title}
      </Text>
      <Text fontWeight="bold">{value}</Text>
    </VStack>
  );
};
