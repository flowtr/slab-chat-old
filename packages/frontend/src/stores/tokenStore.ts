import { observable, intercept } from "mobx";

export const tokenStore = observable({
  token: localStorage.getItem("token") || ""
});

intercept(tokenStore, "token", (change) => {
  if (!change.newValue) 
    // Ignore attempts to unset the background color.
    return null;
  

  localStorage.setItem("token", change.newValue);

  return change;
});
