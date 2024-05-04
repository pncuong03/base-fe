const env = (window as any).env || process.env;

export const API_ENDPOINT = env.REACT_APP_API_ENDPOINT;
export const API_COINGECKO_ENDPOINT = env.REACT_APP_API_COINGECKO_ENDPOINT;

// export const FAUCET_OBJECT_ID = env.REACT_APP_FAUCET_OBJECT_ID;
// export const FAUCET_ARGUMENT_ID = env.REACT_APP_FAUCET_ARGUMENT_ID;

// export const SUI_OBJECT = env.REACT_APP_SUI_OBJECT;
// export const GIL_OBJECT = env.REACT_APP_GIL_OBJECT;
// export const USDT_OBJECT = env.REACT_APP_USDT_OBJECT;

// export const DEX_OBJECT_ID = env.REACT_APP_DEX_OBJECT_ID;
// export const GLOBAL_OBJECT_ID = env.REACT_APP_GLOBAL_OBJECT_ID;

export const IS_MAINTAIN = env.REACT_APP_IS_MAINTAIN;
