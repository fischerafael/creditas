import {
  Button,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { InputNumber } from "../../components/InputNumber";
import { InputSelect } from "../../components/InputSelect";
import { InputSlider } from "../../components/InputSlider";

const IOF = 6.38;
const INTEREST_RATE = 2.34;

export const PageCalculator = () => {
  const [maxValue, setMaxValue] = useState(0);

  const [values, setValues] = useState({
    installments: 1,
    warranty: "Veículo",
    deposit: 0,
    loan: 0,
  });

  useEffect(() => {
    const totalValue =
      (IOF / 100 + INTEREST_RATE / 100 + values.installments / 1000 + 1) *
      values.loan;

    const valorDaParcela = totalValue / values.installments;
    console.log("valor total", totalValue);
    console.log("parcela", valorDaParcela);
  }, [values]);

  useEffect(() => {
    const maxValue = values.deposit * 0.8;
    setMaxValue(maxValue);
  }, [values.deposit]);

  return (
    <VStack w="full" minH="100vh" bg="gray.50" spacing="0">
      <Header />
      <VStack
        w="full"
        bg="green.300"
        h="90vh"
        color="gray.50"
        fontFamily="sans-serif"
      >
        <HStack w="full" h="full" maxW="container.lg" align="center">
          <VStack w="full" h="full" justify="center" spacing="16">
            <Text fontSize="5xl" lineHeight="1.25">
              Realize uma simulação de crédito utilizando seu bem como garantia.
            </Text>

            <SimpleGrid columns={2} w="full" gap="8">
              <InputNumber
                min={1}
                defaultValue={1}
                max={48}
                label="Número de parcelas"
                value={values.installments}
                onChange={(value) =>
                  setValues((state) => ({
                    ...state,
                    installments: Number(value),
                  }))
                }
              />
              <InputSelect
                label="Garantia"
                options={["Veículo", "Imóvel"]}
                value={values.warranty}
                onChange={(e) =>
                  setValues((state) => ({ ...state, warranty: e.target.value }))
                }
              />
              <InputNumber
                min={10000}
                max={1000000}
                label="Valor da Garantia"
                value={values.deposit}
                onChange={(value) =>
                  setValues((state) => ({
                    ...state,
                    deposit: Number(value),
                  }))
                }
              />
              <VStack w="full" justify="flex-end" pb="2">
                <InputSlider
                  min={10000}
                  max={1000000}
                  value={values.deposit}
                  onChange={(value) =>
                    setValues((state) => ({
                      ...state,
                      deposit: Number(value),
                    }))
                  }
                />
              </VStack>

              <InputNumber
                min={0}
                max={maxValue}
                label="Valor do Empréstimo"
                value={values.loan}
                onChange={(value) =>
                  setValues((state) => ({
                    ...state,
                    loan: Number(value),
                  }))
                }
              />
              <VStack w="full" justify="flex-end" pb="2">
                <InputSlider
                  min={1000}
                  max={1000000}
                  value={values.loan}
                  onChange={(value) =>
                    setValues((state) => ({
                      ...state,
                      loan: Number(value),
                    }))
                  }
                />
              </VStack>
            </SimpleGrid>
          </VStack>

          <VStack w="full" h="full" justify="center" align="flex-end">
            <Card
              installment={0}
              interestRate={0}
              onClick={() => alert("Solicitado")}
              total={0}
            />
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};
