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
import { Link } from "react-router-dom";

export function Home() {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState();
    const game = useSelector(select_game);
    const price = useSelector(select_price);

    return (
        <div className="container">
            <Link to="/student">
                <button className="btn btn-success" aria-label="Students">
                    Students
                </button>
            </Link>
            &nbsp;
            <Link to="/society">
                <button className="btn btn-success" aria-label="Society">
                    Society
                </button>
            </Link>
        </div>
    );
}
