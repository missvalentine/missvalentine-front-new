const initialState = {
  show: false,
  message: '',
  type: 'INFO',
  variant: 'MESSAGE',
}

export default function (state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case 'SHOW_MESSAGE':
      return {
        show: true,
        message: payload.message,
        type: payload.type,
        variant: 'MESSAGE',
      }
    case 'SHOW_DIALOG':
      return {
        show: true,
        message: payload.message,
        type: payload.type,
        variant: 'DIALOG',
      }

    default:
      return state
  }
}
