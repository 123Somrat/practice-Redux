import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice";
import post from "../fetchingData/FetchTodo";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    [post.reducerPath]: post.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(post.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
