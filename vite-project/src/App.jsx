import { useState, useLayoutEffect, useRef } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import "./assets/helpers/_fonts.scss";
import "./assets/helpers/_normalize.scss";
import City from "./Components/hooks/useGetCity";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Catalog/Home/Home";
import Fitness from "./Components/Catalog/Fitness/Fitness";
import { useEffect } from "react";
import cityForMenu from "./assets/data/city";
import IdeasAndCollections from "./Components/IdeasAndCollections/IdeasAndCollections";
import CatalogGoods from "./Components/CatalogGoods/CatalogGoods";
function App() {
    let [showCactalog, setShowCactalog] = useState(false);
    let [callShow, setCallShow] = useState(false);
    let [catalogShow, setCatalogShow] = useState(false);
    let [searchShow, setSearchShow] = useState(false);
    let [showBurgerMenu, setShowBurgerMenu] = useState(false);
    let [like, setLike] = useState([{}]);
    //id: 123, nameCard: "Текст", price: "123456", count: 1
    let [basket, setBasket] = useState([{}]);
    let [comparison, setComparison] = useState([{}]);
    let [city, setCity] = useState();

    let [likeLength, setLikeLength] = useState(0);
    let [basketLength, setBasketLength] = useState(0);
    let [comparisonLength, setComparisonLength] = useState(0);
    let [showFavorites, setShowFavorites] = useState(true);
    let [showBasket, setShowBasket] = useState(true);
    let [showComparison, setShowComparison] = useState(true);
    let [searchSity, setSearchSity] = useState(true);
    const [size, setSize] = useState(0);
    let [listSity, setListSity] = useState(cityForMenu());
    let [showFilter, setShowFilter] = useState(true);

    console.log(cityForMenu());

    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }

        window.addEventListener("resize", updateSize);
        updateSize();

        return () => window.removeEventListener("resize", updateSize);
    }, []);

    function addCardLike(ids, card, pric) {
        let copy = like;
        let has;
        for (const obj of copy) {
            if (obj.id == ids) {
                has = true;
                break;
            } else {
                has = false;
            }
        }
        if (has) {
            setLike(
                copy.filter((elem) => {
                    if (elem.id != ids) {
                        return elem;
                    }
                })
            );
        } else {
            copy.push({ id: ids, nameCard: card, price: pric, count: 1 });
            setLike(copy);
        }

        setLikeLength(like.length);
    }

    function addCardBasket(ids, card, pric) {
        let copy = basket;
        let has;
        for (const obj of copy) {
            if (obj.id == ids) {
                has = true;
                break;
            } else {
                has = false;
            }
        }
        if (has) {
            setBasket(
                copy.filter((elem) => {
                    if (elem.id != ids) {
                        return elem;
                    }
                })
            );
        } else {
            copy.push({ id: ids, nameCard: card, price: pric, count: 1 });
            setBasket(copy);
        }

        setBasketLength(basket.length);
    }
    function addCardComparison(ids, card, pric) {
        let copy = comparison;
        let has;
        for (const obj of copy) {
            if (obj.id == ids) {
                has = true;
                break;
            } else {
                has = false;
            }
        }
        if (has) {
            setComparison(
                copy.filter((elem) => {
                    if (elem.id != ids) {
                        return elem;
                    }
                })
            );
        } else {
            copy.push({ id: ids, nameCard: card, price: pric, count: 1 });
            setComparison(copy);
        }

        setComparisonLength(comparison.length);
    }

    //function addCardLike(ids, card) {
    //  let copy = like;
    //  let has;
    //  for (const obj of copy) {
    //    if (obj.id == ids) { has = true; break; } else { has = false; }
    //  };
    //  if (has) {
    //    copy.map(elem => {
    //      if (elem.id == ids && elem.count >= 1) {
    //        elem.count += 1;
    //        return elem;
    //      } else {
    //        return elem;
    //      }
    //    });
    //  } else {
    //    copy.push({ id: ids, nameCard: card, count: 1 })
    //  }

    //  setLike(copy);
    //  setLikeLength(like.length)

    //};

    function sortedCity(event) {
        //let copy = cityForMenu();
        setListSity(
            Object.values(cityForMenu()).filter((elem) => {
                return elem.includes(event.target.value);
            })
        );
    }

    useEffect(() => {
        City().then((res) => {
            setCity(cityForMenu()[res]);
            console.log(cityForMenu()["Cheboksary"]);
        });
        sortedCity;
        addCardLike;
        //cityForMenu;
    }, []);

    return (
        <div className='App'>
            <Routes>
                <Route
                    path='/'
                    element={
                        <Layout
                            setCity={setCity}
                            sortedCity={sortedCity}
                            listSity={listSity}
                            searchSity={searchSity}
                            setSearchSity={setSearchSity}
                            city={city}
                            size={size}
                            setSize={setSize}
                            showCactalog={showCactalog}
                            setShowCactalog={setShowCactalog}
                            showComparison={showComparison}
                            comparisonLength={comparisonLength}
                            comparison={comparison}
                            setShowComparison={setShowComparison}
                            setComparison={setComparison}
                            basket={basket}
                            addCardComparison={addCardComparison}
                            showFavorites={showFavorites}
                            setShowFavorites={setShowFavorites}
                            likeLength={likeLength}
                            basketLength={basketLength}
                            addCardLike={addCardLike}
                            setLike={setLike}
                            like={like}
                            setShowBurgerMenu={setShowBurgerMenu}
                            showBurgerMenu={showBurgerMenu}
                            searchShow={searchShow}
                            setSearchShow={setSearchShow}
                            callShow={callShow}
                            setCallShow={setCallShow}
                            setCatalogShow={setCatalogShow}
                            catalogShow={catalogShow}
                        />
                    }
                >
                    <Route index element={<Main />} />
                    <Route path='home' element={<Home />} />
                    <Route
                        path='home/:title'
                        element={
                            <CatalogGoods
                                showFilter={showFilter}
                                setShowFilter={setShowFilter}
                                addCardBasket={addCardBasket}
                                comparison={comparison}
                                basket={basket}
                                addCardComparison={addCardComparison}
                                like={like}
                                addCardLike={addCardLike}
                            />
                        }
                    />
                    <Route path='fitness' element={<Fitness />} />
                    <Route
                        path='ideas-and-collections'
                        element={<IdeasAndCollections />}
                    >
                        <Route path=':id' element={<IdeasAndCollections />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
