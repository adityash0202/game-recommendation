import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    apply,
    select_original_img,
    select_transformed_img,
    select_psnr,
    select_mse,
    select_games,
    get_games,
    select_game1,
    select_game5,
    select_game4,
    select_game3,
    select_game2,
    society,
    select_game,
    select_price,
} from "./algorithmSlice";
import styles from "./Counter.module.css";
import { useEffect } from "react";

export function Society() {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState();
    const game = useSelector(select_game);
    const price = useSelector(select_price);
    const algo = useSelector(select_games);
    useEffect(() => {
        dispatch(get_games());
    }, [dispatch]);
    console.log(game);
    const onSelect = (e) => {
        console.log(e);
        setSelected(e.value);
    };

    return (
        <div className="">
            <div className="pt-2">
                <Select
                    className="btn btn-lg"
                    options={algo}
                    onChange={onSelect}
                />

                <button
                    className="btn btn-success"
                    aria-label="Upload File"
                    onClick={() => dispatch(society(selected))}
                >
                    Society
                </button>
            </div>
            <div>
                Recommended Game:{game} <br />
                Price:{price}
            </div>
        </div>
    );
}
