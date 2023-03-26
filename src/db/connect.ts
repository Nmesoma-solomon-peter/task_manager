import mongoose, { Schema, model, connect } from "mongoose";

export const connectdb = (url: string) => {
  if (typeof url !== undefined) {
    return connect(url);
  }
};