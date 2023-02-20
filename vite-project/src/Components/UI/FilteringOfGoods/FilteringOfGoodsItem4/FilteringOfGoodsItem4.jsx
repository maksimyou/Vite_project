import React, { useEffect } from "react";
import "./FilteringOfGoodsItem4.scss";
function FilteringOfGoodsItem4() {
    useEffect(() => {
        var slider = document.getElementById("slider");
        if (slider) {
            noUiSlider.create(slider, {
                start: [2000, 1500000],
                connect: true,
                step: 1,
                range: {
                    min: [2000],
                    max: [1500000],
                },
            });
            let inp0 = document.getElementById("input0");
            let inp1 = document.getElementById("input1");
            let inputs = [inp0, inp1];
            const setRangeValuese = (i, value) => {
                let arr = [null, null];
                arr[i] = value;
                slider.noUiSlider.set(arr);
            };
            //console.log(slider.noUiSlider);
            slider.noUiSlider.on("update", function (values, handle) {
                console.log(values, handle);
                inputs[handle].value = Math.round(values[handle]);
            });
            inputs.forEach((elem, index) => {
                elem.addEventListener("change", (e) => {
                    setRangeValuese(index, e.currentTarget.value);
                });
            });
        }
    }, []);

    return (
        <div className='filtering_of_goods_content_item-4'>
            <div className='filtering_of_goods_content_item-4_title'>Цена</div>
            <div className='filtering_of_goods_content_item-4_wrap_range'>
                <input
                    type='number'
                    min='2000'
                    max='1500000'
                    name=''
                    id='input0'
                />
                <div className='filtering_of_goods_content_item-4_wrap_range_line'></div>
                <input
                    type='number'
                    min='2000'
                    max='1500000'
                    name=''
                    id='input1'
                />
            </div>
            <div
                className='filtering_of_goods_content_item-4_slider'
                id='slider'
            ></div>
        </div>
    );
}

export default FilteringOfGoodsItem4;
