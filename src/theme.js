
export const basicTheme = {
    colors: {
        background: "#eee",
        sectionBackground: "white",
        button: "hsl(221, 79%, 55%)",
        disabled: "gray",
        frame: "#C9C9C9",
        text: "black",
        ckeck: "green",
        buttonInside: "white",
        remove: "#E81111",
        error: "crimson",
    },
    breakpoints: {
        mobile: 540,
    },
    fonts: {
        primaryFont: "'Montserrat', sans-serif",
    },
}

export const darkTheme = {
    ...basicTheme,

    colors: {
        background: "#23232A",
        sectionBackground: "#333342",
        button: "#10A278",
        disabled: "black",
        frame: "#333342",
        text: "white",
        ckeck: "green",
        buttonInside: "white",
        remove: "#E81111",
        error: "crimson",
    },
};
