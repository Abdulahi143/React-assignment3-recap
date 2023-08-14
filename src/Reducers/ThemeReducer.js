const ThemeReducer = (state, action) => {

    switch (action.type) {
        case "theme":
            return state === "light" ? "dark" : "light";

            default:
                throw new Error("Not valid theme");
    }
};