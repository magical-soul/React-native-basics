import { ADD_FRIEND  } from '../../consts/types'

export const addFriend = friendIndex => (
    {
      type: ADD_FRIEND,
      payload: friendIndex,
    }
  );