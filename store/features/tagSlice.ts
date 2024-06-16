import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface TagSliceState {
  query: string | null
}

const initialState: TagSliceState = {
  query: null
}

export const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string | null>) => {
      state.query = action.payload
    }
  },
  selectors: {
    selectQuery: (state: TagSliceState) => state.query
  }
})

export const { setQuery } = tagSlice.actions
export const { selectQuery } = tagSlice.selectors