const products = [
  {
    "id": 0,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110906/bo-ssam-dinner-for-4.c4a32e8801e2f0283e0565bbe8493149.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Momofuku",
    "dsc": "Half Bo Ssäm Dinner for 4-6",
    "price": 169,
    "rate": 4,
    "country": "New York, NY"
  },
  {
    "id": 1,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133100/legendary-seafood-gumbo.a4010efb8ba0569ff59d68c3723f0963.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Commander's Palace",
    "dsc": "Legendary Seafood Gumbo",
    "price": 89,
    "rate": 4,
    "country": "New Orleans, LA"
  },
  {
    "id": 2,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Gramercy Tavern",
    "dsc": "The Gramercy Tavern Burger - 4 Pack",
    "price": 99,
    "rate": 4,
    "country": "New York, NY"
  },
  {
    "id": 3,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134235/complete-fried-chicken-dinner-for-4.aeabf841c124b9cc2fb0166f27790999.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Blue Ribbon",
    "dsc": "\"The Coop\" Complete Fried Chicken Dinner for 4",
    "price": 119,
    "rate": 4,
    "country": "New York, NY"
  },
  {
    "id": 4,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132987/traditional-meat-empanadas-with-llajua-sauce-12-pack.f2adcfeb4ccf027675047f1367ce83ca.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Chef Francis Mallmann",
    "dsc": "Traditional Beef Empanadas with Llajua Sauce - 12 Pack",
    "price": 99,
    "rate": 4,
    "country": "Patagonia, Argentina"
  },
  {
    "id": 5,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110984/pork-buns-12-pack.67a379b014b23c7fd944ab48b9e720f6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Momofuku",
    "dsc": "Pork Buns - 12 Pack",
    "price": 119,
    "rate": 4,
    "country": "New York, NY"
  },
  {
    "id": 6,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131336/marcus-hot-honey-chicken-and-cornbread-waffles-kit-for-4.618df9b9613b506f65c8342ab2e28b32.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Marcus Samuelsson's Streetbird",
    "dsc": "Marcus’ Hot Honey Chicken & Cornbread Waffles Kit for 4",
    "price": 99,
    "rate": 5,
    "country": "Harlem, NY"
  },
  {
    "id": 7,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114579/zahav-hummus-and-salatim-spread-for-6-8.137df09ea04ec063480f58ead8fe4b83.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Zahav",
    "dsc": "Zahav Hummus & Salatim Spread",
    "price": 99,
    "rate": 4,
    "country": "Philadelphia, PA"
  },
  {
    "id": 8,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106027/wood-fired-pizzas-best-seller-4-pack.1653bb05922ba153ac178f8365d27f6d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Pizzeria Bianco",
    "dsc": "Wood Fired Pizzas Best Seller - 4 Pack",
    "price": 129,
    "rate": 5,
    "country": "Phoenix, AZ"
  },
  {
    "id": 9,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134704/gramercy-tavern-mushroom-lasagna-4-pack.88c671dec184d8bee908d6f5d8d860f9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Gramercy Tavern",
    "dsc": "Gramercy Tavern Mushroom Lasagna for 4",
    "price": 99,
    "rate": 4,
    "country": "New York, NY"
  },
  {
    "id": 10,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133343/brown-butter-lobster-roll-kit-4-pack.f97b1254243c8628ad1a5cd41227f5d7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Eventide Oyster Co.",
    "dsc": "Brown Butter Lobster Roll Kit - 4 Pack",
    "price": 99,
    "rate": 5,
    "country": "Portland, ME"
  },
  {
    "id": 11,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104768/commanders-palace-three-course-shrimp-and-grits-dinner-for-2.984253533e589547e834420efccc174a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Commander's Palace",
    "dsc": "Commander's Palace Three-Course Shrimp & Grits Dinner for 2",
    "price": 169,
    "rate": 4,
    "country": "New Orleans, LA"
  },
  {
    "id": 12,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104628/butchers-feast-for-4.cf40ca583a3bc2de78ac6355ee4b2995.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Cote Korean Steakhouse",
    "dsc": "The Original Butcher's Feast® for 4",
    "price": 259,
    "rate": 5,
    "country": "New York, NY"
  },
  {
    "id": 13,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117831/whole-plate-short-rib-dinner-for-3-4.3d4f7a1d5441c0a3a50263c89ef3fb47.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "RedFarm",
    "dsc": "Whole Peking Duck Kit for 4",
    "price": 139,
    "rate": 5,
    "country": "New York, NY"
  },
  {
    "id": 14,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126766/unconventional-texas-bbq-sampler-for-4-6.ee40a926a0863ceeb13b1eafb987c7d1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Underbelly by Chris Shepherd",
    "dsc": "Unconventional Texas BBQ Sampler for 4-6",
    "price": 119,
    "rate": 5,
    "country": "Houston, TX"
  },
  {
    "id": 15,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113695/traditional-negiri-sushi-and-cutroll-kit-for-2.381bee7a4e1be32ad5818d93524b0bef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Blue Ribbon Sushi",
    "dsc": "Blue Ribbon Sushi - DIY Kit for 2",
    "price": 129,
    "rate": 5,
    "country": "New York, NY"
  },
  {
    "id": 16,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114544/zahav-lamb-shoulder-meal-kit-for-4-6.58cfa4d3d5eca52ac45b2d37a9d0f2d4.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Zahav",
    "dsc": "Zahav Lamb Shoulder Meal Kit",
    "price": 249,
    "rate": 5,
    "country": "Philadelphia, PA"
  },
  {
    "id": 17,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131364/the-classic-plateau-dinner-for-2.9906825037a76931415a8fb5e8a2dcbd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Blue Ribbon",
    "dsc": "The Classic Plateau Seafood Dinner for 2",
    "price": 139,
    "rate": 5,
    "country": "New York, NY"
  },
  {
    "id": 18,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112776/mac-and-cheese-chicken-pot-pie-combo-for-4.c77be8dcb4fabfa1870a2ff4a6bd4c6a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Wolfgang Puck Catering",
    "dsc": "Mac and Cheese + Chicken Pot Pie Combo for 4",
    "price": 129,
    "rate": 4,
    "country": "Los Angeles, CA"
  },
  {
    "id": 19,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104674/prime-galbi-steak-feast-for-4.51c78b5ba768078b166fe91325e60edc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Cote Korean Steakhouse",
    "dsc": "Prime Galbi Steak Feast for 4",
    "price": 249,
    "rate": 5,
    "country": "New York, NY"
  },
  {
    "id": 20,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126887/dry-aged-boneless-ribeye-steak-dinner-for-4.81c3bdc05fe6bdb2c2214709863120e0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Chef Francis Mallmann",
    "dsc": "Dry-Aged Boneless Ribeye Steak Dinner Kit for 4",
    "price": 225,
    "rate": 4,
    "country": "Patagonia, Argentina"
  },
  {
    "id": 21,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104006/wood-fired-pizza-choose-your-own-4-pack.e36692807e17618a646885a8087a4c97.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Pizzeria Bianco",
    "dsc": "Wood Fired Pizza - Choose Your Own 4 Pack",
    "price": 135,
    "rate": 4,
    "country": "Phoenix, AZ"
  },
  {
    "id": 22,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/102811/legendary-turtle-soup.12d6f4c9806c3cf11cd2ff2a160657e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Fox & the Knife",
    "dsc": "Pasta Dinner Gift Basket",
    "price": 129,
    "rate": 5,
    "country": "Boston, MA"
  },
  {
    "id": 23,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112821/chinese-tea-smoked-whole-duck.97b321323431f1453d204a3ba9a35293.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Shirley Chung's Ms. Chi",
    "dsc": "Chinese Tea Smoked Whole Duck",
    "price": 119,
    "rate": 4,
    "country": "Los Angeles, CA"
  },
  {
    "id": 24,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133293/traditional-meat-empanadas-with-llajua-sauce-24-pack.800489d1d8db1e649e129968ed91e449.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Chef Francis Mallmann",
    "dsc": "Traditional Beef Empanadas with Llajua Sauce - 24 Pack",
    "price": 149,
    "rate": 4,
    "country": "Patagonia, Argentina"
  },
  {
    "id": 25,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/111241/choose-your-own-pasta-dinner-for-4.1195531d1b5fd7958e85d2640bd4d5bf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Fox & the Knife",
    "dsc": "Pasta Dinner for 4 - Choose Your Own",
    "price": 99,
    "rate": 5,
    "country": "Boston, MA"
  },
  {
    "id": 26,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129322/marcus-fried-chicken-wings.95e4f4d5cb4d3e069f4addcb3e33b111.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Marcus Samuelsson's Streetbird",
    "dsc": "Marcus’ Fried Chicken Wings for 2",
    "price": 99,
    "rate": 5,
    "country": "Harlem, NY"
  },
  {
    "id": 27,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133992/taco-combo-kit-for-4-6-choose-your-own.62a9fa8e0b5912c035e2999508fe36e1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Johnny Sanchez",
    "dsc": "Taco Combo Kit for 4-6 - Choose Your Own",
    "price": 119,
    "rate": 4,
    "country": "New Orleans, LA"
  },
  {
    "id": 28,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110987/shiitake-mushroom-buns-12-pack.449e51af13ae6204f3c2914355d427ac.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Momofuku",
    "dsc": "Shiitake Mushroom Buns - 12 Pack",
    "price": 109,
    "rate": 4,
    "country": "New York, NY"
  },
  {
    "id": 29,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/102811/legendary-turtle-soup.12d6f4c9806c3cf11cd2ff2a160657e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Commander's Palace",
    "dsc": "Legendary Turtle Soup",
    "price": 89,
    "rate": 4,
    "country": "New Orleans, LA"
  },
  {
    "id": 30,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119272/blue-ribbon-special-sushi-diy-kit-for-2-3.08c8f6c674366187e651ccb03cd1747d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Blue Ribbon Sushi",
    "dsc": "Blue Ribbon Special Sushi - DIY Kit for 2-3",
    "price": 169,
    "rate": 5,
    "country": "New York, NY"
  },
  {
    "id": 31,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103477/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Raoul's",
    "dsc": "Burger Au Poivre Kit - 4 Pack",
    "price": 99,
    "rate": 5,
    "country": "New York, NY"
  },
  {
    "id": 32,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98019/pork-and-shrimp-wontons-20-pack.1489740a2c5ab4c5585b49ebbde2f1c1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Shirley Chung's Ms. Chi",
    "dsc": "Pork and Shrimp Wontons - 20 Pack",
    "price": 69,
    "rate": 4,
    "country": "Los Angeles, CA"
  },
  {
    "id": 33,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112230/pasta-dinner-for-2-choose-your-own.f5edf5a6c05115eec571d2c2f3805300.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Fox & the Knife",
    "dsc": "Pasta Dinner for 2 - Choose Your Own",
    "price": 69,
    "rate": 5,
    "country": "Boston, MA"
  },
  {
    "id": 34,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126975/traditional-argentinian-asado-dinner-kit-for-8.0143a30b0ccda3282a3f81a0c13a6f7b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Chef Francis Mallmann",
    "dsc": "Traditional Argentinian Asado Feast for 10-12",
    "price": 469,
    "rate": 5,
    "country": "Patagonia, Argentina"
  },
  {
    "id": 35,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131291/neapolitan-pizza-choose-your-own-4-pack.e9e370c647523cb3b6a8ee6f60c9a9c1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Pizzeria Delfina",
    "dsc": "Neapolitan Pizza - Choose Your Own 4 Pack",
    "price": 119,
    "rate": 4,
    "country": "San Francisco, CA"
  },
  {
    "id": 36,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/122768/handf-double-stack-burger-kit-for-4.4ee9f54b1d6087e9996335f07c13e5cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Holeman & Finch",
    "dsc": "Double Stack Burger Kit for 4",
    "price": 79,
    "rate": 5,
    "country": "Atlanta, GA"
  },
  {
    "id": 37,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/111005/bo-ssam-dinner-for-4-6.20cb5b3dede7ecca90c888aadc93567f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Momofuku",
    "dsc": "Whole Bo Ssäm Dinner for 8-10",
    "price": 269,
    "rate": 5,
    "country": "New York, NY"
  },
  {
    "id": 38,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134028/chicken-jiaozi-dumplings-giant-cheese-burger-potstickers-best-seller-pack.908a1c285e5356202e5163fc03ede65e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Shirley Chung's Ms. Chi",
    "dsc": "Ms. Chi Potstickers and Dumplings - Combo Pack",
    "price": 99,
    "rate": 5,
    "country": "Los Angeles, CA"
  },
  {
    "id": 39,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133221/vietnamese-dinner-kit-for-4-choose-your-own.6adf8528fae31fa5260ee6c1bed222c4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "The Slanted Door",
    "dsc": "Vietnamese Dinner Kit for 4 - Choose Your Own",
    "price": 149,
    "rate": 4,
    "country": "San Francisco, CA"
  },
  {
    "id": 40,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97105/chicken-jiaozi-dumplings-20-pack.15df330a0f96492d492d6f3ed6518aa8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Shirley Chung's Ms. Chi",
    "dsc": "Chicken Jiaozi Dumplings - 20 Pack",
    "price": 69,
    "rate": 4,
    "country": "Los Angeles, CA"
  },
  {
    "id": 41,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117831/whole-plate-short-rib-dinner-for-3-4.3d4f7a1d5441c0a3a50263c89ef3fb47.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Momofuku",
    "dsc": "Whole Plate Short Rib Dinner for 3-4",
    "price": 249,
    "rate": 4,
    "country": "New York, NY"
  },
  {
    "id": 42,
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/111245/pasta-dinner-bestsellers-for-4.94ca16a49a00a4f50714e827ab686510.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Fox & the Knife",
    "dsc": "Best Sellers - Pasta Dinner for 4",
    "price": 89,
    "rate": 4,
    "country": "Boston, MA"
  }
]