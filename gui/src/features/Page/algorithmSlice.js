import { createSlice } from "@reduxjs/toolkit";
import http from "../../http-common";
import { Buffer } from "buffer";
const initialState = {
    original_img: null,
    transformed_img: null,
    psnr: 0,
    mse: 0,
    games: [],
    game1: "",
    game2: "",
    game3: "",
    game4: "",
    game5: "",
    game: "",
    price: 0,
};

export const algorithmSlice = createSlice({
    name: "algorithm",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        transform: (state, action) => {
            console.log(action.payload);
            // new Buffer.from(buffered).toString("base64");
            state.games = action.payload.games;
            state.game1 = action.payload.game1;
            state.game2 = action.payload.game2;
            state.game3 = action.payload.game3;
            state.game4 = action.payload.game4;
            state.game5 = action.payload.game5;
            state.game = action.payload.game;
            state.price = action.payload.price;
            state.original_img = action.payload.original_img;
            state.psnr = action.payload.psnr;
            state.mse = action.payload.mse;
            console.log(state);
        },
    },
});

export const { transform } = algorithmSlice.actions;

export const select_original_img = (state) => state.algorithm.original_img;
export const select_games = (state) => state.algorithm.games;
export const select_recommend_games = (state) => state.algorithm.recommendation;
export const select_game1 = (state) => state.algorithm.game1;
export const select_game2 = (state) => state.algorithm.game2;
export const select_game3 = (state) => state.algorithm.game3;
export const select_game4 = (state) => state.algorithm.game4;
export const select_game5 = (state) => state.algorithm.game5;
export const select_game = (state) => state.algorithm.game;
export const select_psnr = (state) => state.algorithm.psnr;
export const select_price = (state) => state.algorithm.price;
export const select_mse = (state) => state.algorithm.mse;
export const select_transformed_img = (state) =>
    state.algorithm.transformed_img;

export const get_games = () => (dispatch, getState) => {
    //dispatch({ type: IMAGE_LOADING });

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    http.get("/get_games", config)
        .then((res) => {
            console.log(res.data);
            dispatch(
                transform({
                    games: res.data.games.map((option) => ({
                        value: option,
                        label: option,
                    })),
                })
            );
        })
        .catch((err) => {
            console.log(err);
        });
};

export const apply = (title) => (dispatch, getState) => {
    //dispatch({ type: IMAGE_LOADING });
    console.log(title);
    const formData = new FormData();
    formData.append("Title", title);
    // dispatch(transform({ original_img: img, transformed_img: img }));
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    http.post("/get_student_recommendations/", formData, config)
        .then((res) => {
            console.log(res.data);
            dispatch(
                transform({
                    game1: res.data["game1"],
                    game2: res.data["game2"],
                    game3: res.data["game3"],
                    game4: res.data["game4"],
                    game5: res.data["game5"],
                })
            );
        })
        .catch((err) => {
            console.log(err);
        });
};
export const society = (title) => (dispatch, getState) => {
    //dispatch({ type: IMAGE_LOADING });
    console.log(title);
    const formData = new FormData();
    formData.append("Title", title);
    // dispatch(transform({ original_img: img, transformed_img: img }));
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    http.post("/get_society_recommendations/", formData, config)
        .then((res) => {
            console.log(res.data);
            dispatch(
                transform({
                    game: res.data["Game"],
                    price: res.data["Price"],
                })
            );
        })
        .catch((err) => {
            console.log(err);
        });
};

export default algorithmSlice.reducer;
