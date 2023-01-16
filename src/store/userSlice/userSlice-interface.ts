export interface UserState {
  user: any,
  token: string | null,
  isAuthenticated: boolean,
  reloadWallet: boolean,
  reloadTransactions: boolean,
}

export interface updateUserInterface {
  user: any
}

export interface loginUserInterface extends updateUserInterface {
  token: string | null,
}

export interface updateReloadWalletInterface {
  reloadWallet: boolean
}

export interface updateReloadTransactionstInterface {
  reloadTransactions: boolean
}