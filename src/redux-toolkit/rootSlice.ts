import {createSlice, createAction, PayloadAction} from '@reduxjs/toolkit';
import {UserData, EventItem} from '../utils/Types';

export const logout = createAction('LOGOUT');

interface InitialState {
  user: UserData | null;
  token: string;
  favorites: EventItem[];
}

const initialState: InitialState = {
  user: null,
  token: '',
  favorites: [],
};

const rootSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<EventItem>) => {
      const index = state.favorites.findIndex(
        item => item.event_date_id === action.payload.event_date_id,
      );
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
  extraReducers: builder => builder.addCase(logout, () => initialState),
});

export const {setUser, setToken, toggleFavorite, clearFavorites} =
  rootSlice.actions;

export default rootSlice.reducer;
