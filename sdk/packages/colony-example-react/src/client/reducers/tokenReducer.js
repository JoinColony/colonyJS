import * as actions from '../constants/actions'

const initialState = {

  // createToken
  createTokenError: null,
  createTokenLoading: false,
  createTokenSuccess: false,

  // getToken
  getTokenError: null,
  getTokenLoading: false,
  getTokenSuccess: false,

  // mintTokens
  mintTokensError: null,
  mintTokensLoading: false,
  mintTokensSuccess: false,

  // setTokenOwner
  setTokenOwnerError: null,
  setTokenOwnerLoading: false,
  setTokenOwnerSuccess: false,

  // token
  token: null,

  // tokenAddress
  tokenAddress: null,

}

const tokenReducer = (state = initialState, action) => {

  switch (action.type) {

    // createToken

    case actions.CREATE_TOKEN:
      return {
        ...state,
        createTokenError: null,
        createTokenLoading: true,
        createTokenSuccess: false,
      }

    case actions.CREATE_TOKEN_ERROR:
      return {
        ...state,
        createTokenError: action.payload,
        createTokenLoading: false,
      }

    case actions.CREATE_TOKEN_SUCCESS:
      return {
        ...state,
        createTokenLoading: false,
        createTokenSuccess: action.payload,
      }

    // getToken

    case actions.GET_TOKEN:
      return {
        ...state,
        getTokenError: null,
        getTokenLoading: true,
        getTokenSuccess: false,
      }

    case actions.GET_TOKEN_ERROR:
      return {
        ...state,
        getTokenError: action.payload,
        getTokenLoading: false,
      }

    case actions.GET_TOKEN_SUCCESS:
      return {
        ...state,
        getTokenLoading: false,
        getTokenSuccess: action.payload,
      }

    // mintTokens

    case actions.MINT_TOKENS:
      return {
        ...state,
        mintTokensError: null,
        mintTokensLoading: true,
        mintTokensSuccess: false,
      }

    case actions.MINT_TOKENS_ERROR:
      return {
        ...state,
        mintTokensError: action.payload,
        mintTokensLoading: false,
      }

    case actions.MINT_TOKENS_SUCCESS:
      return {
        ...state,
        mintTokensLoading: false,
        mintTokensSuccess: action.payload,
      }

    // setTokenOwner

    case actions.SET_TOKEN_OWNER:
      return {
        ...state,
        setTokenOwnerError: null,
        setTokenOwnerLoading: true,
        setTokenOwnerSuccess: false,
      }

    case actions.SET_TOKEN_OWNER_ERROR:
      return {
        ...state,
        setTokenOwnerError: action.payload,
        setTokenOwnerLoading: false,
      }

    case actions.SET_TOKEN_OWNER_SUCCESS:
      return {
        ...state,
        setTokenOwnerLoading: false,
        setTokenOwnerSuccess: action.payload,
      }

    // setStateToken

    case actions.SET_STATE_TOKEN:
      return {
        ...state,
        token: action.payload,
      }

    // setStateTokenAddress

    case actions.SET_STATE_TOKEN_ADDRESS:
      return {
        ...state,
        tokenAddress: action.payload,
      }

    // default

    default:
      return state

  }

}

export default tokenReducer
