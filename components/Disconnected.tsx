import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Container, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { FC, MouseEventHandler, useCallback } from "react";

const Disconnected: FC = () => {
    const modalState = useWalletModal();
    const { wallet, connect } = useWallet();
    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
        if (event.defaultPrevented) {
            return;
        }

        if (!wallet) {
            modalState.setVisible(true);
        } else {
            connect().catch(() => {});
        }
    }, [wallet, connect, modalState]);
    return (
        <Container>
            <VStack spacing={20}>
                <Heading color="white" as="h1" size="3xl" noOfLines={2} textAlign="center">
                    Mint your NFT. Earn $NFT. Level up.
                </Heading>
                <Button bgColor="accent" color="white" maxW="380px" onClick={handleClick}>
                    <HStack>
                        <Text>Become a buildor</Text>
                        <ArrowForwardIcon />
                    </HStack>
                </Button>
            </VStack>
        </Container>
    );
};

export default Disconnected;
