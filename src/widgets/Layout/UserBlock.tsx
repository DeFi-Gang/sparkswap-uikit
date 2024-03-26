import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  inHeader?: boolean;
  fullWidth?: boolean;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, inHeader, fullWidth }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <>
      {account ? (
        <Button
          size={inHeader ? "sm" : "md"}
          fullWidth={fullWidth}
          variant="primary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          size={inHeader ? "sm" : "md"}
          fullWidth={fullWidth}
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          {inHeader ? "Connect" : "Connect wallet"}
        </Button>
      )}
    </>
  );
};

export default UserBlock;
