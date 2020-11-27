import React, { useState } from "react";
import classes from "./style/style.module.css";
import arrowRight from "./assets/icon/btn-arrow-right.svg";

const LeftCategories = () => {

    // const [categories, setCategories] = useState([
    //     {
    //         name: "Infant & Toddlers Clothing",
    //         subcategories: [
    //             {
    //                 name: "Baby Bibs",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Baby Clothing Sets",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Baby Coats & outwear",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Baby Dresses",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Baby Hoodies & Sweatshirts",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Baby Jackets",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Baby Pants & Shorts",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Baby Rompers",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Baby Shirts & Tops",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Baby Skirts",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Baby Sleeping Bags",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Baby Socks",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Baby Sweaters",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Baby T-Shirts",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Baby Underwear",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Baby Vests & Waistcoats",
    //                 subcategories: null
    //             },
    //             {
    //                 name: "Other Baby Clothing",
    //                 subcategories: null
    //             }
    //         ]
    //     },
    //     {
    //         name: "Women's Clothing",
    //         subcategories:
    //             [
    //                 {
    //                     name: "Jumpsuits, Playsuits & Bodysuits",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Maternity Clothing",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Hosiery",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Shorts",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Sleepwear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Blouses & Shirts",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Coats",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Down Coats",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Hoodies & Sweatshirts",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Jackets",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Jeans",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Pants & Trousers",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Parkas",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Polo Shirts",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Sets",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Suits & Tuxedo",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Sweaters",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's T-Shirts",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Tank Tops",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Trench Coats",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Underwear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Vests & Waistcoats",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Women's Wool & Blends",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Womens Dresses",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Womens Leggings",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Womens Skirts",
    //                     subcategories: null
    //                 }
    //             ]
    //     },
    //     {
    //         name: "Children's Clothing",
    //         subcategories: [
    //             {
    //                 name: "Boy's clothing",
    //                 subcategories: [
    //                     {
    //                         name: "Boy's Clothing Sets",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's Coats & Outwear",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's Hoodies & Sweatshirts",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's Jackets",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's Jeans",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's Pants & Trousers",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's Polo Shirts",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's Shirts",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's Shorts",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's Sleepwear",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's Socks",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's Suits & Blazers",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's Sweaters",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's T-Shirts",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's Tank Tops",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's Underwear",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Boy's Vests & Waistcoats",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Other Boy's Clothing",
    //                         subcategories: null
    //                     }
    //                 ]
    //             },
    //             {
    //                 name: "Girl's clothing",
    //                 subcategories: [
    //                     {
    //                         name: "Girl's Hoodies & Sweatshirts",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girl's Blouses & Shirts",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girl's Clothing Sets",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girl's Coats & Outwear",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girl's Jackets",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girl's Jeans",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girl's Jumpsuits & Rompers",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girl's Pants & Trousers",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girl's Polo Shirts",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girl's Shorts",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girl's Sleepwear",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girl's Socks & Hosiery",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girl's Sweaters",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girl's T-Shirts",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girl's Underwear",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girl's Vests & Waistcoats",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girls' Dresses",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Girls' Skirts",
    //                         subcategories: null
    //                     },
    //                     {
    //                         name: "Other Girl's Clothing",
    //                         subcategories: null
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         name: "Men's Clothing",
    //         subcategories:
    //             [
    //                 {
    //                     name: "Men's Coats",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Down Coat",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Hoodies & Sweatshirts",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Jackets",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Jeans",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Leggings",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Pants & Trousers",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Parkas",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Polo Shirts",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Sets",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Shirts",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Shorts",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Sleepwear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Sleepwear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Socks",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Suits & Blazer",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Sweaters",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's T-Shirts",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Tank Tops",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Vests & Waistcoats",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Men's Underwear",
    //                     subcategories: null
    //                 }
    //             ]
    //     },
    //     {
    //         name: "Garment & Processing Accessories",
    //         subcategories:
    //             [
    //                 {
    //                     name: "Badges",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Boning",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Braid",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Buckles",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Buttons",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Cords",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Garment Beads",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Garment Clips",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Garment Eyelets",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Garment Hooks",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Garment Labels",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Garment Rivets",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Garment Tags",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Hook & Loop Tape",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Interlinings & Linings",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Knitting Rib",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Lace",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Mannequins",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Other Garment Accessories",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Patches",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Rhinestones",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Ribbons",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Sequins",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Sewing Supplies",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Shoulder Pads",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Stopper",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Tag Guns",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Trimming",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Underwear Accessories",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Webbing",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Zippers & Accessories",
    //                     subcategories: null
    //                 }
    //             ]
    //     },
    //     {
    //         name: "Novelty & Special Use",
    //         subcategories:
    //             [
    //                 {
    //                     name: "Costumes",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Ethnic Clothing",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Stage & Dance Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Uniforms",
    //                     subcategories: null
    //                 }
    //             ]
    //     },

    //     {
    //         name: "Other Apparel",
    //         subcategories:
    //             [
    //                 {
    //                     name: "Apparel Design Services",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Apparel Processing Services",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Apparel Stock",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Other Apparel",
    //                     subcategories: null
    //                 }
    //             ]
    //     },
    //     {
    //         name: "Sportswear",
    //         subcategories:
    //             [
    //                 {
    //                     name: "Baseball & Softball Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Basketball Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Cheerleading Uniforms",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Cycling Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "E-sports Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Fishing Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Fitness & Yoga Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Hunting Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Martial Arts Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Motorcycle & Auto Racing Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Other Sportswear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Outdoor&Hiking Clothing",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Rash Guard",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Ski & Snow Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Soccer Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Sports Socks",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Swimwear & Beachwear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Tennis Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Training&Jogging Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Volleyball Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Wetsuits",
    //                     subcategories: null
    //                 }
    //             ]
    //     },
    //     {
    //         name: "Wedding Apparel & Accessories",
    //         subcategories:
    //             [
    //                 {
    //                     name: "Boys' Attire",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Bridesmaid Dresses",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Flower Girls' Dresses",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Groom Wear",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Mother of the Bride Dresses",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Other Wedding Apparel",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Wedding Accessories",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Wedding Dresses",
    //                     subcategories: null
    //                 }
    //             ]
    //     },

    //     {
    //         name: "Fabric",
    //         subcategories:
    //             [
    //                 {
    //                     name: "Carbon Fiber Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Cotton Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Denim Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "ECO-Friendly Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Embroidery Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Functional Fabric & Outdoor Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Grey Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Home Textile Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Industrial Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Mixed Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Nonwoven Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Nylon Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Other Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Polyester Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Polypropylene Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Rayon & Viscose & Modal Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Recycle Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Sequin Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Silk Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Spandex Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Tweed Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Wool & Cashmere Fabric",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Yarn Dyed Fabric",
    //                     subcategories: null
    //                 }
    //             ]
    //     },
    //     {
    //         name: "Down & Feather",
    //         subcategories:
    //             [
    //                 {
    //                     name: "Down",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Feather",
    //                     subcategories: null
    //                 }
    //             ]
    //     },
    //     {
    //         name: "Fiber",
    //         subcategories:
    //             [
    //                 {
    //                     name: "Acrylic Fiber",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Aramid Fiber",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Bamboo Fiber",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Hemp Fiber",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Jute Fiber",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Linen Fiber",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Modacrylic Fiber",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Nylon Fiber",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Other Fiber",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Polyester Fiber",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Polypropylene Fiber",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Raw Cotton",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Silk Fiber",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "UHMWPE Fiber",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Viscose Fiber",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Wool Fiber",
    //                     subcategories: null
    //                 }
    //             ]
    //     },
    //     {
    //         name: "Leather",
    //         subcategories:
    //             [
    //                 {
    //                     name: "Genuine Leather",
    //                     subcategories: null
    //                 },
    //                 {
    //                     name: "Synthetic Leather",
    //                     subcategories: null
    //                 }
    //             ]
    //     },
    //     {
    //         name: "Textile Accessories",
    //         subcategories:
    //             [
    //                 {
    //                     name: "Tassel Fringe",
    //                     subcategories: null
    //                 }
    //             ]
    //     }
    // ])
    const [isActive, setIsActive] = useState("none")
    const categories = [
        {
            name: "Infant & Toddlers Clothing",
            subcategories: [
                {
                    name: "Baby Bibs",
                    subcategories: null
                },
                {
                    name: "Baby Clothing Sets",
                    subcategories: null
                },
                {
                    name: "Baby Coats & outwear",
                    subcategories: null
                },
                {
                    name: "Baby Dresses",
                    subcategories: null
                },
                {
                    name: "Baby Hoodies & Sweatshirts",
                    subcategories: null
                },
                {
                    name: "Baby Jackets",
                    subcategories: null
                },
                {
                    name: "Baby Pants & Shorts",
                    subcategories: null
                },
                {
                    name: "Baby Rompers",
                    subcategories: null
                },
                {
                    name: "Baby Shirts & Tops",
                    subcategories: null
                },
                {
                    name: "Baby Skirts",
                    subcategories: null
                },
                {
                    name: "Baby Sleeping Bags",
                    subcategories: null
                },
                {
                    name: "Baby Socks",
                    subcategories: null
                },
                {
                    name: "Baby Sweaters",
                    subcategories: null
                },
                {
                    name: "Baby T-Shirts",
                    subcategories: null
                },
                {
                    name: "Baby Underwear",
                    subcategories: null
                },
                {
                    name: "Baby Vests & Waistcoats",
                    subcategories: null
                },
                {
                    name: "Other Baby Clothing",
                    subcategories: null
                }
            ]
        },
        {
            name: "Women's Clothing",
            subcategories:
                [
                    {
                        name: "Jumpsuits, Playsuits & Bodysuits",
                        subcategories: null
                    },
                    {
                        name: "Maternity Clothing",
                        subcategories: null
                    },
                    {
                        name: "Women's Hosiery",
                        subcategories: null
                    },
                    {
                        name: "Women's Shorts",
                        subcategories: null
                    },
                    {
                        name: "Women's Sleepwear",
                        subcategories: null
                    },
                    {
                        name: "Women's Blouses & Shirts",
                        subcategories: null
                    },
                    {
                        name: "Women's Coats",
                        subcategories: null
                    },
                    {
                        name: "Women's Down Coats",
                        subcategories: null
                    },
                    {
                        name: "Women's Hoodies & Sweatshirts",
                        subcategories: null
                    },
                    {
                        name: "Women's Jackets",
                        subcategories: null
                    },
                    {
                        name: "Women's Jeans",
                        subcategories: null
                    },
                    {
                        name: "Women's Pants & Trousers",
                        subcategories: null
                    },
                    {
                        name: "Women's Parkas",
                        subcategories: null
                    },
                    {
                        name: "Women's Polo Shirts",
                        subcategories: null
                    },
                    {
                        name: "Women's Sets",
                        subcategories: null
                    },
                    {
                        name: "Women's Suits & Tuxedo",
                        subcategories: null
                    },
                    {
                        name: "Women's Sweaters",
                        subcategories: null
                    },
                    {
                        name: "Women's T-Shirts",
                        subcategories: null
                    },
                    {
                        name: "Women's Tank Tops",
                        subcategories: null
                    },
                    {
                        name: "Women's Trench Coats",
                        subcategories: null
                    },
                    {
                        name: "Women's Underwear",
                        subcategories: null
                    },
                    {
                        name: "Women's Vests & Waistcoats",
                        subcategories: null
                    },
                    {
                        name: "Women's Wool & Blends",
                        subcategories: null
                    },
                    {
                        name: "Womens Dresses",
                        subcategories: null
                    },
                    {
                        name: "Womens Leggings",
                        subcategories: null
                    },
                    {
                        name: "Womens Skirts",
                        subcategories: null
                    }
                ]
        },
        {
            name: "Children's Clothing",
            subcategories: [
                {
                    name: "Boy's clothing",
                    subcategories: [
                        {
                            name: "Boy's Clothing Sets",
                            subcategories: null
                        },
                        {
                            name: "Boy's Coats & Outwear",
                            subcategories: null
                        },
                        {
                            name: "Boy's Hoodies & Sweatshirts",
                            subcategories: null
                        },
                        {
                            name: "Boy's Jackets",
                            subcategories: null
                        },
                        {
                            name: "Boy's Jeans",
                            subcategories: null
                        },
                        {
                            name: "Boy's Pants & Trousers",
                            subcategories: null
                        },
                        {
                            name: "Boy's Polo Shirts",
                            subcategories: null
                        },
                        {
                            name: "Boy's Shirts",
                            subcategories: null
                        },
                        {
                            name: "Boy's Shorts",
                            subcategories: null
                        },
                        {
                            name: "Boy's Sleepwear",
                            subcategories: null
                        },
                        {
                            name: "Boy's Socks",
                            subcategories: null
                        },
                        {
                            name: "Boy's Suits & Blazers",
                            subcategories: null
                        },
                        {
                            name: "Boy's Sweaters",
                            subcategories: null
                        },
                        {
                            name: "Boy's T-Shirts",
                            subcategories: null
                        },
                        {
                            name: "Boy's Tank Tops",
                            subcategories: null
                        },
                        {
                            name: "Boy's Underwear",
                            subcategories: null
                        },
                        {
                            name: "Boy's Vests & Waistcoats",
                            subcategories: null
                        },
                        {
                            name: "Other Boy's Clothing",
                            subcategories: null
                        }
                    ]
                },
                {
                    name: "Girl's clothing",
                    subcategories: [
                        {
                            name: "Girl's Hoodies & Sweatshirts",
                            subcategories: null
                        },
                        {
                            name: "Girl's Blouses & Shirts",
                            subcategories: null
                        },
                        {
                            name: "Girl's Clothing Sets",
                            subcategories: null
                        },
                        {
                            name: "Girl's Coats & Outwear",
                            subcategories: null
                        },
                        {
                            name: "Girl's Jackets",
                            subcategories: null
                        },
                        {
                            name: "Girl's Jeans",
                            subcategories: null
                        },
                        {
                            name: "Girl's Jumpsuits & Rompers",
                            subcategories: null
                        },
                        {
                            name: "Girl's Pants & Trousers",
                            subcategories: null
                        },
                        {
                            name: "Girl's Polo Shirts",
                            subcategories: null
                        },
                        {
                            name: "Girl's Shorts",
                            subcategories: null
                        },
                        {
                            name: "Girl's Sleepwear",
                            subcategories: null
                        },
                        {
                            name: "Girl's Socks & Hosiery",
                            subcategories: null
                        },
                        {
                            name: "Girl's Sweaters",
                            subcategories: null
                        },
                        {
                            name: "Girl's T-Shirts",
                            subcategories: null
                        },
                        {
                            name: "Girl's Underwear",
                            subcategories: null
                        },
                        {
                            name: "Girl's Vests & Waistcoats",
                            subcategories: null
                        },
                        {
                            name: "Girls' Dresses",
                            subcategories: null
                        },
                        {
                            name: "Girls' Skirts",
                            subcategories: null
                        },
                        {
                            name: "Other Girl's Clothing",
                            subcategories: null
                        }
                    ]
                }
            ]
        },
        {
            name: "Men's Clothing",
            subcategories:
                [
                    {
                        name: "Men's Coats",
                        subcategories: null
                    },
                    {
                        name: "Men's Down Coat",
                        subcategories: null
                    },
                    {
                        name: "Men's Hoodies & Sweatshirts",
                        subcategories: null
                    },
                    {
                        name: "Men's Jackets",
                        subcategories: null
                    },
                    {
                        name: "Men's Jeans",
                        subcategories: null
                    },
                    {
                        name: "Men's Leggings",
                        subcategories: null
                    },
                    {
                        name: "Men's Pants & Trousers",
                        subcategories: null
                    },
                    {
                        name: "Men's Parkas",
                        subcategories: null
                    },
                    {
                        name: "Men's Polo Shirts",
                        subcategories: null
                    },
                    {
                        name: "Men's Sets",
                        subcategories: null
                    },
                    {
                        name: "Men's Shirts",
                        subcategories: null
                    },
                    {
                        name: "Men's Shorts",
                        subcategories: null
                    },
                    {
                        name: "Men's Sleepwear",
                        subcategories: null
                    },
                    {
                        name: "Men's Sleepwear",
                        subcategories: null
                    },
                    {
                        name: "Men's Socks",
                        subcategories: null
                    },
                    {
                        name: "Men's Suits & Blazer",
                        subcategories: null
                    },
                    {
                        name: "Men's Sweaters",
                        subcategories: null
                    },
                    {
                        name: "Men's T-Shirts",
                        subcategories: null
                    },
                    {
                        name: "Men's Tank Tops",
                        subcategories: null
                    },
                    {
                        name: "Men's Vests & Waistcoats",
                        subcategories: null
                    },
                    {
                        name: "Men's Underwear",
                        subcategories: null
                    }
                ]
        },
        {
            name: "Garment & Processing Accessories",
            subcategories:
                [
                    {
                        name: "Badges",
                        subcategories: null
                    },
                    {
                        name: "Boning",
                        subcategories: null
                    },
                    {
                        name: "Braid",
                        subcategories: null
                    },
                    {
                        name: "Buckles",
                        subcategories: null
                    },
                    {
                        name: "Buttons",
                        subcategories: null
                    },
                    {
                        name: "Cords",
                        subcategories: null
                    },
                    {
                        name: "Garment Beads",
                        subcategories: null
                    },
                    {
                        name: "Garment Clips",
                        subcategories: null
                    },
                    {
                        name: "Garment Eyelets",
                        subcategories: null
                    },
                    {
                        name: "Garment Hooks",
                        subcategories: null
                    },
                    {
                        name: "Garment Labels",
                        subcategories: null
                    },
                    {
                        name: "Garment Rivets",
                        subcategories: null
                    },
                    {
                        name: "Garment Tags",
                        subcategories: null
                    },
                    {
                        name: "Hook & Loop Tape",
                        subcategories: null
                    },
                    {
                        name: "Interlinings & Linings",
                        subcategories: null
                    },
                    {
                        name: "Knitting Rib",
                        subcategories: null
                    },
                    {
                        name: "Lace",
                        subcategories: null
                    },
                    {
                        name: "Mannequins",
                        subcategories: null
                    },
                    {
                        name: "Other Garment Accessories",
                        subcategories: null
                    },
                    {
                        name: "Patches",
                        subcategories: null
                    },
                    {
                        name: "Rhinestones",
                        subcategories: null
                    },
                    {
                        name: "Ribbons",
                        subcategories: null
                    },
                    {
                        name: "Sequins",
                        subcategories: null
                    },
                    {
                        name: "Sewing Supplies",
                        subcategories: null
                    },
                    {
                        name: "Shoulder Pads",
                        subcategories: null
                    },
                    {
                        name: "Stopper",
                        subcategories: null
                    },
                    {
                        name: "Tag Guns",
                        subcategories: null
                    },
                    {
                        name: "Trimming",
                        subcategories: null
                    },
                    {
                        name: "Underwear Accessories",
                        subcategories: null
                    },
                    {
                        name: "Webbing",
                        subcategories: null
                    },
                    {
                        name: "Zippers & Accessories",
                        subcategories: null
                    }
                ]
        },
        {
            name: "Novelty & Special Use",
            subcategories:
                [
                    {
                        name: "Costumes",
                        subcategories: null
                    },
                    {
                        name: "Ethnic Clothing",
                        subcategories: null
                    },
                    {
                        name: "Stage & Dance Wear",
                        subcategories: null
                    },
                    {
                        name: "Uniforms",
                        subcategories: null
                    }
                ]
        },

        {
            name: "Other Apparel",
            subcategories:
                [
                    {
                        name: "Apparel Design Services",
                        subcategories: null
                    },
                    {
                        name: "Apparel Processing Services",
                        subcategories: null
                    },
                    {
                        name: "Apparel Stock",
                        subcategories: null
                    },
                    {
                        name: "Other Apparel",
                        subcategories: null
                    }
                ]
        },
        {
            name: "Sportswear",
            subcategories:
                [
                    {
                        name: "Baseball & Softball Wear",
                        subcategories: null
                    },
                    {
                        name: "Basketball Wear",
                        subcategories: null
                    },
                    {
                        name: "Cheerleading Uniforms",
                        subcategories: null
                    },
                    {
                        name: "Cycling Wear",
                        subcategories: null
                    },
                    {
                        name: "E-sports Wear",
                        subcategories: null
                    },
                    {
                        name: "Fishing Wear",
                        subcategories: null
                    },
                    {
                        name: "Fitness & Yoga Wear",
                        subcategories: null
                    },
                    {
                        name: "Hunting Wear",
                        subcategories: null
                    },
                    {
                        name: "Martial Arts Wear",
                        subcategories: null
                    },
                    {
                        name: "Motorcycle & Auto Racing Wear",
                        subcategories: null
                    },
                    {
                        name: "Other Sportswear",
                        subcategories: null
                    },
                    {
                        name: "Outdoor&Hiking Clothing",
                        subcategories: null
                    },
                    {
                        name: "Rash Guard",
                        subcategories: null
                    },
                    {
                        name: "Ski & Snow Wear",
                        subcategories: null
                    },
                    {
                        name: "Soccer Wear",
                        subcategories: null
                    },
                    {
                        name: "Sports Socks",
                        subcategories: null
                    },
                    {
                        name: "Swimwear & Beachwear",
                        subcategories: null
                    },
                    {
                        name: "Tennis Wear",
                        subcategories: null
                    },
                    {
                        name: "Training&Jogging Wear",
                        subcategories: null
                    },
                    {
                        name: "Volleyball Wear",
                        subcategories: null
                    },
                    {
                        name: "Wetsuits",
                        subcategories: null
                    }
                ]
        },
        {
            name: "Wedding Apparel & Accessories",
            subcategories:
                [
                    {
                        name: "Boys' Attire",
                        subcategories: null
                    },
                    {
                        name: "Bridesmaid Dresses",
                        subcategories: null
                    },
                    {
                        name: "Flower Girls' Dresses",
                        subcategories: null
                    },
                    {
                        name: "Groom Wear",
                        subcategories: null
                    },
                    {
                        name: "Mother of the Bride Dresses",
                        subcategories: null
                    },
                    {
                        name: "Other Wedding Apparel",
                        subcategories: null
                    },
                    {
                        name: "Wedding Accessories",
                        subcategories: null
                    },
                    {
                        name: "Wedding Dresses",
                        subcategories: null
                    }
                ]
        },

        {
            name: "Fabric",
            subcategories:
                [
                    {
                        name: "Carbon Fiber Fabric",
                        subcategories: null
                    },
                    {
                        name: "Cotton Fabric",
                        subcategories: null
                    },
                    {
                        name: "Denim Fabric",
                        subcategories: null
                    },
                    {
                        name: "ECO-Friendly Fabric",
                        subcategories: null
                    },
                    {
                        name: "Embroidery Fabric",
                        subcategories: null
                    },
                    {
                        name: "Functional Fabric & Outdoor Fabric",
                        subcategories: null
                    },
                    {
                        name: "Grey Fabric",
                        subcategories: null
                    },
                    {
                        name: "Home Textile Fabric",
                        subcategories: null
                    },
                    {
                        name: "Industrial Fabric",
                        subcategories: null
                    },
                    {
                        name: "Mixed Fabric",
                        subcategories: null
                    },
                    {
                        name: "Nonwoven Fabric",
                        subcategories: null
                    },
                    {
                        name: "Nylon Fabric",
                        subcategories: null
                    },
                    {
                        name: "Other Fabric",
                        subcategories: null
                    },
                    {
                        name: "Polyester Fabric",
                        subcategories: null
                    },
                    {
                        name: "Polypropylene Fabric",
                        subcategories: null
                    },
                    {
                        name: "Rayon & Viscose & Modal Fabric",
                        subcategories: null
                    },
                    {
                        name: "Recycle Fabric",
                        subcategories: null
                    },
                    {
                        name: "Sequin Fabric",
                        subcategories: null
                    },
                    {
                        name: "Silk Fabric",
                        subcategories: null
                    },
                    {
                        name: "Spandex Fabric",
                        subcategories: null
                    },
                    {
                        name: "Tweed Fabric",
                        subcategories: null
                    },
                    {
                        name: "Wool & Cashmere Fabric",
                        subcategories: null
                    },
                    {
                        name: "Yarn Dyed Fabric",
                        subcategories: null
                    }
                ]
        },
        {
            name: "Down & Feather",
            subcategories:
                [
                    {
                        name: "Down",
                        subcategories: null
                    },
                    {
                        name: "Feather",
                        subcategories: null
                    }
                ]
        },
        {
            name: "Fiber",
            subcategories:
                [
                    {
                        name: "Acrylic Fiber",
                        subcategories: null
                    },
                    {
                        name: "Aramid Fiber",
                        subcategories: null
                    },
                    {
                        name: "Bamboo Fiber",
                        subcategories: null
                    },
                    {
                        name: "Hemp Fiber",
                        subcategories: null
                    },
                    {
                        name: "Jute Fiber",
                        subcategories: null
                    },
                    {
                        name: "Linen Fiber",
                        subcategories: null
                    },
                    {
                        name: "Modacrylic Fiber",
                        subcategories: null
                    },
                    {
                        name: "Nylon Fiber",
                        subcategories: null
                    },
                    {
                        name: "Other Fiber",
                        subcategories: null
                    },
                    {
                        name: "Polyester Fiber",
                        subcategories: null
                    },
                    {
                        name: "Polypropylene Fiber",
                        subcategories: null
                    },
                    {
                        name: "Raw Cotton",
                        subcategories: null
                    },
                    {
                        name: "Silk Fiber",
                        subcategories: null
                    },
                    {
                        name: "UHMWPE Fiber",
                        subcategories: null
                    },
                    {
                        name: "Viscose Fiber",
                        subcategories: null
                    },
                    {
                        name: "Wool Fiber",
                        subcategories: null
                    }
                ]
        },
        {
            name: "Leather",
            subcategories:
                [
                    {
                        name: "Genuine Leather",
                        subcategories: null
                    },
                    {
                        name: "Synthetic Leather",
                        subcategories: null
                    }
                ]
        },
        {
            name: "Textile Accessories",
            subcategories:
                [
                    {
                        name: "Tassel Fringe",
                        subcategories: null
                    }
                ]
        }
    ]
    return (
        //  
        <div className={classes.leftCategories} onMouseLeave={() => { setIsActive("none") }} >
            <div className={classes.viewAll}>
                <span>Categories</span>
                <span>View All</span>
            </div>
            <div className={classes.menuCover}>
                {categories.map((item, index) => {
                    return (
                        <div onMouseEnter={() => { setIsActive(item.name) }} className={classes.menu} key={index}>
                            <span>{item.name}</span>
                            <img src={arrowRight} alt="" />
                        </div>
                    )

                })}
            </div>
            {isActive !== "none" ?
                <div className={classes.subMenu}>
                    <div className={classes.yellowLine}></div>
                    <div className={classes.linksContainer}>
                        {
                            categories.map((item,count) => {
                                if (item.name === isActive) {
                                    if (!item.subcategories[0].subcategories) {
                                        return (
                                            <React.Fragment key={count}>
                                                <div className={classes.group}>
                                                    <a href="/" className={classes.groupHead}>{item.name}</a>

                                                    {item.subcategories.map((link, index) => {

                                                        if (index < item.subcategories.length / 2) {
                                                            return (
                                                                <div key={index} className={classes.linkCover}>
                                                                    <a href="/" > {link.name}</a>
                                                                </div>
                                                            )
                                                        }
                                                        return ( <React.Fragment></React.Fragment> )
                                                    })}
                                                </div>
                                                <div className={classes.group}>

                                                    {item.subcategories.map((link, index) => {
                                                        if (index >= item.subcategories.length / 2) {
                                                            return (
                                                                <div key={index} className={classes.linkCover}>
                                                                    <a href="/" > {link.name}</a>
                                                                </div>
                                                            )
                                                        }
                                                        return ( <React.Fragment></React.Fragment> )
                                                    })}
                                                </div>
                                            </React.Fragment>
                                        )
                                    }
                                    
                                    return (
                                            <React.Fragment key={count}>
                                                {item.subcategories.map((sub, index) => {
                                                    return (
                                                        <div className={classes.group} key={index}>
                                                            <a href="/" className={classes.groupHead}>{sub.name}</a>
                                                            {sub.subcategories.map((link, subIndex) => {
                                                                return (
                                                                    <div  key={subIndex} className={classes.linkCover}>
                                                                        <a href="/"> {link.name}</a>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    )
                                                })}
                                            </React.Fragment>
                                        )
                                    
                                }
                                return(
                                    <React.Fragment></React.Fragment>
                                )
                            })
                        }
                    </div>
                </div> :
                null
            }

        </div>
    )
}

export default LeftCategories;