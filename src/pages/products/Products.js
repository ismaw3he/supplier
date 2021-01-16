import React, { useState } from 'react';
import { connect } from "react-redux";
import TopNav from "../../components/topNav/TopNav";
import LeftMenu from "../../components/leftMenu/LeftMenu";
import RightPage from "../../components/rightPage/RightPage";
import classes from "./style/style.module.css";
import hat from "./img/hat.png";
import shoes from "./img/shoes.png";
import socks from "./img/stocks.png";
import backpack from "./img/backpack.png";
function Products({ userData }) {
    const [active, setActive] = useState(false)
    const [listOption, setListOption] = useState(0);
    const data = [
        {
            name: "Women’s Jester Backpack",
            price: "69.00",
            category: "Backpacks",
            image: shoes,
            options: ["Waterproof", "Hoodded", "Packable"]
        },
        {
            name: "Women’s Jester Backpack",
            price: "69.00",
            category: "Backpacks",
            image: socks,
            options: ["Waterproof",  "Waterproof", "Packable"]
        },
        {
            name: "Women’s Jester Backpack",
            price: "69.00",
            category: "Backpacks",
            image: hat,
            options: ["Waterproof", "Hoodded", "Packable"]
        },
        {
            name: "Women’s Jester Backpack",
            price: "69.00",
            category: "Backpacks",
            image: backpack,
            options: ["FUTURELIGHT™ JACKET", "Packable", "Waterproof", "Hoodded"]
        },
        {
            name: "Women’s Jester Backpack",
            price: "69.00",
            category: "Backpacks",
            image: shoes,
            options: ["Waterproof", "Hoodded", "Packable"]
        },
        {
            name: "Women’s Jester Backpack",
            price: "69.00",
            category: "Backpacks",
            image: socks,
            options: ["Waterproof", "Hoodded", "Waterproof", "Packable"]
        },
        {
            name: "Women’s Jester Backpack",
            price: "69.00",
            category: "Backpacks",
            image: hat,
            options: ["Waterproof", "Hoodded", "Packable"]
        },
        {
            name: "Women’s Jester Backpack",
            price: "69.00",
            category: "Backpacks",
            image: backpack,
            options: ["FUTURELIGHT™ JACKET", "Packable", "Waterproof", "Hoodded"]
        },
        {
            name: "Women’s Jester Backpack",
            price: "69.00",
            category: "Backpacks",
            image: shoes,
            options: ["Waterproof", "Hoodded", "Packable"]
        },
        {
            name: "Women’s Jester Backpack",
            price: "69.00",
            category: "Backpacks",
            image: socks,
            options: ["Waterproof", "Hoodded", "Waterproof"]
        },
        {
            name: "Women’s Jester Backpack",
            price: "69.00",
            category: "Backpacks",
            image: hat,
            options: ["Waterproof", "Hoodded", "Packable"]
        }
    ]
    return (
        <div>
            <TopNav />
            <LeftMenu active={active} setActive={setActive} />

            <RightPage background={true} active={active}>

                <div className={classes.container}>
                    <div className={classes.header}>
                        <div className={classes.headerButton + " " + classes.activeButton}>
                            All items
                            </div>
                        <div className={classes.headerButton}>
                            Items for Search
                            </div>
                        <div className={classes.headerButton}>
                            Items for Minisite
                            </div>
                        <div className={classes.headerButton}>
                            Photobank
                        </div>
                        <div className={classes.headerOptions}>
                            <div onClick={() => setListOption(0)} className={classes.headerOptionSingle}>
                                <div className={classes.flexCol}>
                                    <div className={classes.singleDot}></div>
                                    <div className={classes.singleDot}></div>
                                    <div className={classes.singleDot}></div>
                                </div>
                                <div className={classes.flexCol}>
                                    <div className={classes.singleDot}></div>
                                    <div className={classes.singleDot}></div>
                                    <div className={classes.singleDot}></div>
                                </div>
                                <div className={classes.flexCol}>
                                    <div className={classes.singleDot}></div>
                                    <div className={classes.singleDot}></div>
                                    <div className={classes.singleDot}></div>
                                </div>
                            </div>
                            <div onClick={() => setListOption(1)} className={classes.headerOptionSingle}>
                                <div className={classes.flexCol}>
                                    <div className={classes.singleDot}></div>
                                    <div className={classes.singleHeight}></div>
                                </div>
                                <div className={classes.flexCol}>
                                    <div className={classes.singleDot}></div>
                                    <div className={classes.singleHeight}></div>
                                </div>
                                <div className={classes.flexCol}>
                                    <div className={classes.singleDot}></div>
                                    <div className={classes.singleHeight}></div>
                                </div>
                            </div>
                            <div onClick={() => setListOption(2)} className={classes.headerOptionSingle}>
                                <div className={classes.count2}>
                                    <div className={classes.box3}>
                                        <div className={classes.boxSkill}></div>
                                        <div className={classes.box4}></div>
                                    </div>
                                    <div className={classes.box3}>
                                        <div className={classes.boxSkill}></div>
                                        <div className={classes.box4}></div>
                                    </div>
                                    <div className={classes.box3}>
                                        <div className={classes.boxSkill}></div>
                                        <div className={classes.box4}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={classes.cartsContainer}>
                        
                        <div 
                            className={
                                listOption === 0 ? classes.addItemContainer : 
                                listOption === 1 ? classes.addItemContainer + " " +  classes.addItemLong: 
                                listOption === 2 ? classes.addItemContainer + " " +  classes.addItemWidth: null
                                }>
                             <p className={classes.addItemPlus}>+</p>
                             <p className={classes.addItemText}>Add Item</p>
                        </div>
                        
                        {listOption === 0 ?
                            data.map((item, index) => {
                                return (
                                    <div className={classes.singleCard} key={index}>
                                        <div className={classes.itemImage} style={{ backgroundImage: `url(${item.image})` }}></div>
                                        <div className={classes.cardTextContainer}>
                                            <h1 className={classes.itemCategory}>{item.category}</h1>
                                            <h1 className={classes.itemName}>{item.name}</h1>
                                            <h1 className={classes.itemPrice}>$ {item.price}</h1>
                                        </div>
                                    </div>
                                )
                            }) :
                            listOption === 1 ?
                                data.map((item, index) => {
                                    return (
                                        <div className={classes.singleCardLong} key={index}>
                                            <div className={classes.longMiddle}>
                                                <div className={classes.itemImage} style={{ backgroundImage: `url(${item.image})` }}></div>

                                                <div className={classes.cardTextContainer}>
                                                    <h1 className={classes.itemCategory}>{item.category}</h1>
                                                    <h1 className={classes.itemName}>{item.name}</h1>

                                                    {item.options.map((option, optionIndex) =>
                                                        <div key={optionIndex} className={classes.cardDotContainer}>
                                                            <div className={classes.cardDot}></div>
                                                            <p className={classes.cardDotText}>{option}</p>
                                                        </div>)
                                                    }
                                                    <h1 className={classes.itemPrice}>$ {item.price}</h1>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                                :
                                listOption === 2 ?
                                    data.map((item, index) => {
                                        return (
                                            <div className={classes.singleCardWidth} key={index}>
                                                <div className={classes.widthMiddle}>
                                                    <div className={classes.widthImgContainer}>
                                                        <div className={classes.itemImage} style={{ backgroundImage: `url(${item.image})` }}></div>
                                                        <div className={classes.widthArrow}>
                                                            <div className={classes.widthArrowLeft}> {"<"} </div>
                                                            <div className={classes.widthArrowRight}>{">"}</div>
                                                        </div>

                                                    </div>

                                                    <div className={classes.widthTextContainer}>
                                                        <h1 className={classes.widthCategoryText}>{item.category}</h1>
                                                        <h1 className={classes.widthItemName}>{item.name}</h1>

                                                        {item.options.map((option, optionIndex) =>
                                                            <div key={optionIndex} className={classes.cardDotContainer}>
                                                                <div className={classes.cardDot}></div>
                                                                <p className={classes.cardDotText}>{option}</p>
                                                            </div>)
                                                        }
                                                    </div>

                                                    <div className={classes.widthPriceContainer}>
                                                        <h1 className={classes.widthPrice}>$ 69.00</h1>
                                                        <div className={classes.showMore}>
                                                                Show more
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    : null}


                    </div>
                </div>
            </RightPage>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.logIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // logInUser: (logInData) => { dispatch(logInUser(logInData)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);