import { FC } from "react";
import styles from "../styles/Home.module.css";
import { HStack, Spacer } from "@chakra-ui/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const NavBar: FC = () => {
  return (
    <HStack width="full" padding={4}>
      <Spacer />
      <WalletMultiButton className={styles["wallet-adapter-button-trigger"]} />
    </HStack>
  );
};

export default NavBar;
