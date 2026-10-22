
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    const resp = await fetch("https://dummyjson.com/products");

    if (!resp.ok) {
      throw new Error("Failed to fetch products");
    }

    const result = await resp.json();

    return result.products;
  }
);

const initialState = {
  item: [],
  status: "idle",
  error: null,
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,

  extraReducers: (builder) => {
    builder

      // Pending
      .addCase(fetchProduct.pending, (state) => {
        state.status = "pending";
        state.error = null;
        state.loading = true;
      })

      // Success
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.item = action.payload;
        state.status = "succeeded";
        state.loading = false;
      })

      // Error
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
