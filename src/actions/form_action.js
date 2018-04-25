import SEND from '../constants/form_constant'

export default function send(value) {
  return {
    type: SEND,
    value,
  }
}