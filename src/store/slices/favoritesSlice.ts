import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateProps = {
  ids: string[]
}

const initialState: InitialStateProps = {
  ids: []
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.push(action.payload.id)
    },
    removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    }
  }
})

export const addFavorite = favoriteSlice.actions.addFavorite
export const removeFavorite = favoriteSlice.actions.removeFavorite
export default favoriteSlice.reducer
