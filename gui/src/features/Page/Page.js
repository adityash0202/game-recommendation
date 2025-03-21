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

export function Page() {
    const original_img = useSelector(select_original_img);
    const transformed_img = useSelector(select_transformed_img);
    const psnr = useSelector(select_psnr);
    const mse = useSelector(select_mse);
    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState();
    const [selected, setSelected] = useState();
    const algo = useSelector(select_games);
    const game1 = useSelector(select_game1);
    const game2 = useSelector(select_game2);
    const game3 = useSelector(select_game3);
    const game4 = useSelector(select_game4);
    const game5 = useSelector(select_game5);
    useEffect(() => {
        dispatch(get_games());
    }, [dispatch]);

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
                    onClick={() => dispatch(apply(selected))}
                >
                    Student
                </button>
            </div>
            {game1 == "" ? (
                <div></div>
            ) : (
                <div>
                    <ul>
                        <li>{game1}</li>
                        <li>{game2}</li>
                        <li>{game3}</li>
                        <li>{game4}</li>
                        <li>{game5}</li>
                    </ul>
                </div>
            )}
        </div>
    );
}
